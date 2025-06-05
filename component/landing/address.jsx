import Image from "next/image";
import Link from "next/link";
import React from "react";
import { LinkButton } from "../shared/link-button";

export const Address = ({contact}) => {
  return (
    <section className="bg-primary text-white py-[50px] sm:py-[100px]">
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row gap-[40px] sm:gap-[80px] max-w-[1024px] mx-auto">
          <div className="sm:w-[50%]">
            <Image
              loading="lazy"
              alt=""
              className="aspect-square w-full object-cover object-center sm:rounded-bl-[150px]"
              width="1280"
              height="1220"
              src={contact.mapImage}
            />
          </div>{" "}
          <div className="sm:w-[50%]">
            <div className="font-light text-center sm:text-left space-y-5">
              <h3 className="uppercase text-white lg:text-[1.6rem] xl:text-[1.8rem] leading-[1.4]">
                {contact.street} <br />
                {contact.city}, {contact.postalCode} {contact.country}
              </h3>{" "}
              <ul>
                <li>
                  <Link
                    href="tel:623612099999"
                    className="text-white text-[.9rem] lg:text-[.8rem] xl:text-[.9rem] underline transition-all duration-300 hover:text-secondary hover:no-underline"
                  >
                    Tel: {contact.phone}
                  </Link>
                </li>{" "}
                <li>
                  <Link
                    href="mailto:hotelindigobali.reservations@ihg.com"
                    className="text-white text-[.9rem] lg:text-[.8rem] xl:text-[.9rem] underline transition-all duration-300 hover:text-secondary hover:no-underline"
                  >
                    Email: {contact.email}
                  </Link>
                </li>
              </ul>{" "}
              <p className="text-white text-[.9rem] lg:text-[.8rem] xl:text-[.9rem] w-[350px] mx-auto sm:mx-0">
                {contact.notes}
              </p>
              <div>
                <p className="text-white text-[.9rem] lg:text-[1rem] xl:text-[1.2rem]">
                  SHUTTLE SERVICE
                </p>{" "}
                <ul className="mt-[20px] mb-[40px]">
                  {contact.shuttleService.map((service, index) => (
                    <li key={index}>
                      <Link
                        href={service.link}
                        target="_blank"
                        className="text-white text-[.9rem] lg:text-[.8rem] xl:text-[.9rem] underline transition-all duration-300 hover:text-secondary hover:no-underline"
                      >
                        {service.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <LinkButton
                href={contact.mapLink}
                target="_blank"
                variant="secondary"
              >
                RESORT MAP
              </LinkButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
