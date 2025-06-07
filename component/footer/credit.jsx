import React from "react";

export const Credit = () => {
  return (
    <div className="bg-[#fafafa] py-[2rem]">
      <div className="container">
        <p className="text-center text-[.7rem] lg:text-[.8rem] xl:text-[.9rem] font-light">
          © 2025 Hotel Indigo Bali Seminyak Beach. All rights reserved. This
          hotel is owned by PT. Bali Perkasasukses and managed by{" "}
          <a
            href="https://www.ihg.com/"
            target="_blank"
            className="text-primary transition-all duration-300 hover:text-secondary"
          >
            InterContinental Hotels Group.
          </a>
        </p>
      </div>
    </div>
  );
};
