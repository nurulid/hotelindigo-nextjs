"use client";

import React from "react";
import { useScroll, motion, useTransform } from "motion/react";
import { EventTypes } from "./event-types";
import { EventFacilities } from "./event-facilities";

export const Event = ({ facilities, events }) => {
  const { scrollYProgress } = useScroll();

  return (
    <section className="relative pb-[3rem] sm:pb-[6rem]">
      <EventTypes events={events} />

      <EventFacilities facilities={facilities} />

      <motion.div
        className="absolute right-0 sm:top-[30%] bottom-[30%] h-[200px] sm:h-[unset] sm:w-[15vw] hidden sm:block bg-primary -z-[1] transition-all duration-100"
        style={{
          width: useTransform(scrollYProgress, [0, 1], ["15vw", "30vw"]),
        }}
      />
    </section>
  );
};
