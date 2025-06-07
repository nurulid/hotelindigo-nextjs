import React from "react";
import { SectionDetails } from "../shared/section-details";
import Image from "next/image";

export const EventTypes = ({events}) => {
  return (
    <div className="container">
      <div className="flex flex-col items-start gap-10 lg:grid lg:grid-cols-3 pb-[3rem] sm:pb-[6rem]">
        <div className="space-y-10 py-8">
          {events.map((event) => (
            <React.Fragment key={event.id}>
              <SectionDetails
                title={event.title}
                description={event.description}
                linkUrl={event.link}
                linkTitle="Explore"
              />

              <div className="block sm:hidden md:h-[300px] lg:h-[400px] xl:h-[500px] w-full overflow-hidden lg:rounded-bl-[150px]">
                <Image
                  src={event.image}
                  alt="Accommodation"
                  width={400}
                  height={400}
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </React.Fragment>
          ))}
        </div>

        {events.map((event) => (
          <div
            key={event.id}
            className="hidden sm:block w-full h-[500px] lg:h-[500px] xl:h-[560px] overflow-hidden relative group"
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
  );
};
