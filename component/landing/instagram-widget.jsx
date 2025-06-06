"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { LinkButton } from "../shared/base-button";

export const InstagramWidget = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.lightwidget.com/widgets/lightwidget.js";
    script.async = true;
    document.body.appendChild(script);
    
    setIsMounted(true);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="container container-y-padding">
      <div className="text-center mb-[30px] space-y-4">
        <h2 className="uppercase text-[2.2rem]">HIT US UP ON THE GRAM</h2>
        <LinkButton href="https://instagram.com" target="_blank">GO SOCIAL</LinkButton>
      </div>
      <div>
        {isMounted && (
          <iframe
            title="Instagram feed from our official account"
            src="https://cdn.lightwidget.com/widgets/1d28e1aebc5c5c53945abe4385a9e4a2.html"
            allowtransparency="true"
            className="lightwidget-widget w-full"
            style={{ border: 0, overflow: "hidden" }}
          />
        )}
      </div>
    </section>
  );
};
