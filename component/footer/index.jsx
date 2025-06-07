import React from "react";
import { Awards } from "./awards";
import { Subscriptionform } from "./subscription-form";
import { Navigation } from "./navigation";
import { Companies } from "./companies";
import { Credit } from "./credit";

const Footer = ({awards}) => {
  return (
    <footer className="mb-[70px] sm:mb-0">
      <section className="container-y-padding bg-primary text-white">
        <div className="container space-y-20">
          <Awards awards={awards}/>
          <Subscriptionform />
          <Navigation />
        </div>
      </section>
      
      {/* <Companies /> */}

      <Credit />
    </footer>
  );
};

export default Footer;