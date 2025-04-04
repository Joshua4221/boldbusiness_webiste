import React from "react";
import { TripleChildContainer } from "../../common/containers/TripleChildContainer";
import TextTitleDescription from "../../widgets/text_elements/TextTitleDescription";
import LightText from "../../widgets/text_elements/LightText";
import { IMAGES } from "../../../constant/Images";

export const PosAquirementSection = () => {
  return (
    <div>
      <TripleChildContainer
        TripleChildContainerClass={"bg-[#FFFFFF]"}
        headlineChild={
          <div className="text-center 2lg:w-[70%] mx-auto flex flex-col">
            <TextTitleDescription
              title="Three simple steps to get one for your business"
              titleClass={"2lg:text-[35px] text-center leading-[tight]"}
              description=""
            />
            <LightText text="Apply for POS - get it within 24 hours." />
          </div>
        }
        firstChild={
          <>
            <img src={IMAGES.CheckEligibityImg} alt="img1" />
          </>
        }
        secondChild={
          <>
            <img src={IMAGES.ChooseOfferImg} alt="img2" />
          </>
        }
        thrirdChild={
          <>
            <img src={IMAGES.BusinessGrowthImg} alt="img3" />
          </>
        }
      />
    </div>
  );
};
