"use client";

import React, { forwardRef, MouseEvent } from "react";
import { Loader } from "lucide-react";

type ButtonProps = {
  loading?: boolean;
  loadingText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
  className?: string;
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className = "",
      loading = false,
      loadingText = "Loading",
      leftIcon,
      rightIcon,
      fullWidth = false,
      disabled,
      onClick,
      type = "button",
      ...props
    },
    ref
  ) => {
    const isDisabled = Boolean(disabled || loading);

    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
      if (loading) {
        e.preventDefault();
        e.stopPropagation();
        return;
      }
      onClick?.(e);
    };

    return (
      <button
        ref={ref}
        type={type}
        className={[
          "primary-btn flex items-center justify-center gap-2",
          isDisabled ? "cursor-not-allowed bg-neutral-7 opacity-80" : "",
          fullWidth ? "w-full" : "",
          className, // allow overrides/extensions last
        ]
          .join(" ")
          .trim()}
        disabled={isDisabled}
        aria-busy={loading || undefined}
        aria-live={loading ? "polite" : undefined}
        data-loading={loading ? "true" : "false"}
        onClick={handleClick}
        {...props}
      >
        {loading ? <Loader className="h-5 w-5 animate-spin" aria-hidden="true" /> : leftIcon}
        <span className="whitespace-nowrap">{loading ? loadingText : children}</span>

        {!loading && rightIcon}
        {loading && !children && <span className="sr-only">{loadingText}</span>}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;
