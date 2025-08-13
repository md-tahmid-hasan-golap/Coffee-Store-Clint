import React from "react";
import BannerImg from "../assets/Banner/Coffee-Banner.jpg";
const Banner = () => {
  return (
    <div className="bg-base-200 py-10 px-4 sm:px-6 lg:px-20 rounded-lg my-10">
      <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-16">
        {/* Left: Title + Description */}
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-4xl font-bold mb-4">Welcome to Coffee Store</h1>
          <p className="text-gray-700 text-lg">
            Discover the best coffee beans and drinks. Freshly brewed for your
            enjoyment every day.
          </p>
        </div>

        {/* Right: Image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <img
            src={BannerImg}
            alt="Coffee Banner"
            className="w-full max-w-md h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
