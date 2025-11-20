import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  touched?: boolean;
  error?: string;
  appendIcon?: React.ReactNode;
  containerClassName?: string;
  inputClassName?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      touched,
      error,
      value,
      appendIcon,
      containerClassName = "",
      inputClassName = "",
      className,
      type = "text",
      ...props
    },
    ref
  ) => {
    const hasError = touched && error;

    return (
      <div className={cn("relative", containerClassName)}>
        {label && (
          <label htmlFor={props.name} className="text-sm font-semibold text-gray-700 mb-2 block">
            {label}
          </label>
        )}

        <div className="relative">
          <input
            ref={ref}
            type={type}
            value={value}
            className={cn(
              "w-full h-12 px-4 py-3 text-gray-900 bg-white border-2 rounded-xl transition-all duration-300 placeholder:text-gray-400",
              "focus:outline-none focus:ring-4 focus:ring-green-100 focus:border-green-500",
              "hover:border-gray-300",
              hasError ? "border-red-300 focus:border-red-500 focus:ring-red-100" : "border-gray-200",
              "disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-gray-50",
              inputClassName,
              className
            )}
            {...props}
          />
          {appendIcon && (
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">{appendIcon}</div>
          )}
        </div>

        {hasError && (
          <div className="flex items-center gap-1 mt-2">
            <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-sm text-red-600">{error}</span>
          </div>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
