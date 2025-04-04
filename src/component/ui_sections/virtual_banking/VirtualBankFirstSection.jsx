import React from "react";
import { TripleChildContainer } from "../../common/containers/TripleChildContainer";
import ImageTextCard from "../../widgets/cards/ImageTextCard";
import { IMAGES } from "../../../constant/Images";

export const VirtualBankFirstSection = () => {
  return (
    <div>
      <TripleChildContainer
        TripleChildContainerClass={
          "bg-[#FFFFFF]  2lg:py-[60px] lg:py-[40px] py-[20px] "
        }
        threeChildContainerClass={""}
        tripleChildInnerContainerClass={"mx-auto flex flex-col  lg:gap-[50px] "}
        hasHeadLine={false}
        headlineChild={false}
        firstChild={
          <div className="lg:w-[90%] mx-auto">
            <ImageTextCard
              image={IMAGES.effortlessSetupIcon}
              imageContainer={"w-[10%]"}
              title={"Effortless Set Up"}
              innerContainer={"flex flex-col items-start gap-[30px]"}
              textContainer="items-start lg:w-[80%] justify-center gap-[10px]"
              titleClassStyle={
                " text-[#12141D]  text-left font-[400] text-[25px]  2lg:text-[20px] "
              }
              descriptionClass={
                "text-[#12141D] font-[300] text-left text-[15px]"
              }
              description={
                "With lots of unique blocks, you can easily build a page without coding. Build your next landing page quickly."
              }
            />
          </div>
        }
        secondChild={
          <div className="2lg:w-[90%] mx-auto">
            <ImageTextCard
              imageContainer={"w-[10%]"}
              image={IMAGES.streamlinePayIcon}
              innerContainer={"flex flex-col items-start gap-[30px]"}
              textContainer="items-start lg:w-[80%] justify-center gap-[10px]"
              titleClassStyle={
                " text-[#12141D]  text-left font-[400] text-[25px]  2lg:text-[20px] "
              }
              descriptionClass={
                "text-[#12141D] font-[300] text-left text-[15px]"
              }
              title={"Streamline PAyments"}
              description={
                "With lots of unique blocks, you can easily build a page without coding. Build your next landing page quickly."
              }
            />
          </div>
        }
        thrirdChild={
          <div className="lg:w-[90%] mx-auto">
            <ImageTextCard
              innerContainer={
                "flex flex-col justify-start items-start gap-[30px]"
              }
              textContainer2=" lg:w-[80%] justify-center gap-[10px]"
              titleClassStyle={
                " text-[#12141D]  text-left font-[400] text-[25px]  2lg:text-[20px]"
              }
              descriptionClass={
                "text-[#12141D] font-[300] text-left text-[15px]"
              }
              imageContainer={"w-[10%] mx-[0px]"}
              image={IMAGES.fullFinanciialIcon}
              title={"Full Financial Control"}
              description={
                "With lots of unique blocks, you can easily build a page without coding. Build your next landing page quickly."
              }
            />
          </div>
        }
      />
    </div>
  );
};
