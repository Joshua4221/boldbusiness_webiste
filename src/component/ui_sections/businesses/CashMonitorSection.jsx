import React from "react";
import DoubleChildContainer from "../../common/containers/DoubleChildContainer";
import { IMAGES } from "../../../constant/Images";
import TextTitleDescription from "../../widgets/text_elements/TextTitleDescription";
import LightText from "../../widgets/text_elements/LightText";
import { GetBoldButton } from "../../widgets/buttons/GetBoldButton";

const CashMonitorSection = () => {
  return (
    <div>
      <DoubleChildContainer
        mainContainerClass={""}
        innerContainerClass={""}
        childOneContainer={""}
        childTwoContainer={""}
        childOne={
          <div>
            <TextTitleDescription
              title="Monitor Your Spending trends seamlessly"
              description=""
              titleClass={"2lg:w-[90%] 2lg:text-[35px]"}
            />
            <LightText text="The profile of tax has become much more visible not only from an investor and board perspective but also from a tax authority and public perspectivealso needs to take direct control of risk." />
            <GetBoldButton
              children={"Get Bold"}
              className={
                "bg-[#006EFE] py-4 px-8 rounded-[8px] text-[#F0F0F0] mt-4"
              }
            />
          </div>
        }
        childTwo={
          <div>
            <img src={IMAGES.SpendMonitorCard} />
          </div>
        }
      />
    </div>
  );
};

export default CashMonitorSection;
