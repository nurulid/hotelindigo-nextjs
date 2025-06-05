"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useScroll, motion, useTransform } from "motion/react";
import { SectionDetails } from "../shared/section-details";

export const Accommodation = () => {
  const { scrollYProgress } = useScroll();
  const [hoveredImage, setHoveredImage] = useState(null);

  const cardObjectPositions = [
    "object-[0%]",
    "object-[32%]",
    "object-[64%]",
    "object-[96%]",
  ];

  const ACCOMODATIONS = [
    {
      title: "Rooms",
      image: "/images/rooms.webp",
      link: "/rooms",
    },
    {
      title: "Suites",
      image: "/images/suites.png",
      link: "/suites",
    },
    {
      title: "One bedroom villa",
      image: "/images/villa-1.png",
      link: "/villa-1",
    },
    {
      title: "two bedroom villa",
      image: "/images/villa-2.png",
      link: "/villa-2",
    },
  ];

  const DINING = {
    title: "Dining",
    description:
      "Our unique food and beverage concept is inspired by the vibrant neighborhood we inhabit—a melting pot of flavors from around the world, while still strongly influenced by local culinary traditions.",
    image: "/images/dining.png",
    link: "/dining",
  };

  return (
    <section className="relative container-y-padding">
      <div className="container">
        <h2 className="text-4xl mb-14 uppercase">Accommodation</h2>
        <div className="relative z-[2]">
          <div className="flex md:gap-5 lg:gap-10 hover:gap-[5px] transition-all duration-300 group-container">
            {ACCOMODATIONS.map((item, index) => (
              <Link
                href={item.link}
                className="block w-[calc(100%/4)] group"
                key={index}
                onMouseEnter={() => setHoveredImage(item.image)}
                onMouseLeave={() => setHoveredImage(null)}
              >
                <div className="w-full h-[400px] md:h-[300px] lg:h-[400px] xl:h-[560px] overflow-hidden relative">
                  <Image
                    src={hoveredImage || item.image}
                    alt=""
                    width={400}
                    height={400}
                    className={`md:h-[400px] lg:h-[460px] xl:h-full 2xl:h-full object-cover transition-all !duration-500 ${
                      hoveredImage
                        ? cardObjectPositions[index]
                        : "object-center"
                    }`}
                  />
                  <h3
                    className={[
                      "uppercase absolute bottom-10 w-full text-center text-white text-lg font-medium z-[2] group-hover:-translate-y-8 transition-all",
                    ].join(" ")}
                  >
                    {item.title}
                  </h3>
                  <div className="absolute z-[1] bottom-0 w-full h-[70%] bg-gradient-to-t from-[rgba(0,0,0,0.8)] to-[rgba(0,212,255,0)] via-transparent flex items-end justify-center" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="h-28" />

        <div className="flex flex-col-reverse sm:grid grid-cols-2 gap-[50px] items-center relative z-[2]">
          <div className="md:h-[300px] lg:h-[400px] xl:h-[500px] w-full overflow-hidden lg:rounded-bl-[150px]">
            <Image
              src={DINING.image}
              alt="Accommodation"
              width={400}
              height={400}
              className="h-full w-full object-cover object-center"
            />
          </div>

          <SectionDetails
            title={DINING.title}
            description={DINING.description}
            linkUrl={DINING.link}
            linkTitle="Explore"
            className="lg:pr-[100px]"
          />
        </div>
        <motion.div
          className="absolute left-0 sm:top-[30%] bottom-0 h-[100px] sm:h-[unset] sm:w-[15vw] hidden sm:block bg-primary z-[1] transition-all duration-100"
          style={{
            width: useTransform(scrollYProgress, [0, 1], ["15vw", "30vw"]),
          }}
        />
      </div>
    </section>
  );
};
