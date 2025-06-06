import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

export const Input = forwardRef((props, ref) => {
  const { placeholder = "Enter Data", className, ...inputProps } = props;

  return (
    <input
      ref={ref}
      {...inputProps}
      placeholder={placeholder}
      className={twMerge(
        "py-4 px-0 w-full border-b text-sm font-semibold",
        "text-white bg-primary",
        "read-only:focus:outline-none",
        "focus:outline-none focus:border-b focus:border-blue-700", 
        "placeholder:font-semibold placeholder:text-lg placeholder:text-white",
        className
      )}
    />
  );
});

Input.displayName = "Input";
