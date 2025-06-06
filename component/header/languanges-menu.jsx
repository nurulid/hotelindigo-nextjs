"use client";

import { useEffect, useRef, useState } from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownPortal,
  DropdownContent,
  DropdownItem,
} from "../shared/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { NavigationItem } from "./navigation-item";

export const LANGUAGES_NAVIGATION = [
  { label: "English", href: "/en", locale: "en" },
  { label: "Indonesia", href: "/id", locale: "id" },
  { label: "Russia", href: "/ru", locale: "ru" },
  { label: "Korea", href: "/kr", locale: "kr" },
  { label: "Simplified chinese", href: "/zh_cn", locale: "zh_cn" },
  { label: "Traditional chinese", href: "/zh_tw", locale: "zh_tw" },
  { label: "Arabic", href: "/ar", locale: "ar" },
];

export const LanguagesMenu = ({ isScrolled }) => {
  const [isOpen, setIsOpen] = useState(false);
  // const timeoutRef = useRef(null);
  // const dropdownRef = useRef(null);

  // const handleOpenMenu = () => {
  //   if (timeoutRef.current) {
  //     clearTimeout(timeoutRef.current);
  //     timeoutRef.current = null;
  //   }
  //   setIsOpen(true);
  // };

  // const handleCloseMenu = () => {
  //   timeoutRef.current = setTimeout(() => {
  //     setIsOpen(false);
  //   }, 500);
  // };

  // useEffect(() => {
  //   return () => {
  //     if (timeoutRef.current) {
  //       clearTimeout(timeoutRef.current);
  //     }
  //   };
  // }, []);

  return (
    <div
      className="relative inline-block"
    >
      <Dropdown open={isOpen} onOpenChange={setIsOpen}>
        <DropdownTrigger>
          <NavigationItem href="#" className="flex items-center gap-2">
            EN <ChevronDown size={18} className={`transition-all duration-200 ${isOpen ? "rotate-180" : ""}`}/>
          </NavigationItem>
        </DropdownTrigger>

        <DropdownPortal>
          <DropdownContent
            align="end"
            alignOffset={-20}
            sideOffset={20}
            className="py-6 px-5"
          >
            {LANGUAGES_NAVIGATION.map((item, index) => (
              <DropdownItem
                key={index}
                className="py-0 px-0 border-b border-gray-100 last:border-0"
              >
                <NavigationItem
                  href={item.href}
                  isScrolled={isScrolled}
                  isDark
                  className="py-4 font-medium uppercase"
                >
                  {item.label}
                </NavigationItem>
              </DropdownItem>
            ))}
          </DropdownContent>
        </DropdownPortal>
      </Dropdown>
    </div>
  );
};
