"use client";

import React from "react";
import { useScroll, motion, useTransform } from "motion/react";
import { Carousel } from "../shared/carousel";
import Link from "next/link";
import Image from "next/image";

export const ExclusiveOffer = () => {
  const { scrollYProgress } = useScroll();

  const EXCLUSIVE_OFFER = [
    {
      title: "Summer in Bali",
      description:
        "Stay a minimum of 3 nights and enjoy complimentary one-way airport pick up and breakfast to fuel your island adventures",
      image: "/images/offer-1.png",
      link: "/about",
    },
    {
      title: "Seminyak Bliss",
      description: "Complimentary daily resort credit starts from IDR 300.000",
      image: "/images/offer-2.png",
      link: "/about",
    },
    {
      title: "Best Flexible Rate",
      description:
        "Book directly through IHG's website and/or mobile apps to secure the lowest available room rate",
      image: "/images/offer-3.png",
      link: "/about",
    },
  ];

  return (
    <section className="relative container-y-padding">
      <div className="container relative">
        <div>
          <Carousel
            navigation
            slides={EXCLUSIVE_OFFER.map((offer, index) => (
              <div className="flex items-center gap-10">
                <div key={index} className="lg:w-[60%] aspect-[16/10]">
                  <Image
                    src={offer.image}
                    alt="Event Facility"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover transition-all sm:rounded-tr-[150px]"
                  />
                </div>

                <div className="lg:w-[40%] p-4 space-y-6">
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
                  <Link href="/about" className="link-btn text-[.7rem] sm:text-[.9rem] px-[25px] py-[10px]">
                    View all
                  </Link>
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
