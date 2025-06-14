import React from "react";
import { Carousel } from "../shared/carousel";
import Image from "next/image";
import Link from "next/link";

export const Awards = ({ awards }) => {
  return (
    <div>
      <h2 className="text-white text-center uppercase lg:text-[1.6rem] xl:text-[1.8rem] mb-[30px]">Awards</h2>
      <Carousel
        navigation
        spaceBetween={80}
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
        className="!px-20 -mx-5 sm:!-mx-10"
        slides={awards.map((award) => (
          <Link href={award.link} key={award.id} className="size-[100px] sm:size-[150px]">
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
    </div>
  );
};
