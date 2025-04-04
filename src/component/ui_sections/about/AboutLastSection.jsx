import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { IMAGES } from "../../../constant/Images";

export const AboutLastSection = () => {
  return (
    <section className="px-6 md:px-20 py-16">
      {/* Section Title */}
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
        From our Partners
      </h2>

      {/* Testimonial Container */}
      <div className="mt-8 flex flex-col md:flex-row items-center gap-6">
        {/* Testimonial Card */}
        <div className="bg-gray-900 text-white p-8 rounded-lg 2lg:w:[60%] w-full md:w-1/2 shadow-lg">
          <p className="text-sm font-semibold text-gray-400">
            <span className="text-white">Glad Akhison</span> • CEO of Bold
          </p>
          <p className="mt-4 text-xl md:text-2xl font-medium">
            “Working with Master in me has been an incredibly painless and
            enjoyable experience.”
          </p>

          {/* Navigation Buttons */}
          <div className="mt-6 flex gap-3">
            <button className="p-3 rounded-full bg-gray-300 text-gray-900 hover:bg-gray-400">
              <FaArrowLeft />
            </button>
            <button className="p-3 rounded-full bg-blue-600 text-white hover:bg-blue-700">
              <FaArrowRight />
            </button>
          </div>
        </div>

        {/* Partner Image */}
        <div className="2lg:w-[40%] md:w-1/2">
          <img
            src={IMAGES.CeoImg} // Replace with actual image
            alt="Partner"
            className="rounded-lg w-[100%] object-cover"
          />
        </div>
      </div>
    </section>
  );
};
