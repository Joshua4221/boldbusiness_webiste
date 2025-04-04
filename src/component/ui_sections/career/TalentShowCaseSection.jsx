import React from "react";
import { TripleChildContainer } from "../../common/containers/TripleChildContainer";
import TextTitleDescription from "../../widgets/text_elements/TextTitleDescription";
import { IMAGES } from "../../../constant/Images";

const TalentShowCaseSection = () => {
  return (
    <div>
      <TripleChildContainer
        TripleChildContainerClass={"bg-white md:block hidden"}
        headlineChild={
          <div className="flex justify-between">
            <TextTitleDescription
              title="Top Talent portfolio Showcase"
              titleClass={"2lg:text-[35px] md:text-[24px]"}
              description=""
            />
            <div className="flex gap-3">
              <img src={IMAGES.leftArrowAshColorIcon} className=" w-14" />
              <img src={IMAGES.rightArrowBlueColorIcon} className="w-14" />
            </div>
          </div>
        }
        firstChild={
          <div>
            <img src={IMAGES.TalentImg1} />
          </div>
        }
        secondChild={
          <div>
            <img src={IMAGES.TalentImg2} />
          </div>
        }
        thrirdChild={
          <div className=" w-[80%]">
            <img src={IMAGES.TalentImg3A} />
          </div>
        }
      />
    </div>
  );
};

export default TalentShowCaseSection;
