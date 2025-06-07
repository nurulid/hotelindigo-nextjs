"use client";

import { Submenu } from "./submenu";

export const LANGUAGES_NAVIGATION = [
  { label: "English", href: "/en", locale: "en" },
  { label: "Indonesia", href: "/id", locale: "id" },
  { label: "Russia", href: "/ru", locale: "ru" },
  { label: "Korea", href: "/kr", locale: "kr" },
  { label: "Simplified chinese", href: "/zh_cn", locale: "zh_cn" },
  { label: "Traditional chinese", href: "/zh_tw", locale: "zh_tw" },
  { label: "Arabic", href: "/ar", locale: "ar" },
];

export const LanguagesMenu = () => {
  return (
    <div className="relative inline-block">
      <Submenu
        menu={LANGUAGES_NAVIGATION[0].locale}
        submenus={LANGUAGES_NAVIGATION}
      />
    </div>
  );
};
