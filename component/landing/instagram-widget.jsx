import Link from "next/link";
import React from "react";

export const InstagramWidget = () => {
  return (
    <section className="container container-y-padding">
      <div className="text-center mb-[30px] space-y-4">
        <h2 className="uppercase text-[2.2rem]">HIT US UP ON THE GRAM</h2>
        <Link href="/instagram.com" className="link-btn" target="_blank">GO SOCIAL</Link>
      </div>
      <div>
        <script src="https://cdn.lightwidget.com/widgets/lightwidget.js"></script>
        <iframe
          title="Instagram feed from our official account"
          src="https://cdn.lightwidget.com/widgets/1d28e1aebc5c5c53945abe4385a9e4a2.html"
          allowtransparency="true"
          className="lightwidget-widget w-full"
       />
      </div>
    </section>
  );
};
