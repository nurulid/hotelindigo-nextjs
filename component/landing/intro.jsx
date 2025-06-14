"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useScroll, motion, useTransform } from "motion/react";
import { SectionDetails } from "../shared/section-details";

export const Intro = () => {
  const { scrollYProgress } = useScroll();

  const y = useTransform(scrollYProgress, [0, 1], [0, -400]);

  return (
    <section className="container container-y-padding mx-auto flex flex-col md:flex lg:grid lg:grid-cols-3 items-center gap-10">
      <motion.h2
        className="uppercase text-[1.4rem] md:text-[2.8rem] mb-[30px] leading-[1.3em] text-center md:text-left translate-y-[30%]"
        style={{
          y,
          bottom: 0,
        }}
      >
        The First 5-star <br /> Hotel Indigo <br />
        In A Resort <br />
        Location
      </motion.h2>

      <div className="relative">
        <div className="w-[300px] md:w-[440px] h-[400px] md:h-[600px] rounded-tl-full">
          <Image
            src="/images/slideshow-2.avif"
            width={400}
            height={600}
            alt="The First 5-star Hotel Indigo In A Resort Location"
            className="w-full h-full object-cover rounded-tl-[150px]"
            loading="lazy"
          />
        </div>
        <motion.div
          className="absolute -z-[1] w-[200px] h-[250px] md:w-[250px] md:h-[300px] lg:w-[300px] lg:h-[400px] bg-primary block -right-5 md:-right-20"
          style={{
            y,
            bottom: 0,
          }}
        />
      </div>

      <motion.div
        className="md:pl-0 lg:pl-24 self-start  translate-y-[15%]"
        style={{
          y,
          bottom: 0,
        }}
      >
        <SectionDetails
          title="About Us & Our Neighborhood"
          description="Hotel Indigo Bali Seminyak Beach is situated in the heart of one of
          Bali’s most vibrant districts, a place where centuries of tradition
          and culture blend seamlessly with an atmosphere of casual
          sophistication."
          linkUrl="/about"
          linkTitle="Explore"
        />
      </motion.div>
    </section>
  );
};
