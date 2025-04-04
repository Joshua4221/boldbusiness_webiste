import React from "react";
import TextTitleDescription from "./TextTitleDescription";
import { IMAGES } from "../../../constant/Images";

const ListOption2 = () => {
  return (
    <div>
      <div className="flex gap-4">
        <div className="2lg:w-[70px]">
          <img src={IMAGES.instorePaymentIcon} alt="" />
        </div>

        <div>
          <TextTitleDescription
            title="Instore Payment"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt elementum feugiat interdum tortor, porttitor morbi sed facilisis."
            titleClass={"2lg:text-[24px] leading-[10px]"}
            textDescriptionClass={"2lg:w-[75%] 2lg:text-[14px text-[#12141D]"}
          />
        </div>
      </div>

      <div className="flex gap-4">
        <div className="2lg:w-[70px]">
          <img src={IMAGES.onlinePaymetIcon} alt="" className="w-[100%]" />
        </div>

        <div>
          <TextTitleDescription
            title="Online Payment"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt elementum feugiat interdum tortor, porttitor morbi sed facilisis."
            titleClass={"2lg:text-[24px] leading-[10px]"}
            textDescriptionClass={"2lg:w-[75%] 2lg:text-[14px text-[#12141D]"}
          />
        </div>
      </div>
    </div>
  );
};

export default ListOption2;
