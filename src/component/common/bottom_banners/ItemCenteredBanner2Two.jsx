import React from "react";
import TextTitleDescription from "../../widgets/text_elements/TextTitleDescription";
import { GetBoldButton } from "../../widgets/buttons/GetBoldButton";

const ItemCenteredBanner2Two = () => {
  return (
    <section className="bg-black text-white py-16 px-9 text-center md:text-left">
      <div className="container max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Text Content */}
        <div className="mb-6 md:mb-0">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Access fast, flexible Payment <br /> with{" "}
            <span className="text-white">Bold Business</span>
          </h2>
          <p className="text-gray-300 mt-4 text-lg">
            Get quick and easy financing. No late fees. No ongoing interest.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-col md:flex-row gap-4">
            <GetBoldButton
              children={"Get Started with Bold Business →"}
              className={
                "bg-[#006EFE] hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg font-semibold flex items-center justify-center"
              }
            />
            <GetBoldButton
              children={"Contact Sales"}
              className={
                "bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg text-lg font-semibold"
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ItemCenteredBanner2Two;
