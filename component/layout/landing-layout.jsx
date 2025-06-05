"use client"

import React from "react";
import { Header } from "../header";
import { MobileSheetProvider } from "@/context/mobile-sheet-context";

export const LandingLayout = ({ children }) => {
  return (
    <MobileSheetProvider>
      <Header />
      <main className="relative">{children}</main>
   </MobileSheetProvider>
  );
};
