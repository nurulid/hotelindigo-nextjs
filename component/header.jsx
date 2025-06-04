import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Header = () => {
  return (
    <header className="flex justify-between items-center bg-transparent fixed top-0 left-0 right-0 z-50 px-10 py-4">
      <ul className="flex space-x-9 text-white">
        <li>
          <Link href="/">Villas</Link>
        </li>
        <li>
          <Link href="/about">Spa</Link>
        </li>
        <li>
          <Link href="/contact">Dine</Link>
        </li>
        <li>
          <Link href="/contact">Retreats</Link>
        </li>
      </ul>

      <div>
        <Image src="/images/logo-new.svg" alt="" width={128} height={115} />
      </div>

      <div className="min-w-[230px] text-right">
        <button className="btn">Stay with us</button>
      </div>
    </header>
  );
};
