import React from "react";
import { ThirdHomeSectionDoubleChildContainerArray } from "../../../constant/data/HomeThirdSection";
import ThirdSectionDoubleChildContainer from "../../common/containers/ThirdSectionDoubleChildContainer";
import TextTitleDescription from "../../widgets/text_elements/TextTitleDescription";
import { GetBoldButton } from "../../widgets/buttons/GetBoldButton";
import DoubleChildContainer from "../../common/containers/DoubleChildContainer";
import MultiTitleTexts from "../../widgets/text_elements/MultiTitleTexts";
import MultiDescriptionTexts from "../../widgets/text_elements/MultiDescriptionTexts";

const ThirdSection = () => {
  return (
    <div className="flex flex-col py-[30px]">
      {ThirdHomeSectionDoubleChildContainerArray?.map((thirdSection, index) => (
        <DoubleChildContainer
          key={index}
          mainContainerClass={thirdSection.thirdSecMainContainerClass}
          innerContainerClass={thirdSection.thirdSecInnerContainerClass}
          childOneContainer={thirdSection.childOneContainer}
          childTwoContainer={thirdSection.childTwoContainer}
          childOne={
            <div className=" w-[100%]">
              <img
                src={thirdSection.imageScr1}
                className={`w-[100%] ${thirdSection.imageClassStyle}`}
              />
            </div>
          }
          childTwo={
            <div
              className={`flex flex-col gap-[25px] ${thirdSection.ColreverseStyle}`}
            >
              {thirdSection?.hasMultiTitle && (
                <MultiTitleTexts titles={thirdSection?.titles} />
              )}
              <img
                src={thirdSection.imageScr2}
                className={`${thirdSection.buttonImgClass}`}
              />
              {thirdSection?.hasMultiTexts && (
                <MultiDescriptionTexts
                  descriptions={thirdSection?.descriptions}
                />
              )}
              <TextTitleDescription
                titleClass={`2lg:text-[37px] 2lg:w-[80%] ${thirdSection.titleClass}`}
                titleClass2={"2lg:text-[38px]"}
                textDescriptionClass={`2lg:text-[16px] text-[Aeonik] ${thirdSection.textDescriptionClass}`}
                title={thirdSection.title1}
                title2={thirdSection.title2}
                description={thirdSection.discription}
                description2={""}
              />

              {thirdSection.button && (
                <GetBoldButton
                  children={"Get Bold"}
                  className={
                    "bg-white w-[40%]  2lg:w-[30%] text-[black] px-4 py-2 rounded-md border-[1.5px] border-[black] font-bold"
                  }
                />
              )}
            </div>
          }
        />
      ))}
    </div>
  );
};

export default ThirdSection;
