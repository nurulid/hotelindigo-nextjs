import React from "react";
import { LinkButton } from "./base-button";

export const SectionDetails = ({
  title,
  description,
  linkUrl,
  linkTitle,
  className,
}) => {
  return (
    <div className={`space-y-5 text-center sm:text-left ${className}`}>
      <h2 className="uppercase text-[2rem] sm:text-[2.2rem]">{title}</h2>
      <p>{description}</p>
      <LinkButton href={linkUrl} size="sm" className="mt-4">
        {linkTitle}
      </LinkButton>
    </div>
  );
};
