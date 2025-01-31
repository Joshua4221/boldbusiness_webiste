import React from "react";
import { IMAGES } from "../../../constant/Images";
import { TripleChildContainer } from "../../common/containers/TripleChildContainer";
import TextTitleDescription from "../../widgets/text_elements/TextTitleDescription";
import ImageTextCard from "../../widgets/cards/ImageTextCard";

const SecondSection = () => {
  return (
    <div>
      <TripleChildContainer
        tripleChildInnerContainerClass={"mx-auto flex flex-col lg:gap-[50px] "}
        headlineChild={
          <h2 className="text-center text-3xl md:text-4xl capitalize font-bold text-[#FFFFFF]">
            Scan and pay with ease
          </h2>
        }
        firstChild={
          <div className="lg:w-[90%] mx-auto">
            <ImageTextCard
              title={"Request Payment"}
              description={"Set the amount, and the customer scans to pay"}
            />
          </div>
        }
        secondChild={
          <div className="lg:w-[90%] mx-auto">
            <ImageTextCard
              image={IMAGES.scanToPay}
              title={"Scan with Bold App to Pay"}
              description={
                "A bar code is generated for you to pay for your expenses"
              }
            />
          </div>
        }
        thrirdChild={
          <div className="lg:w-[90%] mx-auto">
            <ImageTextCard
              image={IMAGES.successfulTransaction}
              title={"Swift Transaction in Seconds"}
              description={"The fastest way to make payment with ease"}
            />
          </div>
        }
      />
    </div>
  );
};

export default SecondSection;
