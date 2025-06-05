import Link from "next/link";
import React from "react";

export const SectionDetails = ({ title, description, linkUrl, linkTitle, className }) => {
  return (
    <div className={`space-y-5 ${className}`}>
      <h2 className="uppercase text-[2.2rem]">{title}</h2>
      <p>{description}</p>
      <Link href={linkUrl} className="link-btn">
        {linkTitle}
      </Link>
    </div>
  );
};
