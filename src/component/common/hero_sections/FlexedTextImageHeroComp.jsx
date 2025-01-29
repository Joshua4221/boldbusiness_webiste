import React from "react";
import TextTitleDescription from "../../widgets/text_elements/TextTitleDescription";
import { GetBoldButton } from "../../widgets/buttons/GetBoldButton";
import { IMAGES } from "../../../constant/Images";
// import LigthText from "../../widgets/text_elements/LigthText";
import LightText from "../../widgets/text_elements/LightText";

const FlexedTextImageHeroComp = () => {
  return (
    <div className="main-container container relative z-[-100] ">
      <div className="inner-container mx-auto h-[115vh] relative bg-custom-gradient lg:px-[6rem] lg:w-[100%]  flex flex-wrap justify-start items-center ">
        <div className="text-container flex flex-col gap-[20px] w-[86%] mx-auto lg:mx-0  lg:w-[45%]">
          <TextTitleDescription
            title="Accept In-Store Payment Across Africa"
            description="With Bold Business App, You’ll be able to make Digital Payments From Your Shop through Mobile Money, Bank Transfer & Card Payments."
          />
          <GetBoldButton
            className="bg-black w-[40%]  lg:w-[30%] text-white px-4 py-2 rounded-md"
            children={"Get started"}
          />
          <LightText text="No Card Required . Pay Anytime" />
        </div>
        <div className="image-container  lg:h-[100%] lg:absolute lg:top-[-66px] lg:w-[60%] lg:right-0">
          <img className="w-[100%]" src={IMAGES.LaughWomanIMG} />
        </div>
      </div>
    </div>
  );
};

export default FlexedTextImageHeroComp;
