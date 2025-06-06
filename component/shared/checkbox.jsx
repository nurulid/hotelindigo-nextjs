"use client";

import { CheckIcon } from "lucide-react";
import { Root, Indicator } from "@radix-ui/react-checkbox";

export const Checkbox = (props) => {
  const { label, id, ...checkboxProps } = props;
  return (
    <div className="flex gap-3 items-center flex-wrap">
      <Root
        {...checkboxProps}
        id={id}
        className={[
          "flex size-6 appearance-none items-center justify-center rounded outline-none bg-white", 
          "border border-black", 
          "data-[state=checked]:bg-blue-700 data-[state=checked]:text-white data-[state=unchecked]:dark:border-white"
        ].join(" ")}
      >
        <Indicator className="font-medium">
          <CheckIcon size={12} className="stroke-[3px]" />
        </Indicator>
      </Root>

      {label && (
        <label htmlFor={id} className="leading-normal text-xs cursor-pointer">
          {label}
        </label>
      )}
    </div>
  );
};
