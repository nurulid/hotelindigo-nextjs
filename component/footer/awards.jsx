import React from "react";
import { Carousel } from "../shared/carousel";
import Image from "next/image";
import Link from "next/link";

export const Awards = ({awards}) => {
  return (
    <>
      <Carousel
      navigation
      slidesPerView={6}
      spaceBetween={20}
        slides={awards.map((award, index) => (
          <Link href={award.link} key={index}>
            <Image
              src={award.image}
              alt={`Awards - ${award.title}`}
              width={200}
              height={200}
              className="w-full h-auto object-contain"
            />
          </Link>
        ))}
      />
    </>
  );
};
