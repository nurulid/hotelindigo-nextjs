import Link from "next/link";
import React from "react";
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";

export const SocialMedia = ({ isFooter = false }) => {
  return (
    <div className="mt-auto space-y-5">
      <h3
        className={`font-light ${
          isFooter ? "text-2xl text-white text-center sm:text-left" : "text-[1.2rem]"
        }`}
      >
        Follow Us
      </h3>
      <ul className="flex items-center gap-6 w-full">
        <li>
          <Link href="#" target="_blank">
            <FacebookIcon size={isFooter ? 24 : 18} />
          </Link>
        </li>
        <li>
          <Link href="#" target="_blank">
            <InstagramIcon size={isFooter ? 24 : 18} />
          </Link>
        </li>
        <li>
          <Link href="#" target="_blank">
            <TwitterIcon size={isFooter ? 24 : 18} />
          </Link>
        </li>
        <li>
          <Link href="#" target="_blank">
            <YoutubeIcon size={isFooter ? 24 : 18} />
          </Link>
        </li>
      </ul>
    </div>
  );
};
