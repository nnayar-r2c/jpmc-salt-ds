import { makePrefixer } from "@salt-ds/core";

import { useWindow } from "@salt-ds/window";
import { useComponentCssInjection } from "@salt-ds/styles";
import sliderCss from "../Slider.css";

const withBaseName = makePrefixer("saltSliderSelection");

export interface SliderSelectionProps {
  valueLength: number;
}

export function SliderSelection({ valueLength }: SliderSelectionProps) {
  const targetWindow = useWindow();
  useComponentCssInjection({
    testId: "salt-slider-handle",
    css: sliderCss,
    window: targetWindow,
  });

  return (
    <div className={valueLength < 2 ? withBaseName() : withBaseName("range")} />
  );
}
