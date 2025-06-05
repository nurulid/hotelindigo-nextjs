"use client"

import { useMobileSheet } from "@/context/mobile-sheet-context";
import React from "react";

export const MenuButton = ({isScrolled, isDark}) => {
  const { openSheet } = useMobileSheet();

  return (
    <button onClick={openSheet} className={["uppercase group", ].join(" ")} style={{
      "--color": isScrolled || isDark ? "#002d52" : "#fff"
    }}>
      menu
      <span className="!block h-[1px] w-full mb-[3px] group-hover:w-[70%] transition-all duration-300 bg-[var(--color)]"></span>
      <span className="!block h-[1px] w-full mb-[3px] bg-[var(--color)]"></span>
      <span className="!block h-[1px] w-full mb-[3px] bg-[var(--color)]"></span>
    </button>
  );
};
