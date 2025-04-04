import React from "react";
import DoubleChildContainer from "../../common/containers/DoubleChildContainer";
import TextTitleDescription from "../../widgets/text_elements/TextTitleDescription";
import { IMAGES } from "../../../constant/Images";

const ScanAndPaySection = () => {
  return (
    <div>
      <DoubleChildContainer
        innerContainerClass={""}
        childOne={
          <div>
            <TextTitleDescription
              title="Move Your Business forward with Scan and Pay"
              description="Business can find you anywhere. softPOS from Kuda helps you receive payments on the move with any smartphone connected to the internet."
              titleClass={"2lg:text-[35px] 2lg:w-[75%]"}
              textDescriptionClass={"text-[#12141D] lg:text-[16px] w-[80%]"}
            />
            <div className="flex bg-[#4B3060] justify-between lg:w-[50%] rounded-[10px] px-2">
              <p className="text-[#FFFFFF]">Explore Scan and Pay</p>
              <img src={IMAGES.SpecialArrowRight} alt="arrow right" />
            </div>
          </div>
        }
        childTwo={
          <div>
            <img src={IMAGES.ScanAndPayQrCode} className="lg:w-[80%]" />
          </div>
        }
      />
    </div>
  );
};

export default ScanAndPaySection;
