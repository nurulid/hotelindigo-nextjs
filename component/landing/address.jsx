import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Address = () => {
  const ADDRESS = {
    street: "Jl. Camplung Tanduk No. 10",
    city: "Bali",
    postalCode: "80361",
    country: "Indonesia",
    phone: "+62-361-2099999",
    email: "hotelindigobali.reservations@ihg.com",
    notes:
      "Check-in Time: 3PM | Check-out Time: 12PM *Minimum check-in age is 18 years old",
    shuttleService: [
      {
        title: "Transportation / Airport Transfer Price List",
        link: "/",
      },
      {
        title: "International Airport Arrival Pick-up Information",
        link: "/",
      },
    ],
    mapLink: "https://goo.gl/maps/8b1d5Z7f3x2z",
    mapImage:
      "https://seminyak.hotelindigo.com/_app/immutable/assets/map.DEkNhJdb.png",
  };

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
              src={ADDRESS.mapImage}
            />
          </div>{" "}
          <div className="sm:w-[50%]">
            <div className="font-light text-center sm:text-left space-y-5">
              <h3 className="uppercase text-white lg:text-[1.6rem] xl:text-[1.8rem] leading-[1.4]">
                {ADDRESS.street} <br />
                {ADDRESS.city}, {ADDRESS.postalCode} {ADDRESS.country}
              </h3>{" "}
              <ul>
                <li>
                  <Link
                    href="tel:623612099999"
                    className="text-white text-[.9rem] lg:text-[.8rem] xl:text-[.9rem] underline transition-all duration-300 hover:text-secondary hover:no-underline"
                  >
                    Tel: {ADDRESS.phone}
                  </Link>
                </li>{" "}
                <li>
                  <Link
                    href="mailto:hotelindigobali.reservations@ihg.com"
                    className="text-white text-[.9rem] lg:text-[.8rem] xl:text-[.9rem] underline transition-all duration-300 hover:text-secondary hover:no-underline"
                  >
                    Email: {ADDRESS.email}
                  </Link>
                </li>
              </ul>{" "}
              <p className="text-white text-[.9rem] lg:text-[.8rem] xl:text-[.9rem] w-[350px] mx-auto sm:mx-0">
                {ADDRESS.notes}
              </p>
              <div>
                <p className="text-white text-[.9rem] lg:text-[1rem] xl:text-[1.2rem]">
                  SHUTTLE SERVICE
                </p>{" "}
                <ul className="mt-[20px] mb-[40px]">
                  {ADDRESS.shuttleService.map((service, index) => (
                    <li key={index}>
                      <a
                        href={service.link}
                        target="_blank"
                        className="text-white text-[.9rem] lg:text-[.8rem] xl:text-[.9rem] underline transition-all duration-300 hover:text-secondary hover:no-underline"
                      >
                        {service.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                href={ADDRESS.mapLink}
                target="_blank"
                className="link-btn-secondary mt-[10px]"
              >
                RESORT MAP
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
