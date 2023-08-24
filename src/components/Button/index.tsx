"use client"

import type { FC, ReactNode } from "react";
import cn from "classnames";

type IButtonSize = "sm" | "md" | "lg";
type IButtonType = "primary" | "outline" | "disabled";

interface Props {
  size?: IButtonSize;
  type?: IButtonType;
  children?: ReactNode;
  onClick?: () => void;
}

const Button: FC<Props> = ({
  size = "md",
  type = "primary",
  children,
  onClick,
}) => {
  const BUTTON_TYPE_MAPPING: Record<IButtonType, string> = {
    primary:
      "text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 focus:bg-purple-200",
    outline:
      "text-gray-900 relative absolute left-0.5 top-0.5 right-0.5 bottom-0.5 bg-white rounded-lg before:bg-gradient-to-r before:from-purple-500 before:via-purple-600 before:to-purple-700 before:absolute before:-top-0.5 before:-bottom-0.5 before:-left-0.5 before:-right-0.5 before:rounded-lg before:z-[-1]",
    disabled: "text-white bg-purple-400 cursor-not-allowed",
  };

  const BUTTON_SIZE_MAPPING: Record<IButtonSize, string> = {
    sm: "font-medium rounded-lg text-sm text-center w-24 h-10",
    md: "font-medium rounded-lg text-md text-center w-32 h-14",
    lg: "font-medium rounded-lg text-xl text-center w-52 h-20",
  };

  return (
    <>
      <button
        className={cn(BUTTON_TYPE_MAPPING[type], BUTTON_SIZE_MAPPING[size])}
        disabled={type === "disabled"}
        onClick={() => {
          if (onClick) {
            onClick();
          }
        }}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
