"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useScroll, motion, useTransform } from "motion/react";
import { Dining } from "./dining";
import { AccommodationCarousel } from "./accommodation-carousel";

export const Accommodation = ({ accommodations, dining }) => {
  const { scrollYProgress } = useScroll();
  const [hoveredImage, setHoveredImage] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  const cardObjectPositions = [
    "object-[0%]",
    "object-[32%]",
    "object-[64%]",
    "object-[96%]",
  ];

  const widthTransform = useTransform(
    scrollYProgress,
    [0, 1],
    ["15vw", "30vw"]
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    const handleMediaChange = (event) => {
      setIsMobile(event.matches);
    };

    setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleMediaChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaChange);
    };
  }, []);

  return (
    <section className="relative container-y-padding">
      <div className="container">
        <h2 className="text-[2rem] sm:text-[2.2rem] mb-14 uppercase text-center sm:text-left">
          Accommodation
        </h2>
        <div className="relative z-[2]">
          {isMobile ? (
            <AccommodationCarousel accommodations={accommodations} />
          ) : (
            <div className="flex md:gap-5 lg:gap-10 hover:gap-[5px] transition-all duration-300">
              {accommodations.map((item, index) => (
                <Link
                  href={item.link}
                  className="block w-[calc(100%/4)] group"
                  key={item.id}
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
          )}
        </div>

        <div className="h-14 sm:h-28" />

        <Dining dining={dining} />

        <motion.div
          className="absolute left-0 sm:top-[30%] bottom-0 h-[100px] sm:h-[unset] sm:w-[15vw] hidden sm:block bg-primary z-[1] transition-all duration-100"
          style={{
            width: widthTransform,
          }}
        />
      </div>
    </section>
  );
};
