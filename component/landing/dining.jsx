import Image from "next/image";
import React from "react";
import { SectionDetails } from "../shared/section-details";

export const Dining = ({dining}) => {
  return (
    <div className="flex flex-col-reverse sm:grid grid-cols-2 gap-[50px] items-center relative z-[2]">
      <div className="md:h-[300px] lg:h-[400px] xl:h-[500px] w-full overflow-hidden lg:rounded-bl-[150px]">
        <Image
          src={dining.image ? dining.image : `/images/dining.png`}
          alt="Accommodation"
          width={400}
          height={400}
          className="h-full w-full object-cover object-center"
        />
      </div>

      <SectionDetails
        title={dining.title}
        description={dining.description}
        linkUrl={dining.link}
        linkTitle="Explore"
        className="lg:pr-[100px]"
      />
    </div>
  );
};
