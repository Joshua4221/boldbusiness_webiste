import React from "react";
import { IMAGES } from "../../../constant/Images";
import TextTitleDescription from "../../widgets/text_elements/TextTitleDescription";

export const VirtualCardsPage = () => {
  return (
    // min-h-screen w-full pt-16 px-4 flex flex-col items-center
    <section className=" bg-gradient-to-b from-black via-blue-800 to-blue-400 text-white ">
      <div className="container h-full lg:px-[6rem] px-[1rem]">
        <div className={`pt-[8rem] flex flex-col lg:gap-[2rem] gap-[1rem] `}>
          {/* Header Section */}
          <div className="max-w-6xl w-full text-center">
            <TextTitleDescription
              textContainer={` w-[100%]  lg:w-[70%] mx-auto`}
              title="Physical and Virtual Cards"
              titleClass={"text-center text-white lg:w-[50%] w-[60%] mx-auto"}
              description="With Bold Business App, You’ll be able to make Digital Payments From
            Your Shop through Mobile Money, Bank Transfer & Card Payments."
              textDescriptionClass={
                "text-[#fff] lg:w-[70%] mx-auto text-center"
              }
            />
          </div>

          {/* Main Image */}
          <div className="mt-12 relative w-full flex justify-center">
            <div className={` lg:w-[30%] w-[70%] mx-auto`}>
              <img
                src={IMAGES.virtualcardHandMain}
                alt="Hand holding phone with card app"
                className="w-60 md:w-80 z-10"
              />
            </div>

            {/* Floating Cards */}
            <div className="absolute top-[-30px] left-[20%] w-38 md:w-40 hidden md:block">
              <img src={IMAGES.FloatVirtcard} alt="Bold Virtual Card" />
              {/* <p className="text-sm text-white mt-1">Bold Virtual Card</p> */}
            </div>

            <div className="absolute top-[30%] left-[12%] w-34 md:w-32 hidden md:block">
              <img
                src={IMAGES.floatVirtualCurrency}
                alt="Multi-Currency"
                className="w-[100%]"
              />
              {/* <p className="text-sm text-white mt-1">Multi-Currency</p> */}
            </div>

            <div className="absolute buttom-[40%] right-[24%] w-38 md:w-36 hidden md:block">
              <img src={IMAGES.FloatPreferenceCard} alt="Preference Control" />
              {/* <p className="text-sm text-white mt-1">Preference Control</p> */}
            </div>

            <div className="absolute bottom-[20px] right-[20%] w-36 md:w-48 hidden md:block">
              <img src={IMAGES.floatVirtualCardIssued} alt="Get Card Easily " />
              {/* <p className="text-sm text-white mt-1">Get Card Easily</p> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
