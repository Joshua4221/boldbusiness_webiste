import React from "react";
import TextTitleDescription from "../../widgets/text_elements/TextTitleDescription";
import { IMAGES } from "../../../constant/Images";
import { GetBoldButton } from "../../widgets/buttons/GetBoldButton";

function ColumnBasedHeroSecComp({
  mainContainer,
  innerContainer,
  imageContainer,
  textContainer,
  textSection,
  imageClass,
  image = IMAGES.VitualBankHeroIMG,
  title = "Virtual bank accounts providing convenience, flexibility",
  titleClass,
  description = "Providing all customer service within one software. Our landing page template works on all devices and we have completely redesigned the project management experience.",
  textDescriptionClass,
  buttonStyles,
  buttonText,
}) {
  return (
    <div className={`bg-[#12141D] ${mainContainer}`}>
      <div className="container h-full lg:px-[6rem] px-[1rem]">
        <div className={`pt-[8rem] flex flex-col gap-[2rem] ${innerContainer}`}>
          <div className="flex flex-col items-center gap-[2rem] ">
            <TextTitleDescription
              textContainer={` w-[100%]  lg:w-[70%] mx-auto ${textContainer}`}
              titleClass={` text-[#fff] text-[28px] text-center ${titleClass}`}
              textDescriptionClass={` text-[#fff] lg:w-[70%] mx-auto text-center ${textDescriptionClass}`}
              title={title}
              description={description}
            />
            <GetBoldButton children={"Get Bold"} />
          </div>
          <div className={` lg:w-[30%] w-[70%] mx-auto ${imageContainer}`}>
            <img src={image} className={` w-[100%] ${imageClass}`} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ColumnBasedHeroSecComp;
