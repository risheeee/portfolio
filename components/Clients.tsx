import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { testimonials } from "@/data";

const Clients = () => {
  return (
    <div className="mb-35" id="testimonials">
      <h1 className="heading sm:text-sm">
        {/*A Small selection of{" "} */}
        <span className="text-purple">Testimonials</span>
      </h1>
      <div className="flex flex-col items-center mt-10">
            <InfiniteMovingCards items={testimonials} direction="right" speed="normal"/>
      </div>
    </div>
  );
};

export default Clients;
