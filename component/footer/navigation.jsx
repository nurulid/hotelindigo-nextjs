import Image from "next/image";
import React from "react";
import { SocialMedia } from "../header/social-media";
import Link from "next/link";

const NavigationItem = ({ href, children, ...rest }) => {
  return (
    <Link
      href={children}
      {...rest}
      className="text-white text-[.9rem] lg:text-[.8rem] xl:text-[.9rem] inline-block leading-[140%] transition-all duration-300 hover:text-secondary"
    >
      {children}
    </Link>
  );
};

export const Navigation = () => {
  const FOOTER_NAVIGATION = {
    products: [
      { label: "About IHG", href: "#" },
      { label: "IHG Global Brands", href: "#" },
      { label: "Explore Hotels", href: "#" },
      { label: "Site Map", href: "#" },
    ],
    legal: [
      { label: "Term of Use", href: "#" },
      { label: "Privacy Statement", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Cookie Usage", href: "#" },
    ],
  };

  return (
    <div className="flex sm:flex-row flex-col gap-10 items-center sm:items-start justify-between">
      <div className="w-[200px]">
        <Image
          src="/images/logo.png"
          alt=""
          width={128}
          height={115}
          className={[
            "transition-all duration-300 w-[180px] sm:w-[200px] filter invert brightness-0",
          ].join(" ")}
          priority
        />
      </div>

      <div className="sm:w-[25%]">
        <SocialMedia isFooter />
      </div>

      <div className="sm:w-[25%] flex sm:flex-row flex-col justify-between gap-10 items-center sm:items-start text-center sm:text-left">
        <ul className="space-y-2">
          {FOOTER_NAVIGATION.products.map((menu, index) => (
            <li key={index}>
              <NavigationItem href={menu.href}>{menu.label}</NavigationItem>
            </li>
          ))}
          <li>
            <Image
              src="/images/companies/ihg-rewards.png"
              width={200}
              height={100}
              alt=""
              className="filter invert brightness-0 mt-10"
            />
          </li>
        </ul>

        <ul className="space-y-2">
          {FOOTER_NAVIGATION.legal.map((menu, index) => (
            <li key={index}>
              <NavigationItem href={menu.href}>{menu.label}</NavigationItem>
            </li>
          ))}
          <li>
            <Image
              src="/images/companies/ihg-business.png"
              width={200}
              height={100}
              alt=""
              className="mt-10"
            />
          </li>
        </ul>
      </div>

      <div className="w-full sm:w-[170px] space-y-8">
        <div>
          <Link
            href="#"
            className="uppercase text-white text-light lg:text-[1.6rem] xl:text-[1.6rem] leading-[130%] text-center sm:text-left block"
          >
            Best Price Guarantee
          </Link>
          <p className="font-light text-white lg:text-[.8rem] xl:text-[.9rem] text-center sm:text-left">
            When you book with us
          </p>
        </div>
        <div>
          <p className="text-white lg:text-[.8rem] xl:text-[.9rem] uppercase text-center sm:text-left">
            Book Online / Call
          </p>
          <Link
            href="#"
            className="text-secondary font-light text-[1.6rem] lg:text-[1rem] xl:text-[1.2rem] text-center sm:text-left block"
          >
            001 803 016 0061
          </Link>
        </div>
      </div>
    </div>
  );
};
