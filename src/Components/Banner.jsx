import React from "react";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div className="bg-gradient-to-r my-7 rounded-lg from-amber-100 via-white to-amber-50 py-12 md:py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">
        {/* Left Side - Text */}
        <motion.div
          className="w-full lg:w-1/2 text-center lg:text-left space-y-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
            Discover the Best{" "}
            <motion.span
              animate={{
                color: [
                  "#f87171",
                  "#fb923c",
                  "#facc15",
                  "#4ade80",
                  "#3b82f6",
                  "#a78bfa",
                ],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="font-extrabold"
            >
              Coffee
            </motion.span>
            in Town
          </h1>
          <p className="text-gray-600 md:text-lg">
            Start your day with a freshly brewed cup of coffee. Our beans are
            sourced from the finest farms to bring you rich taste and energy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-amber-600 text-white font-semibold rounded-lg shadow hover:bg-amber-700 transition duration-300"
            >
              Order Now
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-white border border-amber-600 text-amber-600 font-semibold rounded-lg shadow hover:bg-amber-100 transition duration-300"
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>

        {/* Right Side - Image */}
        <motion.div
          className="w-full lg:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <img
            src="https://i.ibb.co/wF28JTfy/1909-i305-028-realistic-coffee.jpg"
            alt="Coffee Banner"
            className="h-[250px] md:h-[300px] lg:h-[350px] w-auto object-cover rounded-xl shadow-lg"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
