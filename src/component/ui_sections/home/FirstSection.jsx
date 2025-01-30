import React from "react";
import DoubleChildContainer from "../../common/containers/DoubleChildContainer";
import TextTitleDescription from "../../widgets/text_elements/TextTitleDescription";
import { DoubleChildContainerArray } from "../../../constant/data/HomeFirstSection";
import ListOptions from "../../widgets/text_elements/ListOptions";
// import LigthText from "../../widgets/text_elements/LigthText";
import LightText from "../../widgets/text_elements/LightText";

const FirstSection = () => {
  return (
    <div className={"flex flex-col  py-[30px]"}>
      {DoubleChildContainerArray?.map((section, index) => (
        <DoubleChildContainer
          key={index}
          mainContainerClass={section.mainContainerClass}
          innerContainerClass={section.innerContainerClass}
          childOne={
            <div className="w-[100%]">
              <img src={section.imgSrc} className="w-[100%]  " />
            </div>
          }
          childTwo={
            <div className="flex flex-col gap-[25px] ">
              <TextTitleDescription
                titleClass={"lg:text-[40px]"}
                textDescriptionClass={"lg:text-[16px] text-[Aeonik]"}
                textDescriptionClass2={"lg:text-[16px]"}
                title={section.title}
                description={section.description}
                description2={section.description2}
              />
              {section.hasList && <ListOptions list={section.list} />}
              {section.hasBottomText && (
                <LightText
                  text={section.bottomText}
                  classStyle={section.bottomTextClass}
                />
              )}
            </div>
          }
        />
      ))}
    </div>
  );
};

export default FirstSection;
