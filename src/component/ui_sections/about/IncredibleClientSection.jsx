import React from "react";
import { IMAGES } from "../../../constant/Images";
import TextTitleDescription from "../../widgets/text_elements/TextTitleDescription";

const IncredibleClientSection = () => {
  return (
    <div className="lg:py-[100px]  bg-[#FAFAFA] hidden md:block">
      <section className=" container lg:px-[6rem] text-center mx-auto">
        <TextTitleDescription
          title="We are happy to work with incredible clients"
          description="Fortune 500 companies and renowned global brands place their trust in our products, solutions, and bespoke software development services."
          titleClass={
            "2lg:w-[60%] 2lg:text-[35px] md:text-4xl font-bold text-[#1E242C] mx-[auto]"
          }
          textDescriptionClass={"text-[#414D60] mt-3 max-w-2xl mx-auto"}
        />

        {/* Clients Logos */}
        <div className="mt-3 2lg:w-[60%] mx-auto">
          <img
            src={IMAGES.IncreadibleClientIMG}
            alt="img"
            className="lg:w[50%]"
          />
        </div>
      </section>
    </div>
  );
};

export default IncredibleClientSection;
