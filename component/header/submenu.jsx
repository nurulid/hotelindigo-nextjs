"use client";

import React, { useState, useRef, useEffect } from "react";
import { NavigationItem } from "./navigation-item";
import { ChevronDown } from "lucide-react";

export const Submenu = ({ menu, submenus, isScrolled }) => {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef(null);
  const menuRef = useRef(null);

  const handleOpen = () => {
    clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleClose = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 200);
  };

  useEffect(() => {
    return () => clearTimeout(timeoutRef.current);
  }, []);

  return (
    <div
      className="relative"
      onMouseEnter={handleOpen}
      onMouseLeave={handleClose}
      onTouchEnd={handleOpen}
      ref={menuRef}
    >
      <div>
        <NavigationItem href="#" className="flex items-center gap-2 uppercase">
          {menu}
          <ChevronDown
            size={18}
            className={`transition-all duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </NavigationItem>
      </div>

      {isOpen && (
        <ul
          className="absolute right-0 sm:-right-10 top-[200%] w-48 bg-white text-black py-4 px-5 z-10"
          onMouseEnter={handleOpen}
          onMouseLeave={handleClose}
          onTouchEnd={(e) => e.stopPropagation()}
        >
          {submenus.map((menu, index) => (
            <li
              key={index}
              className="pt-1 border-b border-gray-100 last:border-0"
            >
              <NavigationItem
                href={menu.href}
                isScrolled={isScrolled}
                isDark
                className="py-3 pb-4 font-medium uppercase inline-block"
              >
                {menu.label}
              </NavigationItem>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
