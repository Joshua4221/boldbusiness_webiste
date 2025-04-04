import React from "react";
import DoubleChildContainer from "../../common/containers/DoubleChildContainer";
import TextTitleDescription from "../../widgets/text_elements/TextTitleDescription";
import ListOptions from "../../widgets/text_elements/ListOptions";
// import LigthText from "../../widgets/text_elements/LigthText";
import LightText from "../../widgets/text_elements/LightText";
import { VirtualBankSecondSectionArray } from "../../../constant/data/VirtualBankArray";
import { GetBoldButton } from "../../widgets/buttons/GetBoldButton";
import { IMAGES } from "../../../constant/Images";

const VirtualBankingSecondSection = () => {
  return (
    <div className={"flex flex-col  py-[20px]"}>
      {VirtualBankSecondSectionArray?.map((section, index) => (
        <DoubleChildContainer
          key={index}
          mainContainerClass={section.mainContainerClass}
          innerContainerClass={section.innerContainerClass}
          childOneContainer={section.childOneContainer}
          childTwoContainer={section.childTwoContainer}
          childOne={
            <div className="w-[100%]">
              <img src={section.imgSrc} className="w-[100%]" />
            </div>
          }
          childTwo={
            <div className="flex flex-col gap-[25px] ">
              <TextTitleDescription
                titleClass={`2lg:text-[37px] 2lg:w-[80%]  ${section.titleClass}`}
                textDescriptionClass={`2lg:text-[15px] 2lg:w-[80%] text-[Aeonik] ${section.descriptionClass}`}
                title={section.title}
                description={section.description}
                description2={section.description2}
                letterSpaceClass={section.LetterSpaceClass}
              />
              {section.hasList && <ListOptions list={section.list} />}
              {section.hasBottomText && (
                <LightText
                  text={section.bottomText}
                  classStyle={`lg:w-[80%] ${section.bottomTextClass}`}
                />
              )}

              {section.BoldButton && (
                <GetBoldButton
                  children={"Get Bold"}
                  className={
                    "bg-[#006EFE] py-4 px-8 rounded-[8px] text-[#F0F0F0] mt-4"
                  }
                />
              )}
              {section.customBoldButton && (
                <div className="flex justify-between lg:w-[50%] px-2">
                  <p className="text-[#18181B]">Create your Bold Account</p>
                  <img src={IMAGES.BlackArrowRightIcon} alt="arrow right" />
                </div>
              )}
            </div>
          }
        />
      ))}
    </div>
  );
};

export default VirtualBankingSecondSection;
