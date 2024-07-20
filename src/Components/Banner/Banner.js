import React from "react";
import { motion } from "framer-motion";
import { SlideUp } from "../Hero/Hero";

const Banner = () => {
  return (
    <>
      <div className="container py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 place-items-center">
          {/* image section */}
          <div>
            <img src="./assets/banner.png" alt="" />
          </div>
          {/* Text Content Section */}
          <div className="space-y-5 lg:max-w-[400px]">
            <h1 className="text-6xl uppercase font-semibold font-league">
              The Best Yummy Food In The Town
            </h1>
            <p className="">
              Enjoy delicious, mouth-watering dishes crafted by our expert
              chefs. Visit us for an unforgettable dining experience.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
