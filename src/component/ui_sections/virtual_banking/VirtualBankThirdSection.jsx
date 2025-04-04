import React from "react";
import { TripleChildContainer } from "../../common/containers/TripleChildContainer";
import ImageTextCard from "../../widgets/cards/ImageTextCard";
import { IMAGES } from "../../../constant/Images";

const VirtualBankThirdSection = () => {
  return (
    <div>
      <TripleChildContainer
        TripleChildContainerClass={"bg-[#F8FAFC]"}
        headlineContainerClass={"lg:mx-auto lg:text-center lg:w-[70%]"}
        headlineChild={
          <h2 className="text-center text-3xl md:text-4xl capitalize font-bold text-[#12141D]">
            Simple interface through which transactions can be easily managed
          </h2>
        }
        firstChild={
          <div className="lg:w-[90%] mx-auto">
            <ImageTextCard
              innerContainer={"flex flex-col items-center gap-[10px]"}
              image={IMAGES.VBankThirdSecFirstCard}
              title={"Multi Currency Account"}
              description={
                "Customer activity can be easily tracked with one click"
              }
              titleClassStyle={
                "text-[#12141D] font-[400] text-center 2lg:text-[20px]"
              }
              descriptionClass={"text-[#12141D] text-center"}
            />
          </div>
        }
        secondChild={
          <div className="lg:w-[90%] mx-auto">
            <ImageTextCard
              innerContainer={"flex flex-col gap-[10px] items-center"}
              titleClassStyle={
                "text-[#12141D] font-[400] text-center 2lg:text-[20px]"
              }
              descriptionClass={"text-[#12141D] text-center"}
              image={IMAGES.VBankThirdSecSecondCard}
              title={"Across Border Banking"}
              description={
                "A bar code is generated for you to pay for your expenses"
              }
            />
          </div>
        }
        thrirdChild={
          <div className="lg:w-[90%] mx-auto ">
            <ImageTextCard
              innerContainer={"flex flex-col gap-[10px] items-center"}
              image={IMAGES.thirdTxInterfaceImg}
              title={"Full Financial Overview"}
              textContainer2={"items-center"}
              description={"The results show how much work has been done"}
              titleClassStyle={
                "text-[#12141D] font-[400] text-center 2lg:text-[20px]"
              }
              descriptionClass={"text-[#12141D] text-center"}
            />
          </div>
        }
      />
    </div>
  );
};

export default VirtualBankThirdSection;
