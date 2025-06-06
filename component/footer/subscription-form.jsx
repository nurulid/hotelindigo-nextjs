import React from "react";
import { Input } from "../shared/input";
import { Checkbox } from "../shared/checkbox";
import { Button } from "../shared/base-button";
// import { Button } from "../shared/button";

export const Subscriptionform = () => {
  return (
    <div>
      <h2 className="text-white text-center uppercase lg:text-[1.6rem] xl:text-[1.8rem] mb-[30px]">BE THE FIRST TO KNOW</h2>

      <form action="" className="flex sm:flex-row flex-col justify-between flex-wrap px-[30px] sm:px-0 gap-2 sm:gap-20">
        <div className="flex-1 space-y-4">
          <Input placeholder="First Name" type="text" />
          <Checkbox
            id="checkbox-1"
            label="I have read & agree to the Privacy Policy"
          />
        </div>
        <div className="flex-1 space-y-4">
          <Input placeholder="Last Name" type="text" />
          <Checkbox
            id="checkbox-2"
            label="Yes, I would like to receive emails with exclusive specials & offers"
          />
        </div>
        <div className="flex-1 space-y-4">
          <Input placeholder="Email Address" type="email" />
          <Button size="lg" variant="secondary" type="button">Submit</Button>
        </div>
      </form>
    </div>
  );
};
