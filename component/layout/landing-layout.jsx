"use client";

import React from "react";
import { Header } from "../header";
import { MobileSheetProvider } from "@/context/mobile-sheet-context";
import { MobileSheet } from "../header/mobile-sheet";
import { MobileNavigation } from "../header/mobile-navigation";

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
