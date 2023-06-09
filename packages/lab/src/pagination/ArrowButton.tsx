import { Button, ButtonProps } from "@salt-ds/core";
import { ChevronLeftIcon, ChevronRightIcon, IconProps } from "@salt-ds/icons";
import { clsx } from "clsx";
import { ComponentType, KeyboardEventHandler, MouseEventHandler } from "react";
import { withBaseName } from "./utils";

export type ArrowButtonType = "previous" | "next";

export interface ArrowButtonProps extends ButtonProps {
  arrowButtonType: ArrowButtonType;
  onPress: () => void;
}

interface ButtonContent {
  icon: ComponentType<IconProps>;
  name: string;
  className: string;
}

const contentByType = new Map<ArrowButtonType, ButtonContent>([
  [
    "previous",
    {
      icon: ChevronLeftIcon,
      name: "Previous Page",
      className: withBaseName("previousButton"),
    },
  ],
  [
    "next",
    {
      icon: ChevronRightIcon,
      name: "Next Page",
      className: withBaseName("nextButton"),
    },
  ],
]);

export const ArrowButton = ({
  arrowButtonType,
  onPress,
  onKeyDown: onKeyDownProp,
  onClick: onClickProp,
  ...restProps
}: ArrowButtonProps) => {
  const { icon: Icon, name, className } = contentByType.get(arrowButtonType)!;

  const onKeyDown: KeyboardEventHandler<HTMLButtonElement> = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      onPress();
    }
    onKeyDownProp && onKeyDownProp(event);
  };

  const onClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    onPress();
    onClickProp && onClickProp(event);
  };

  return (
    <Button
      {...restProps}
      variant="secondary"
      className={clsx(withBaseName("arrowButton"), className)}
      role="link"
      name={name}
      aria-label={name}
      onKeyDown={onKeyDown}
      onClick={onClick}
    >
      <Icon aria-label={name} />
    </Button>
  );
};
