"use client";

import type { InputHTMLAttributes } from "react";
import { forwardRef, useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { cn } from "@/utils";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ type = "text", className, ...props }, ref) => {
    const [showPass, setShowPass] = useState(false);
    const isPassword = type === "password";
    const inputType = isPassword && showPass ? "text" : type;

    const inputElement = (
      <input
        ref={ref}
        type={inputType}
        className={cn(
          "bg-brand-2/10 w-full border-b border-neutral-3 py-2 pr-4 font-inter placeholder:text-neutral-4 focus:outline-none",
          className
        )}
        {...props}
      />
    );

    return isPassword ? (
      <div className="relative">
        {inputElement}
        <button
          type="button"
          onClick={() => setShowPass(!showPass)}
          className="absolute top-[50%] right-3 bottom-2.5 h-fit -translate-y-1/2 cursor-pointer text-neutral-4"
          tabIndex={-1}
        >
          {showPass ? <EyeOff /> : <Eye />}
        </button>
      </div>
    ) : (
      inputElement
    );
  }
);

Input.displayName = "Input";

export default Input;
