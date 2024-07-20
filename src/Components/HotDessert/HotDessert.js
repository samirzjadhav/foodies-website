import React from "react";
import { motion } from "framer-motion";
import { SlideUp } from "../Hero/Hero";

const HotDessertData = [
  {
    id: 1,
    name: "HotDessert",
    img: "./assets/food.png",
    price: "$10.00",
    delay: 0.4,
  },
  {
    id: 2,
    name: "Salad",
    img: "./assets/food2-plate.png",
    price: "$14.00",
    delay: 0.8,
  },
  {
    id: 3,
    name: "Hot Meal",
    img: "./assets/banner.png",
    price: "$12.00",
    delay: 1.2,
  },
];

const HotDessert = () => {
  return (
    <>
      <div className="section">
        <div className="container py-12 ">
          <motion.h3
            variants={SlideUp(0)}
            initial="hidden"
            whileInView="show"
            className="text-2xl font-bold uppercase text-darkGreen py-8"
          >
            Hot Desserts
          </motion.h3>
          {/*Grid section  */}
          <div className="grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {HotDessertData.map((item) => {
              return (
                <motion.div
                  variants={SlideUp(item.delay)}
                  initial="hidden"
                  whileInView="show"
                  className="group bg-white/50 shadow-md p-3 flex items-center gap-3 rounded-lg"
                >
                  <img
                    src={item.img}
                    alt=""
                    className="w-24 rounded-full img-shadow group-hover:scale-125 transition-all duration-700 group-hover:rotate-[50deg]"
                  />
                  <div className="">
                    <h3 className="text-xl font-semibold">{item.name}</h3>
                    <p className="text-xl text-yellow-500">{item.price}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default HotDessert;
