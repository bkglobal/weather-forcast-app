import React from "react";
import { ButtonSize, ButtonType } from "./type";

export interface ButtonProps {
  /**
   * Type of `Button`
   */
  type?: ButtonType;
  /**
   * The size of `Button`
   * @default "regular"
   */
  size?: ButtonSize;
  /**
   * Adds loader inside `Button` when waiting for an action to complete
   */
  loading?: boolean;
  /**
   * Text to be added inside `Button`
   */
  children?: React.ReactText | React.ReactNode;
  /**
   * Expands the `Button` to full width
   */
  expanded?: boolean;
  /**
   * Specifies tab index of `Button`
   * @default 0
   */
  tabIndex?: number;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      size = "regular",
      tabIndex = 0,
      expanded = false,
      loading = false,
      children,
      className,
      ...rest
    } = props;

    return (
      <button
        ref={ref}
        tabIndex={tabIndex}
        {...rest}
        className={`
          flex justify-center items-center
          text-secondary-light
          box-border relative cursor-pointer select-none py-2 text-center 
          bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-md
          ${size === "tiny" ? "h-7 px-2 text-sm leading-2" : ""}
          ${size === "regular" ? "h-9 px-3 text-base leading-4" : ""}
          ${size === "large" ? "h-13 px-5 text-lg leading-7" : ""}
          ${expanded ? "w-full" : ""}
          ${className || ""}
        `}
        disabled={loading}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default React.memo(Button);
