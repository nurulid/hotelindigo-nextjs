import Image from "next/image";
import Link from "next/link";
import React from "react";
import { LinkButton } from "../shared/base-button";

export const LookInside = () => {
  return (
    <section className="container mx-auto block sm:flex items-center my-[40px] sm:mt-[8rem] relative h-[250px] sm:h-auto">
      <div className="w-[50%] sm:w-[25%] h-[40vh] sm:h-[73vh] md:h-[50vh] lg:h-[73vh] overflow-hidden hidden sm:block">
        <Image
          loading="lazy"
          alt=""
          className="w-full h-full object-cover object-center"
          width="1280"
          height="720"
          src="https://seminyak.hotelindigo.com/_app/immutable/assets/photo1.CvygVCoG.png"
        />
      </div>

      <div className="flex flex-col items-center space-y-3 z-[2] absolute sm:static top-1/2 left-1/2 -translate-1/2 sm:translate-0">
        <div className="w-full sm:w-[25%] flex flex-col items-center">
          <h2 className="text-2xl lg:text-[1.7rem] xl:text-[2.2rem] px-5 sm:px-[70px] text-center uppercase block text-white sm:text-black">
            Take a Look Inside
          </h2>{" "}
        </div>

        <LinkButton href="/" target="_blank">
          View All
        </LinkButton>
      </div>

      <div className="w-auto h-[250px] md:h-[50vh] lg:h-[73vh] overflow-hidden block absolute sm:static inset-0">
        <Image
          loading="lazy"
          alt=""
          className="w-full h-full object-cover object-center"
          width="1280"
          height="720"
          src="https://seminyak.hotelindigo.com/_app/immutable/assets/photo2.CYyw3Co4.png"
        />
      </div>

      <div className="absolute inset-0 bg-black/60 block sm:hidden z-[1]" />
    </section>
  );
};
