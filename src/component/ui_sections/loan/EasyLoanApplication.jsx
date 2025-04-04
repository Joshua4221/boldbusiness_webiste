import React from "react";
import DoubleChildContainer from "../../common/containers/DoubleChildContainer";
import TextTitleDescription from "../../widgets/text_elements/TextTitleDescription";
import LightText from "../../widgets/text_elements/LightText";
import { IMAGES } from "../../../constant/Images";

const EasyLoanApplication = () => {
  return (
    <div>
      <DoubleChildContainer
        childOne={
          <>
            <img src={IMAGES.RealCreditScoreImg} alt="img" />
          </>
        }
        childTwo={
          <div>
            <TextTitleDescription
              titleClass={"2lg:w-[80%] 2lg:text-[35px]"}
              textDescriptionClass={"lg:w-[85%] text-[#12141D]"}
              title="Easy Loan Application and Fast Payment"
              description="This approach ensures convenience for users, offering them a quick solution to their financial needs while maintaining transparency and security."
            />
            <LightText
              text="Get it right, and you'll end up working smarter to get more done in less time. Drawing up a to-do list might not seem like a groundbreaking technique."
              classStyle={"text-[#12141D] lg:w-[73%]"}
            />
          </div>
        }
      />
    </div>
  );
};

export default EasyLoanApplication;
