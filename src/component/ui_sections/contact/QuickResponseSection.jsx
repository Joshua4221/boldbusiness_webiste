import React from "react";
import DoubleChildContainer from "../../common/containers/DoubleChildContainer";
import { IMAGES } from "../../../constant/Images";
import TextTitleDescription from "../../widgets/text_elements/TextTitleDescription";

const QuickResponseSection = () => {
  return (
    <div className="py-8">
      <TextTitleDescription
        title="Quick Responses"
        description=""
        titleClass={"mx-auto 2lg:text-[37px] w-[60%] text-center"}
      />
      <DoubleChildContainer
        childOneContainer={"lg:w-[40%]"}
        childOne={
          <div>
            <img src={IMAGES.QuickResponseImg1} />
          </div>
        }
        childTwo={
          <div>
            <img src={IMAGES.QuickResponseImg2} />
          </div>
        }
      />
    </div>
  );
};

export default QuickResponseSection;
