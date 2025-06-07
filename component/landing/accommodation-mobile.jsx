import React, { useState } from "react";
import { Carousel } from "../shared/carousel";
import Image from "next/image";
import Link from "next/link";

export const AccommodationMobile = ({ accommodations }) => {
  return (
    <>
      <Carousel
        navigation
        slidesPerView={2}
        spaceBetween={20}
        className="!px-4"
        slides={accommodations.map((item) => (
          <Link
            href={item.link}
            key={item.id}
            className="block border border-gray-300"
          >
            <div className="aspect-[.8] w-full overflow-hidden">
              <Image
                src={item.image}
                height={400}
                width={200}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="uppercase w-full text-center p-4 bg-white">
              {item.title}
            </p>
          </Link>
        ))}
      />
    </>
  );
};
