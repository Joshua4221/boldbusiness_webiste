import React from "react";
import { TripleChildContainer } from "../../common/containers/TripleChildContainer";
import TextTitleDescription from "../../widgets/text_elements/TextTitleDescription";
import LightText from "../../widgets/text_elements/LightText";
import { IMAGES } from "../../../constant/Images";

const TripleCardContainer = () => {
  return (
    <div>
      <TripleChildContainer
        TripleChildContainerClass={"bg-[#FAFAFA]"}
        firstChildContainer={"lg:w-[30%]"}
        secondChildContainer={"lg:w-[30%]"}
        thirdChildContainer={"lg:w-[30%]"}
        threeChildContainerClass={"flex flex-wrap gap-[0] mx-auto"}
        TripleFirstInneClass={"container 2lg:px-[9rem]"}
        headlineChild={
          <>
            <TextTitleDescription
              title="A Simple Way to Make Payment"
              titleClass={"2lg:text-[35px]"}
              description=""
            />
            <LightText text="Transform your business with a payment method that’s quick, easy, and trusted." />
          </>
        }
        firstChild={
          <>
            <img src={IMAGES.InstantBlackBackground} />
          </>
        }
        secondChild={
          <>
            <img src={IMAGES.SeamlessBackground} />
          </>
        }
        thrirdChild={
          <>
            <img src={IMAGES.BoostCustomerBackgound} />
          </>
        }
      />
    </div>
  );
};

export default TripleCardContainer;
