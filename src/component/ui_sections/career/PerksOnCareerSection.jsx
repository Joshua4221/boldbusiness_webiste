import React from "react";
import { TripleChildContainer } from "../../common/containers/TripleChildContainer";
import TextTitleDescription from "../../widgets/text_elements/TextTitleDescription";
import LightText from "../../widgets/text_elements/LightText";
import { IMAGES } from "../../../constant/Images";

const PerksOnCareerSection = () => {
  return (
    <div>
      <TripleChildContainer
        TripleChildContainerClass={"bg-[white]"}
        threeChildContainerClass={"gap-4"}
        headlineChild={
          <div>
            <TextTitleDescription
              title="Perks on being on the dream team"
              titleClass={"2lg:text-[35px] text-[22px]"}
              description=""
            />
            <LightText text="We offer some special services through which you can easily complete the marketing work on social media. Which helps increase your lead and sales." />
          </div>
        }
        firstChild={
          <div>
            <img src={IMAGES.AmazingWorkImg} />
          </div>
        }
        secondChild={
          <div>
            <img src={IMAGES.PaidLeaveImg} />
          </div>
        }
        thrirdChild={
          <div>
            <img src={IMAGES.ProjectPortfolioImg} />
          </div>
        }
      />
    </div>
  );
};

export default PerksOnCareerSection;
