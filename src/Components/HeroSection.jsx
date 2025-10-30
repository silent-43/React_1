import React from "react";
import hero from "../assets/hero.png";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-11/12 mx-auto flex justify-center items-center ">
        <img
          src={hero}
          alt="hero"
          className="max-w-full h-auto object-contain"
        />
      </div>

      <div className="w-full bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white py-10 md:py-14 lg:py-16">
        <div className="w-11/12 md:w-9/12 mx-auto">
          <h1 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-snug">
            Trusted by Millions, Built for You
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10 py-8 md:py-10">
            <div className="text-center space-y-2">
              <p className="text-sm md:text-base opacity-90">Total Downloads</p>
              <p className="text-3xl md:text-4xl font-bold">29.6M</p>
              <p className="text-xs md:text-sm opacity-80">
                21% more than last month
              </p>
            </div>

            <div className="text-center space-y-2">
              <p className="text-sm md:text-base opacity-90">Total Reviews</p>
              <p className="text-3xl md:text-4xl font-bold">906K</p>
              <p className="text-xs md:text-sm opacity-80">
                46% more than last month
              </p>
            </div>

            <div className="text-center space-y-2">
              <p className="text-sm md:text-base opacity-90">Active Apps</p>
              <p className="text-3xl md:text-4xl font-bold">132+</p>
              <p className="text-xs md:text-sm opacity-80">
                31 more will Launch
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
