"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";

export const MobileSubmenu = ({ menu, submenus }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="uppercase text-[.7rem] font-light">
      <button
        onClick={toggleMenu}
        className={[
          "flex items-center gap-2 justify-between w-full uppercase text-[.7rem] font-light transition-colors duration-200",
          isOpen ? "bg-primary px-2 py-3 text-white" : "py-[5px] hover:bg-gray-100",
        ].join(" ")}
      >
        {menu}
        <ChevronDown
          size={18}
          className={`transition-all duration-200 ${
            isOpen ? "rotate-180 text-white" : "text-gray-600"
          }`}
        />
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="bg-white overflow-hidden"
          >
            {submenus.map((menu, index) => (
              <motion.li
                key={index}
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.05, duration: 0.2 }}
              >
                <Link
                  href={menu.href}
                  className="p-2 pl-4 block hover:text-secondary transition-all hover:bg-gray-50"
                >
                  {menu.label}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};
