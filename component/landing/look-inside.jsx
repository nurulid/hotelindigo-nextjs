import Image from "next/image";
import Link from "next/link";
import React from "react";

export const LookInside = () => {
  return (
    <section className="container mx-auto hidden sm:flex items-center mt-[40px] sm:mt-[8rem]">
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

      <div className="flex flex-col items-center space-y-3">
        <div className="w-[40%] sm:w-[25%] flex flex-col items-center">
          <h2 className="md:text-[2.5rem] lg:text-[1.7rem] xl:text-[2.2rem] px-[70px] text-center uppercase hidden sm:block">
            Take a Look Inside
          </h2>{" "}
        </div>

        <Link href="/" target="_blank" className="link-btn">
          View All
        </Link>
      </div>

      <div className="w-[50%] md:h-[50vh] lg:h-[73vh] overflow-hidden hidden sm:block">
        <Image
          loading="lazy"
          alt=""
          className="w-full h-full object-cover object-center"
          width="1280"
          height="720"
          src="https://seminyak.hotelindigo.com/_app/immutable/assets/photo2.CYyw3Co4.png"
        />
      </div>
    </section>
  );
};
