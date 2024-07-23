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
        </div>
      </section>
    </>
  );
};

export default PopularRecipe;
