import React from "react";
import { IMAGES } from "../../../constant/Images";
import TextTitleDescription from "../../widgets/text_elements/TextTitleDescription";
import { GetBoldButton } from "../../widgets/buttons/GetBoldButton";

const TextCenteredBanner = () => {
  return (
    <div className="">
      {/* <div className="absolute inset-0 bg-black clip-custom"></div> */}

      {/* inner layer */}
      <div className=" relative py-0  overflow-hidden  bg-darkBackground ">
        <div className="w-full">
          <img src={IMAGES.divider} className="w-full" alt="" />
        </div>
        <div className=" flex items-center lg:h-[50vh] h-[30vh] justify-center ">
          {/* text container */}
          <div className="lg:w-[50%] flex flex-col items-center gap-[20px] mx-auto">
            <TextTitleDescription
              textContainer={"text-[#fff] text-center "}
              titleClass={"text-white"}
              textDescriptionClass={"text-white mx-auto w-[65%]"}
              title="Get Bold Business App"
              description="Work smarter with this time management and not hard, join our newsletter for a better experience"
            />
            <GetBoldButton
              className={
                "bg-[#006EFE] text-white font-[700] rounded-[10px] py-[8px] px-[20px]"
              }
            >
              Get Bold
            </GetBoldButton>
          </div>
        </div>

        {/* spiral shape image container */}
        <div className="absolute lg:top-0 w-[50%] top-[1rem] lg:w-[40%] left-0">
          <img src={IMAGES.BottomBannerShape} className={"w-[100%]"} />
        </div>
      </div>
    </div>
  );
};

export default TextCenteredBanner;
