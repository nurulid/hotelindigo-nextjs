import React from "react";
import { Header } from "../header";

export const LandingLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="relative">{children}</main>
    </>
  );
};
