import React from "react";
import { Carousel } from "../shared/carousel";
import Image from "next/image";
import { LinkButton } from "../shared/base-button";

export const EventFacilities = ({ facilities }) => {
  return (
    <div className="space-y-10 py-4">
      <h2 className="text-[2rem] sm:text-[2.2rem] mb-14 uppercase text-center sm:text-left container">
        Facilities
      </h2>

      <Carousel
        navigation={true}
        slidesPerView={1}
        centeredSlides={true}
        spaceBetween={50}
        className="lg:!px-[250px]"
        slides={facilities.map((facility) => (
          <div
            key={facility.id}
            className="md:aspect-[16/11] lg:aspect-[16/9] overflow-hidden relative"
          >
            <Image
              src={facility.image}
              alt="Event Facility"
              width={400}
              height={400}
              className="w-full md:h-[400px] lg:h-[460px] xl:h-full 2xl:h-full object-cover transition-all !duration-500 object-center"
            />
            <div className="relative md:absolute bottom-0 left-0 w-full py-[30px] sm:px-[50px] font-light bg-gradient-to-t from-black/80 via-black/35 to-transparent md:h-[90%] lg:h-[50%] sm:flex flex-col justify-end bg-primary md:bg-transparent">
              <div className="text-white p-4 space-y-6">
                <div className="space-y-5">
                  <h3 className="text-3xl font-bold text-white">
                    {facility.title}
                  </h3>
                  <p>{facility.description}</p>
                </div>
                <LinkButton href={facility.link}>Explore</LinkButton>
              </div>
            </div>
          </div>
        ))}
      />
    </div>
  );
};
