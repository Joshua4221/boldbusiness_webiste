import React from "react";
import DoubleChildContainer from "../../common/containers/DoubleChildContainer";
import { IMAGES } from "../../../constant/Images";
import TextTitleDescription from "../../widgets/text_elements/TextTitleDescription";
import LightText from "../../widgets/text_elements/LightText";

const CreditScoreSection = () => {
  return (
    <div className="py-[20px]">
      <DoubleChildContainer
        childOne={
          <div>
            <img src={IMAGES.LoanCreditScoreImg} />
          </div>
        }
        childTwo={
          <div>
            <TextTitleDescription
              title="Build Credit Score for more Loan Access"
              description=""
              titleClass={"2lg:w-[80%] 2lg:text-[35px]"}
            />
            <LightText
              text="Importance of data processing includes better increased productivity and profits, target, right decisions, more accurate and reliable."
              classStyle={"lg:w-[60%]"}
            />
            <div className="flex">
              <TextTitleDescription
                description="Start Now With Bold"
                title=""
                textDescriptionClass={"text-[#18181B] font-bold"}
              />

              <img src={IMAGES.arrowRight} />
            </div>
          </div>
        }
      />
    </div>
  );
};

export default CreditScoreSection;
