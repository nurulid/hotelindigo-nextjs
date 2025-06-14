"use client";

import React from "react";
import { useScroll, motion, useTransform } from "motion/react";
import { Carousel } from "../shared/carousel";
import Link from "next/link";
import Image from "next/image";
import { LinkButton } from "../shared/base-button";

export const ExclusiveOffer = ({exclusiveOffers}) => {
  const { scrollYProgress } = useScroll();

  return (
    <section className="relative container-y-padding">
      <div className="container relative">
        <div>
          <Carousel
            navigation
            slides={exclusiveOffers.map((offer) => (
              <div className="flex flex-col md:flex-row md:items-center gap-10">
                <div key={offer.id} className="lg:w-[60%] aspect-[16/10]">
                  <Image
                    src={offer.image}
                    alt="Event Facility"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover transition-all sm:rounded-tr-[150px]"
                  />
                </div>

                <div className="lg:w-[40%] p-4 space-y-6 bg-white">
                  <div className="space-y-5">
                    <div>
                      <span className="text-secondary uppercase block">
                        Exclusive offer
                      </span>
                      <h3 className="text-3xl font-bold">
                        {offer.title}
                      </h3>
                    </div>
                    <p>{offer.description}</p>
                  </div>
                  <LinkButton href="/about" size="sm">
                    View all
                  </LinkButton>
                </div>
              </div>
            ))}
          />
        </div>
      </div>

      <motion.div
        className="absolute left-0 sm:top-[30%] bottom-0 h-[200px] sm:h-[unset] sm:w-[15vw] hidden sm:block bg-primary -z-[1] transition-all duration-100"
        style={{
          width: useTransform(scrollYProgress, [0, 1], ["15vw", "30vw"]),
        }}
      />
    </section>
  );
};
