import React from "react";
import { IMAGES } from "../../../constant/Images";

const VirtualCardBannerSection = () => {
  return (
    // <div>
    //   <section className="container relative bg-cover bg-center md:p-12 rounded-lg shadow-md max-w-5xl mx-auto"></section>
    // </div>
    <div className="container lg:px-[6rem]">
      <section
        className=" relative w-full h-[450px] md:h-[500px] lg:h-[550px] flex items-center bg-cover bg-cente rounded-[20px]"
        style={{ backgroundImage: `url(${IMAGES.VcardbackgroundIMG})` }} // Replace with actual image path
      >
        {/* Overlay for better readability */}
        <div className="absolute inset-0 bg-white/60"></div>

        {/* Content Wrapper */}
        <div className=" relative z-10 max-w-2xl px-6 md:px-12 lg:px-16 text-black">
          <h4 className="text-purple-600 uppercase text-sm font-semibold tracking-wider">
            Virtual Cards
          </h4>
          <h1 className="text-3xl md:text-5xl font-bold mt-2">
            Use our Virtual Card <br /> Anytime, Anywhere
          </h1>
          <p className="text-lg font-semibold mt-4 text-gray-900">
            Input Preferred Information
          </p>
          <p className="mt-2 text-gray-600 text-sm md:text-base">
            Community building is a field of practices directed toward the
            creation or enhancement of community among individuals.
          </p>

          {/* Call to Action Link */}
          <a
            href="#"
            className="mt-4 inline-block text-blue-600 font-semibold text-lg flex items-center hover:underline"
          >
            Get Your Bold Card <span className="ml-2">➜</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default VirtualCardBannerSection;
