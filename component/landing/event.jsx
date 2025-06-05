"use client";

import Image from "next/image";
import React from "react";
import { useScroll, motion, useTransform } from "motion/react";
import Link from "next/link";
import { Carousel } from "../shared/carousel";
import { SectionDetails } from "../shared/section-details";

export const Event = ({facilities, events}) => {
  const { scrollYProgress } = useScroll();

  return (
    <section className="relative pb-[3rem] sm:pb-[6rem]">
      <div className="container">
        <div className="flex flex-col items-start gap-10 lg:grid lg:grid-cols-3 pb-[3rem] sm:pb-[6rem]">
          <div className="space-y-10 py-8">
            {events.map((event, index) => (
              <SectionDetails
                key={index}
                title={event.title}
                description={event.description}
                linkUrl={event.link}
                linkTitle="Explore"
              />
            ))}
          </div>

          {events.map((event, index) => (
            <div
              key={index}
              className="w-full h-[500px] lg:h-[500px] xl:h-[560px] overflow-hidden relative group"
            >
              <Image
                src={event.image}
                alt={event.title}
                width={500}
                height={500}
                className="w-full h-full object-cover group-last:lg:rounded-br-[150px]"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-10 py-4">
        <h2 className="uppercase text-[2.2rem] container">Facilities</h2>
        <div className="px-4 lg:px-[240px]">
          <Carousel
            navigation
            slides={facilities.map((facility, index) => (
              <div
                key={index}
                className="md:aspect-[16/11] lg:aspect-[16/9] overflow-hidden relative"
              >
                <Image
                  src={facility.image}
                  alt="Event Facility"
                  width={400}
                  height={400}
                  className="w-full md:h-[400px] lg:h-[460px] xl:h-full 2xl:h-full object-cover transition-all !duration-500 object-center"
                />
                <div className="relative sm:absolute bottom-0 left-0 w-full py-[30px] sm:px-[50px] font-light bg-gradient-to-t from-black/80 via-black/35 to-transparent md:h-[90%] lg:h-[50%] sm:flex flex-col justify-end bg-primary sm:bg-transparent">
                  <div className="text-white p-4 space-y-6">
                    <div className="space-y-5">
                      <h3 className="text-3xl font-bold text-white">
                        {facility.title}
                      </h3>
                      <p>{facility.description}</p>
                    </div>
                    <Link href="/about" className="link-btn">
                      Explore
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          />
        </div>
      </div>

      <motion.div
        className="absolute right-0 sm:top-[30%] bottom-[30%] h-[200px] sm:h-[unset] sm:w-[15vw] hidden sm:block bg-primary -z-[1] transition-all duration-100"
        style={{
          width: useTransform(scrollYProgress, [0, 1], ["15vw", "30vw"]),
        }}
      />
    </section>
  );
};
