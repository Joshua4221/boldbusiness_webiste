import React from "react";
import TextTitleDescription from "../../widgets/text_elements/TextTitleDescription";

const VitualBankAccountHeroSection = () => {
  return (
    <div className="container h-full lg:px-[6rem] px-[3rem] xmd:pt-0 pt-[7rem] xmd:py-0 py-[3rem] xmd:relative flex xmd:flex-row flex-col justify-start items-center">
      {/* text container child */}
      <div className="flex items-center justify-center">
        <TextTitleDescription
          title="Virtual bank accounts providing convenience, flexibility"
          description="Providing all customer service within one software. Our landing page template works on all devices and we have completely redesigned the project management experience."
          textContainer={""}
          titleClass={""}
          textDescriptionClass={""}
        />
      </div>
      {/* image container child */}
      <div></div>
    </div>
  );
};

export default VitualBankAccountHeroSection;
