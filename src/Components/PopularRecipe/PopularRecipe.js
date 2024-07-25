import React from "react";
import { SlideUp } from "../Hero/Hero";
import { motion } from "framer-motion";

const PopularRecipeData = [
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

const PopularRecipe = () => {
  return (
    <>
      <section>
        <div className="container py-24">
          <motion.h3
            variants={SlideUp(0.5)}
            initial="hidden"
            whileInView={"show"}
            className="text-4xl text-center uppercase font-league font-semibold py-8"
          >
            Our Popular Recipe
          </motion.h3>
          {/* Card Section  */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-item-center">
            {PopularRecipeData.map((item) => {
              return (
                <div className="group space-y-3 text-center bg-white/50 shadow-xl p-3 rounded-xl">
                  <img
                    src={item.img}
                    className="w-44 h-44 mx-auto img-shadow group-hover:scale-x-110 group-hover:translate-y-[-50px] group-hover:translate-x-10 group-hover:rotate-[50deg] transition-all duration-700"
                    alt=""
                  />
                  <button className="btn-primary group-hover:mb-3 opacity-0 group-hover:opacity-100">
                    Buy now
                  </button>
                  <p className="text-xl font-semibold">{item.name}</p>
                  <p className="text-xl font-bold text-yellow-500">
                    {item.price}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default PopularRecipe;
