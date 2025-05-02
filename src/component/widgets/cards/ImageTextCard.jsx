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
  titleClassStyle = "text-[#fff] font-[400] text-center 2lg:text-[20px]",
  descriptionClass = "text-[#FFFFFF] font-[300] text-center text-[15px]",
}) => {
  return (
    <div className={`${mainContainer}`}>
      <div className={` flex flex-col gap-[40px]   ${innerContainer}`}>
        <div className={`  ${imageContainer}`}>
          <img src={image} className={`${imageClass}`} />
        </div>

        <TextTitleDescription
          textContainer={` lg:w-[80%]   gap-[10px] ${textContainer}`}
          titleClass={titleClassStyle}
          textDescriptionClass={descriptionClass}
          title={title}
          description={description}
        />
      </div>
    </div>
  );
};

export default ImageTextCard;
