"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useScroll, motion } from "motion/react";
import { MobileSheet } from "./header/mobile-sheet";
import { MobileNavigation } from "./header/mobile-navigation";
import { useMobileSheet } from "@/context/mobile-sheet-context";
import { MenuButton } from "./header/menu-button";

const SubMenu = ({ menu }) => {
  return (
    <ul>
      {menu.map((item, index) => (
        <NavigationItem key={index} label={item.label} href={item.href} />
      ))}
    </ul>
  );
};

const NavigationItem = ({ label, href, isScrolled }) => (
  <li>
    <Link
      href={href}
      className={[
        "relative after:content-[''] after:absolute after:block after:left-0 after:-top-[6px] after:h-[2px] after:w-0 after:transition-all after:!duration-300 after:!ease-in-out hover:after:w-[30px]",
        isScrolled ? "after:bg-secondary" : "after:bg-white",
      ].join(" ")}
    >
      {label}
    </Link>
  </li>
);

export const Header = () => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  const HEADER_NAVIGATION = [
    { label: "About us", href: "/" },
    { label: "Accomodations", href: "/" },
    { label: "Facilities", href: "/" },
    { label: "Dinning", href: "/" },
    { label: "Event", href: "/" },
    { label: "Offers", href: "/" },
    { label: "Press release", href: "/" },
    { label: "Gallery", href: "/" },
    { label: "Awards", href: "/" },
    { label: "Faq & Contact", href: "/" },
    { label: "En", href: "/" },
  ];

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  return (
    <motion.header
      className={[
        "flex justify-between gap-20 fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white shadow-lg h-[80px] items-center pr-5 sm:pr-0 pl-5 sm:pl-[50px]"
          : "bg-transparent h-[155px] items-start px-5 sm:px-[50px]",
      ].join(" ")}
    >
      <MobileSheet />
      <MobileNavigation />
      <div className="mobile-logo sm:static translate-x-0">
        <Image
          src="/images/logo.png"
          alt=""
          width={128}
          height={115}
          className={[
            "transition-all duration-300",
            isScrolled
              ? "w-[80px]"
              : "w-[80px] sm:w-[130px] pt-5 sm:pt-10 filter invert brightness-0",
          ].join(" ")}
          priority
        />
      </div>

      <div
        className={["flex items-center gap-5 w-full", isScrolled ? "h-full" : ""].join(
          " "
        )}
      >
        <ul
          className={[
            "uppercase hidden lg:flex items-center flex-wrap gap-3.5 text-[.8rem] font-semibold",
            isScrolled ? "py-0" : "text-white py-[40px]",
          ].join(" ")}
        >
          {HEADER_NAVIGATION.map((item, index) => (
            <NavigationItem
              key={index}
              label={item.label}
              href={item.href}
              isScrolled={isScrolled}
            />
          ))}
        </ul>

        <ul
          className={[
            "flex lg:hidden items-center gap-3.5 text-[.8rem] font-semibold ml-auto",
            isScrolled ? "py-0" : "text-white py-[40px]",
          ].join(" ")}
        >
          <NavigationItem label="EN" href="#" />
          <li className="hidden sm:block">
            <MenuButton isScrolled={isScrolled}/>
          </li>
        </ul>

        {isScrolled ? (
          <Link
            href="/"
            className="hidden sm:flex bg-primary text-white py-2 px-5 transition-all duration-300 hover:bg-secondary h-full items-center justify-center"
          >
            Book Now
          </Link>
        ) : (
          <Link href="#" className={["hidden sm:block lg:hidden px-4 py-4", isScrolled ? "border border-primary text-primary" : "border border-white text-white"].join(" ")}>
            Book now
          </Link>
        )}
      </div>
    </motion.header>
  );
};
