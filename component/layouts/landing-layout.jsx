"use client";

import React from "react";
import { MobileSheetProvider } from "@/context/mobile-sheet-context";
import { MobileSheet } from "../header/mobile-sheet";
import { MobileNavigation } from "../header/mobile-navigation";
import Header from "../header";

export const LandingLayout = ({ children }) => {
  return (
    <MobileSheetProvider>
      <Header />
      <MobileSheet />
      <MobileNavigation />
      <main className="relative">{children}</main>
    </MobileSheetProvider>
  );
};
