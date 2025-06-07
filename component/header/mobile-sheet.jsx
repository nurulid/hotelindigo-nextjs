"use client";

import { useMobileSheet } from "@/context/mobile-sheet-context";
import { XIcon } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";

import { SocialMedia } from "./social-media";
import { HEADER_NAVIGATION } from ".";
import { MobileSubmenu } from "./mobile-submenu";
import React from "react";

export const MobileSheet = () => {
  const { isOpen, closeSheet } = useMobileSheet();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.aside
            className="fixed top-0 left-0 z-50 p-4 overflow-y-auto bg-white w-[350px] h-[100dvh] font-primary flex flex-col"
            initial={{ x: -350 }}
            animate={{ x: 0 }}
            exit={{ x: -350 }}
            transition={{ type: "tween", ease: "easeInOut", duration: 0.3 }}
          >
            <div>
              <div className="pb-2 mb-3 border-b border-gray-300">
                <h2 className="uppercase font-medium w-[70%]">
                  Hotel Indigo Bali Seminyak Beach
                </h2>
              </div>

              <ul className="uppercase text-[.7rem] font-light space-y-[2px]">
                <li>
                  <Link
                    href="/"
                    className="py-[5px] inline-block hover:text-secondary transition-all"
                  >
                    Homepage
                  </Link>
                </li>
                {HEADER_NAVIGATION.map((menu, index) => (
                  <li key={index}>
                    {menu.submenu ? (
                      <MobileSubmenu
                        menu={menu.label}
                        submenus={menu.submenu}
                      />
                    ) : (
                      <Link
                        href={menu.href}
                        className="py-[5px] inline-block hover:text-secondary transition-all"
                      >
                        {menu.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <SocialMedia />

            <button
              onClick={closeSheet}
              className="absolute top-4 right-4 opacity-50 hover:opacity-100 transition-opacity"
            >
              <XIcon size={20} />
            </button>
          </motion.aside>

          <motion.div
            onClick={closeSheet}
            className="bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          />
        </>
      )}
    </AnimatePresence>
  );
};
