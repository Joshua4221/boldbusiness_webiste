import React from "react";
import { TripleChildContainer } from "../../common/containers/TripleChildContainer";
import TextTitleDescription from "../../widgets/text_elements/TextTitleDescription";
import LightText from "../../widgets/text_elements/LightText";
import { IMAGES } from "../../../constant/Images";

const FastTxFeauture = () => {
  return (
    <div>
      <TripleChildContainer
        threeChildContainerClass={
          "flex flex-wrap  lg:justify-between gap-[20px]"
        }
        TripleChildContainerClass={"bg-[#fff] py-[100px]"}
        headlineContainerClass={"lg:mx-auto lg:text-center lg:w-[80%]"}
        headlineChild={
          <>
            <TextTitleDescription
              title="These features make your Transaction work faster"
              description=""
              titleClass={"text-center w-[70%] lg:w-[85%] mx-auto"}
            />
            <div className="lg:w-[70%] lg:mx-auto">
              <LightText
                text="Make your visitors happy and reduce website loading time. Take full advantage of speed and power."
                classStyle={
                  "text-[16px] w-[70%] text-[#12141D] mx-auto font-normal text-center"
                }
              />
            </div>
          </>
        }
        firstChild={
          <img
            src={IMAGES.FastTx1}
            alt="1st"
            className="text-3xl md:text-4xl"
          />
        }
        secondChild={<img src={IMAGES.FastTx2} alt="2nd" />}
        thrirdChild={<img src={IMAGES.FastTx3} alt="3rd" />}
      />
    </div>
  );
};

export default FastTxFeauture;
