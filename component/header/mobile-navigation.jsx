
import { GiftIcon, MailIcon, PhoneIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { MenuButton } from "./menu-button";

export const MobileNavigation = () => {
  const isMobile = () => {
    return window.matchMedia("(max-width: 768px)").matches;
  };

  return (
    <>
      {isMobile && (
        <div className="fixed bottom-0 left-0 w-full z-30 h-[70px] pl-3 bg-[#f3f4f1] sm:hidden shadow-header transition-all !duration-300 flex items-center gap-2">
          <ul className="flex items-center justify-between w-full h-full">
            <li className="w-[calc(50%/4)] flex justify-center">
              <MenuButton isDark/>
            </li>
            <li className="w-[calc(50%/4)] flex justify-center">
              <button>
                <GiftIcon />
              </button>
            </li>
            <li className="w-[calc(50%/4)] flex justify-center">
              <button>
                <PhoneIcon />
              </button>
            </li>
            <li className="w-[calc(50%/4)] flex justify-center">
              <button>
                <MailIcon />
              </button>
            </li>
            <li className="w-1/2 h-full">
              <Link
                href="#"
                className=" bg-primary h-full text-white flex items-center justify-center uppercase"
              >
                Check Availability
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};
