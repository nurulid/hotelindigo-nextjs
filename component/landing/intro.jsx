"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useScroll, motion, useTransform } from "motion/react";

export const Intro = () => {
  const { scrollYProgress } = useScroll();

  const y = useTransform(scrollYProgress, [0, 1], [0, -400]);

  return (
    <section className="container container-y-padding mx-auto flex flex-col md:flex lg:grid lg:grid-cols-3 items-center gap-10">
      <motion.h2
        className="uppercase text-[2.8rem] translate-y-[30%]"
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
        <div className="w-[470px] h-[600px] rounded-tl-full">
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
          className="absolute -z-[1] w-[200px] h-[250px] md:w-[250px] md:h-[300px] lg:w-[300px] lg:h-[400px] bg-primary block -right-20"
          style={{
            y,
            bottom: 0,
          }}
        />
      </div>

      <motion.div
        className="md:pl-0 lg:pl-16 space-y-5 self-start  translate-y-[20%]"
        style={{
          y,
          bottom: 0,
        }}
      >
        <h3 className="uppercase text-[2.2rem]">About Us & Our Neighborhood</h3>
        <p>
          Hotel Indigo Bali Seminyak Beach is situated in the heart of one of
          Bali’s most vibrant districts, a place where centuries of tradition
          and culture blend seamlessly with an atmosphere of casual
          sophistication.
        </p>
        <Link href="/about" className="link-btn">
          Explore
        </Link>
      </motion.div>
    </section>
  );
};
