import React from "react";
import { Awards } from "./awards";
import { Subscriptionform } from "./subscription-form";
import { Navigation } from "./navigation";
import { Companies } from "./companies";

const Footer = ({awards}) => {
  return (
    <footer>
      <section className="container-y-padding bg-primary text-white">
        <div className="container space-y-20">
          <Awards awards={awards}/>
          <Subscriptionform />
          <Navigation />
        </div>
      </section>
      
      {/* <Companies /> */}

      <div className="bg-[#fafafa] py-[2rem] pb-24 sm:pb-0">
        <div className="container">
          <p className="text-center text-[.7rem] lg:text-[.8rem] xl:text-[.9rem] font-light">
            © 2025 Hotel Indigo Bali Seminyak Beach. All rights reserved. This
            hotel is owned by PT. Bali Perkasasukses and managed by{" "}
            <a
              href="https://www.ihg.com/"
              target="_blank"
              className="text-primary transition-all duration-300 hover:text-secondary"
            >
              InterContinental Hotels Group.
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;