import Link from "next/link";
import React from "react";
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";

export const SocialMedia = () => {
  return (
    <div className="mt-auto space-y-5">
      <h3 className="text-[1.2rem] font-light">Follow Us</h3>
      <ul className="flex items-center gap-6 w-full">
        <li>
          <Link href="#" target="_blank">
            <FacebookIcon size={18} />
          </Link>
        </li>
        <li>
          <Link href="#" target="_blank">
            <InstagramIcon size={18} />
          </Link>
        </li>
        <li>
          <Link href="#" target="_blank">
            <TwitterIcon size={18} />
          </Link>
        </li>
        <li>
          <Link href="#" target="_blank">
            <YoutubeIcon size={18} />
          </Link>
        </li>
      </ul>
    </div>
  );
};
