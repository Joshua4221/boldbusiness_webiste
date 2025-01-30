import React from "react";
import { IMAGES } from "../../../constant/Images";
import TextTitleDescription from "../../widgets/text_elements/TextTitleDescription";
import { GetBoldButton } from "../../widgets/buttons/GetBoldButton";

const TextCenteredBanner = () => {
  return (
    <div className="bg-[#F8FAFC] pt-[20px] ">
      <div className=""></div>

      {/* inner layer */}
      <div className=" relative flex items-center justify-center overflow-hidden h-[80vh] bg-darkBackground ">
        {/* text container */}
        <div className="w-[50%] flex flex-col items-center gap-[20px] mx-auto">
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
        {/* spiral shape image container */}
        <div className="absolute top-0 w-[40%] left-0">
          <img src={IMAGES.BottomBannerShape} className={"w-[100%]"} />
        </div>
      </div>
    </div>
  );
};

export default TextCenteredBanner;
