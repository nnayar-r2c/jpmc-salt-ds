/**
 *
 * Steps performed
 *
 * - Optimize SVG, https://github.com/svg/svgo
 *
 *   - Add `data-testid="Foo SVG"` to svg node
 *   - Export named component wrapped with CountrySymbol component
 *
 */

import fs from "fs";
import path from "path";
import glob from "glob";
import prettier from "prettier";
import Mustache from "mustache";
import { optimize } from "svgo";
import { fileURLToPath } from "url";
import { svgAttributeMap } from "./svgAttributeMap.mjs";

/** Change kebab casing to Pascal casing */
function pascalCase(str) {
  let arr = str.split(" ");
  let capital = arr.map(
    (item) =>
      item.charAt(0).toLocaleUpperCase("en-US") +
      item.slice(1).toLocaleLowerCase("en-US")
  );

  return capital.join("");
}

// Createthe folder for the CountrySymbolComponents
const generateComponentsFolder = (basePath) => {
  if (!fs.existsSync(path.join(basePath, "./components/"))) {
    fs.mkdirSync(path.join(basePath, "./components/"));
  }
};

// Generate all the country symbol components
const generateCountrySymbolComponents = ({
  templatePath,
  basePath,
  componentsPath,
}) => {
  const countryMetaMap = {};

  const fileArg = process.argv.splice(2).join("|");
  // options is optional
  const options = {};

  const template = fs.readFileSync(templatePath, "utf-8");
  const globPath = path
    .join(basePath, `./SVG/+(${fileArg})`)
    .replace(/\\/g, "/");

  const fileNames = glob.sync(globPath, options);

  fileNames.map((fileName) => {
    const svgString = fs.readFileSync(fileName, "utf-8");

    const filenameWithoutExtension = path.parse(fileName).name;

    const firstSpaceIndex = filenameWithoutExtension.indexOf(" ");

    const baseCountryName = filenameWithoutExtension
      .slice(firstSpaceIndex)
      .trim();

    const countryCode = filenameWithoutExtension
      .slice(0, firstSpaceIndex)
      .toUpperCase();

    const countryName = filenameWithoutExtension.slice(firstSpaceIndex).trim();

    const countryNameSanitized = countryName
      .replaceAll(new RegExp("[(|)|.|\\-|,|'|\\[|\\]]", "g"), "")
      .normalize("NFD")
      .replace(/\p{Diacritic}/gu, "");
    const componentName = pascalCase(countryNameSanitized);

    const countryFileName = componentName + ".tsx";

    let viewBox;
    const newFilePath = path.join(componentsPath, componentName + ".tsx");

    countryMetaMap[countryCode] = {
      countryCode,
      countryName,
      countryNameSanitized,
      componentName,
      textName: baseCountryName,
      countryFileName,
    };

    console.log("processing", fileName, "to", newFilePath);

    // let iconTitle = filenameWithoutExtension
    //   .split("-")
    //   .join(" ")
    //   .toLowerCase();

    // SVGO is a separate step to enable multi-pass optimizations.
    const optimizedSvg = optimize(svgString, {
      multipass: true,
      plugins: [
        {
          name: "preset-default",
          params: {
            overrides: {
              // makes country symbols scaled into width/height box
              removeViewBox: false,
            },
          },
        },
        {
          name: "removeAttrs",
          params: {
            attrs: "(width|height)",
          },
        },
      ],
    });

    const svgPaths = optimize(optimizedSvg.data, {
      plugins: [
        {
          name: "mapHTMLAttributesToReactProps",
          fn: () => {
            return {
              element: {
                enter: (node) => {
                  const newAttributes = {};
                  // preserve an order of attributes
                  for (const [name, value] of Object.entries(node.attributes)) {
                    if (
                      node.name === "mask" &&
                      name === "style" &&
                      typeof value === "string" &&
                      value.includes("mask-type:")
                    ) {
                      newAttributes["mask-type"] = value.slice(10);
                    } else {
                      newAttributes[svgAttributeMap[name] || name] = value;
                    }
                  }
                  node.attributes = newAttributes;
                },
              },
            };
          },
        },
        {
          name: "find-viewBox",
          fn: () => {
            return {
              element: {
                enter: (node, parentNode) => {
                  if (parentNode.type === "root") {
                    viewBox = node.attributes.viewBox;
                  }
                },
              },
            };
          },
        },
        {
          name: "removeSvg",
          fn: () => {
            return {
              element: {
                exit: (node, parentNode) => {
                  if (node.name === "svg") {
                    const index = parentNode.children.indexOf(node);
                    parentNode.children.splice(index, 1, ...node.children);
                  }
                },
              },
            };
          },
        },
      ],
    });

    const fileContents = Mustache.render(template, {
      svgElements: svgPaths.data,
      componentName,
      ariaLabel: baseCountryName.toLowerCase(),
      viewBox: viewBox ?? "0 0 72 72",
    });

    const formattedResult = prettier.format(fileContents, {
      parser: "babel-ts",
      singleQuote: false,
      trailingComma: "none",
      printWidth: 80,
      proseWrap: "always",
    });

    fs.writeFileSync(newFilePath, formattedResult, {
      encoding: "utf8",
    });
  });

  return countryMetaMap;
};

// Generate the index file to export the CountrySymbol components
const generateIndex = ({ countryMetaMap, componentsPath }) => {
  const content = Object.values(countryMetaMap)
    .sort((a, b) => a.fileName - b.fileName)
    .map((countryMeta) => {
      return `export { default as ${countryMeta.componentName} } from './${countryMeta.componentName}';`;
    });

  const contentWithMetaExport = [...content];

  const formattedResult = prettier.format(contentWithMetaExport.join("\n"), {
    parser: "babel-ts",
    singleQuote: false,
    trailingComma: "none",
    printWidth: 80,
    proseWrap: "always",
  });

  const outputFile = path.join(componentsPath, "index.ts");

  console.log("creating index at:", outputFile);

  fs.writeFile(
    outputFile,
    formattedResult,
    { encoding: "utf8" },
    function (err) {
      if (err) return console.log(err);
    }
  );
};

const generateCountryMeta = ({ countryMetaMap, basePath }) => {
  const outputFile = path.join(basePath, "countryMeta.ts");

  const typeText = `
    export type CountryMeta = {
      countryCode: string;
      countryName: string;
      countryNameSanitized: string;
      componentName: string;
      textName: string;
      countryFileName: string;
    }

    export type CountryCode = (typeof countryCodes)[number];

    export type CountriesMeta = Record<CountryCode, CountryMeta>;
  `;

  let metaText = ["export const countryMeta: CountriesMeta = {"];
  const countryCodes = [];

  for (const code in countryMetaMap) {
    const countryMeta = countryMetaMap[code];

    countryCodes.push(code);

    const entryText = `"${code}": {
      countryCode: "${countryMeta.countryCode}",
      countryName: "${countryMeta.countryName}",
      countryNameSanitized:  "${countryMeta.countryNameSanitized}",
      componentName: "${countryMeta.componentName}",
      textName: "${countryMeta.textName}",
      countryFileName: "${countryMeta.countryFileName}",
    },`;

    metaText.push(entryText);
  }

  metaText.push("};");

  const countryCodeText = `export const countryCodes = ${JSON.stringify(
    countryCodes
  )} as const`;

  const joinedText = [countryCodeText, typeText, metaText.join("\n")].join(
    "\n"
  );

  const formattedResult = prettier.format(joinedText, {
    parser: "babel-ts",
    singleQuote: false,
    trailingComma: "none",
    printWidth: 80,
    proseWrap: "always",
  });

  fs.writeFile(
    outputFile,
    formattedResult,
    { encoding: "utf8" },
    function (err) {
      if (err) return console.log(err);
    }
  );
};

const generateCountrySymbolMap = ({ countryMetaMap, basePath }) => {
  const outputFile = path.join(basePath, "countrySymbolMap.ts");

  const importText = `
  import { ElementType } from 'react';
    import * as Countries from './components';
    import { CountrySymbolProps } from './country-symbol';
    import { CountryCode } from './countryMeta';
  `;

  const typeText = `
    type CountrySymbolMap = Record<CountryCode, ElementType<CountrySymbolProps>>;
  `;

  let metaText = ["export const countrySymbolMap: CountrySymbolMap = {"];

  for (const code in countryMetaMap) {
    const countryMeta = countryMetaMap[code];

    const entryText = `"${code}": Countries.${countryMeta.componentName},`;

    metaText.push(entryText);
  }

  metaText.push("};");

  const joinedText = [importText, typeText, metaText.join("\n")].join("\n");

  const formattedResult = prettier.format(joinedText, {
    parser: "babel-ts",
    singleQuote: false,
    trailingComma: "none",
    printWidth: 80,
    proseWrap: "always",
  });

  fs.writeFile(
    outputFile,
    formattedResult,
    { encoding: "utf8" },
    function (err) {
      if (err) return console.log(err);
    }
  );
};

const generateLazyMap = ({ countryMetaMap, basePath }) => {
  const outputFile = path.join(
    basePath,
    "./lazy-country-symbol/",
    "lazyMap.ts"
  );

  const importText = `
    import React from "react";
  `;

  let laztMapText = ["export const lazyMap = {"];

  for (const code in countryMetaMap) {
    const countryMeta = countryMetaMap[code];

    const entryText = `"${code}": React.lazy(() => import("../components/${countryMeta.componentName}")),`;

    laztMapText.push(entryText);
  }

  laztMapText.push("} as const");

  const joinedText = [importText, laztMapText.join("\n")].join("\n");

  const formattedResult = prettier.format(joinedText, {
    parser: "babel-ts",
    singleQuote: false,
    trailingComma: "none",
    printWidth: 80,
    proseWrap: "always",
  });

  fs.writeFile(
    outputFile,
    formattedResult,
    { encoding: "utf8" },
    function (err) {
      if (err) return console.log(err);
    }
  );
};

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const basePath = path.join(__dirname, "../src");
const componentsPath = path.join(basePath, "./components/");
const templatePath = path.join(__dirname, "./templateCountrySymbol.mustache");

// Run it
generateComponentsFolder(basePath);
const countryMetaMap = generateCountrySymbolComponents({
  templatePath,
  componentsPath,
  basePath,
});
generateCountrySymbolMap({ countryMetaMap, basePath });
generateCountryMeta({ countryMetaMap, basePath });
generateLazyMap({ countryMetaMap, basePath });
generateIndex({ countryMetaMap, componentsPath });
