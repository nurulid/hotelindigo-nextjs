import React from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { twMerge } from "tailwind-merge";

export const Dropdown = DropdownMenu.Root;
export const DropdownPortal = DropdownMenu.Portal;
export const DropdownSeparator = DropdownMenu.Separator;
export const DropdownSub = DropdownMenu.Sub;
export const DropdownArrow = DropdownMenu.Arrow;

export const DropdownTrigger = ({ children }) => {
  return (
    <DropdownMenu.Trigger
      asChild
      className="text-sm font-medium hover:opacity-80 transition-all cursor-pointer text-left"
    >
      {children}
    </DropdownMenu.Trigger>
  );
};

export const DropdownContent = ({
  className = "",
  children,
  ...contentProps
}) => {
  return (
    <DropdownMenu.Content
      {...contentProps}
      className={`min-w-[200px] bg-white shadow-md p-3 will-change-[opacity,transform] z-50 ${className}`}
    >
      {children}
    </DropdownMenu.Content>
  );
};

export const DropdownLabel = ({ children }) => {
  return (
    <DropdownMenu.Label className="text-xs font-semibold px-2 pb-2 opacity-50">
      {children}
    </DropdownMenu.Label>
  );
};

export const DropdownItem = ({ children, className }) => {
  return (
    <DropdownMenu.Item
      className={twMerge(
        "py-2 px-2 mb-1 last:mb-0",
        "text-sm font-medium group leading-none",
        "flex items-center justify-between relative select-none outline-none",
        className
      )}
    >
      {children}
    </DropdownMenu.Item>
  );
};
