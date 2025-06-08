"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useScroll, motion } from "motion/react";
import { MenuButton } from "./menu-button";
import { NavigationItem } from "./navigation-item";
import { LanguagesMenu } from "./languanges-menu";
import { Submenu } from "./submenu";

export const HEADER_NAVIGATION = [
  { label: "About us", href: "#" },
  {
    label: "Accomodations",
    href: "#",
    submenu: [
      { label: "Rooms", href: "#" },
      { label: "Suites", href: "#" },
      { label: "One Bedroom Villa", href: "#" },
      { label: "Two Bedrooms Villa", href: "#" },
    ],
  },
  { label: "Facilities", href: "#",
    submenu: [
      { label: "Sava Spa", href: "#" },
      { label: "24/7 Gym", href: "#" },
      { label: "Activities", href: "#" },
    ]
   },
  { label: "Dinning", href: "#",
    submenu: [
      { label: "Sugarsand", href: "#" },
      { label: "Pottery Cafe", href: "#" },
      { label: "Home Delivery", href: "#" },
      { label: "Cave Pool Lounge", href: "#" },
      { label: "Makase", href: "#" },
      { label: "Tree Bar", href: "#" },
      { label: "KIOSK", href: "#" },
      { label: "Breakfast Club", href: "#" },
    ]
   },
  { label: "Event", href: "#",
    submenu: [
      { label: "Meeting", href: "#" },
      { label: "Wedding", href: "#" },
    ]
   },
  { label: "Offers", href: "#" },
  { label: "Press release", href: "#" },
  { label: "Gallery", href: "#" },
  { label: "Awards", href: "#" },
  { label: "Faq & Contact", href: "#" },
];

const Header = () => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

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
        className={[
          "flex items-center gap-5 w-full justify-end",
          isScrolled ? "h-full" : "",
        ].join(" ")}
      >
        {/* MAIN MENU */}
        <ul
          className={[
            "uppercase hidden xl:flex items-center flex-wrap gap-3.5 text-[.8rem] font-semibold",
            isScrolled ? "py-0" : "text-white py-[40px]",
          ].join(" ")}
        >
          {HEADER_NAVIGATION.map((item, index) => (
            <li key={index}>
              {item.submenu ? (
                <Submenu
                  menu={item.label}
                  submenus={item.submenu}
                  isScrolled={isScrolled}
                />
              ) : (
                <NavigationItem href={item.href} isScrolled={isScrolled}>
                  {item.label}
                </NavigationItem>
              )}
            </li>
          ))}
          <li>
            <LanguagesMenu isScrolled={isScrolled} />
          </li>
        </ul>

        {/* RESPONSIVE MENU */}
        <ul
          className={[
            "flex xl:hidden items-center gap-5 text-[.8rem] font-semibold ml-auto",
            isScrolled ? "py-0" : "text-white py-[40px]",
          ].join(" ")}
        >
          <LanguagesMenu isScrolled={isScrolled} />
          <li className="hidden sm:block">
            <MenuButton isScrolled={isScrolled} />
          </li>
        </ul>

        {/* BOOK NOW BUTTON */}
        {isScrolled ? (
          <Link
            href="/"
            className="hidden sm:flex bg-primary text-white py-2 px-5 transition-all duration-300 hover:bg-secondary h-full items-center justify-center"
          >
            Book Now
          </Link>
        ) : (
          <Link
            href="#"
            className={[
              "hidden sm:block xl:hidden px-4 py-4",
              isScrolled
                ? "border border-primary text-primary"
                : "border border-white text-white",
            ].join(" ")}
          >
            Book now
          </Link>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
