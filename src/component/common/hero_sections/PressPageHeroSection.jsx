import React from "react";

const PressPageHeroSection = ({
  PressHeroContainerClass,
  heading = "Brand Resources for Press and Media",
  description = "Find your dream job here. Explore, apply, succeed",
}) => {
  return (
    <div className={`bg-[#f2ece9] ${PressHeroContainerClass}`}>
      <section className=" container flex flex-col items-center justify-center text-center 2lg:py-16 lg:py-16 py-12 px-6  min-h-screen">
        {/* Heading */}
        {
          <h1 className="2lg:w-[50%] text-4xl md:text-5xl font-bold text-gray-900">
            {heading}
          </h1>
        }

        {/* Subtext */}
        <p className="text-[#12141D] mt-4 text-lg tracking-[-0.5px]">
          {description}
        </p>
      </section>
    </div>
  );
};

export default PressPageHeroSection;
