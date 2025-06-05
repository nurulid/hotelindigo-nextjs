import React from "react";
import { Carousel } from "../shared/carousel";
import Image from "next/image";
import Link from "next/link";

export const Awards = ({ awards }) => {
  return (
    <>
      <Carousel
        navigation
        slidesPerView={6}
        spaceBetween={100}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 100,
          },
        }}
        slides={awards.map((award, index) => (
          <Link href={award.link} key={index} className="w-[150px] h-[150px]">
            <Image
              src={award.image}
              alt={`Awards - ${award.title}`}
              width={150}
              height={150}
              className="w-full h-full object-contain"
            />
          </Link>
        ))}
      />
    </>
  );
};
