import React from "react";
import { IMAGES } from "../../../constant/Images";
import TextTitleDescription from "../text_elements/TextTitleDescription";

const ImageTextCard = ({
  mainContainer,
  innerContainer,
  imageContainer,
  image = IMAGES.requestPayment,
  textContainer,
  title,
  description,
  imageClass,
  titleClass,
  descriptionClass,
}) => {
  return (
    <div className={`${mainContainer}`}>
      <div
        className={` flex flex-col gap-[40px] items-center  ${innerContainer}`}
      >
        <div className={`  ${imageContainer}`}>
          <img src={image} className={`${imageClass}`} />
        </div>

        <TextTitleDescription
          textContainer={` items-center lg:w-[80%] justify-center gap-[12px] ${textContainer}`}
          titleClass={` text-[#fff] font-[400] text-center 2lg:text-[20px] ${titleClass} `}
          textDescriptionClass={`text-[#FFFFFF] font-[300] text-center text-[15px] ${descriptionClass}`}
          title={title}
          description={description}
        />
      </div>
    </div>
  );
};

export default ImageTextCard;
