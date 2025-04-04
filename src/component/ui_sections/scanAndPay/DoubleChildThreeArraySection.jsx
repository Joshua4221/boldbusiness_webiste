import React from "react";
import { DoubleChildScanAndPayArraySection } from "../../../constant/data/ScanPayDoubleChildThreeArraySection";
import DoubleChildContainer from "../../common/containers/DoubleChildContainer";
import TextTitleDescription from "../../widgets/text_elements/TextTitleDescription";
import LightText from "../../widgets/text_elements/LightText";
import ListOption2 from "../../widgets/text_elements/ListOption2";

const DoubleChildThreeArraySection = () => {
  return (
    <div>
      {DoubleChildScanAndPayArraySection.map((sec, index) => (
        <DoubleChildContainer
          key={index}
          mainContainerClass={sec.mainContainerClass}
          innerContainerClass={sec.innerContainerClass}
          childOneContainer={sec.childOneContainer}
          childTwoContainer={sec.childTwoContainer}
          childOne={
            <div className={`w-[100%]`}>
              <img src={sec.ImgScr} className="w-[100%]" />
            </div>
          }
          childTwo={
            <div>
              <TextTitleDescription
                titleClass={`2lg:text-[35px] 2lg:w-[60%] text-[#18181B] ${sec.textTitleClass}`}
                textDescriptionClass={
                  "2lg:text-[15px] 2lg:w-[60%] text-[Aeonik] text-[#12141D]"
                }
                title={sec.Title}
                description={sec.Description}
              />
              {sec.hasList && <ListOption2 />}
              <div>
                <LightText
                  text={sec.Description2}
                  classStyle={"text-[#12141D] 2lg:w-[70%]"}
                />
              </div>
            </div>
          }
        />
      ))}
    </div>
  );
};

export default DoubleChildThreeArraySection;
