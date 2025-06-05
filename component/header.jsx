"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useScroll, motion } from "motion/react";

const NavigationItem = ({ label, href }) => (
  <li>
    <Link
      href={href}
      className="hover:text-secondary transition-colors duration-300"
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
        "flex justify-between fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white shadow-lg h-[80px] items-center pl-[50px]"
          : "bg-transparent h-[155px] items-start px-[50px]",
      ].join(" ")}
    >
      <Image
        src="/images/logo.png"
        alt=""
        width={128}
        height={115}
        className={[
          "transition-all duration-300",
          isScrolled
            ? "w-[80px]"
            : "w-[130px] pt-10 filter invert brightness-0",
        ].join(" ")}
        priority
      />

      <ul
        className={[
          "uppercase hidden sm:flex items-center gap-3.5 lg:text-[.5rem] xl:text-[.8rem] font-semibold",
          isScrolled ? "py-0 h-full" : "text-white py-[40px]",
        ].join(" ")}
      >
        {HEADER_NAVIGATION.map((item, index) => (
          <NavigationItem key={index} label={item.label} href={item.href} />
        ))}
      </ul>
    </motion.header>
  );
};
