import React from "react";

const TextTitleDescription = ({
  title = "Add Title",
  description = "Add Description",
  description2 = "Add second desciption",
  textContainer,
  titleClass,
  textDescriptionClass,
  textDescriptionClass2,
  title2,
  titleClass2,
}) => {
  return (
    <div className={` text-primary flex flex-col gap-[20px]  ${textContainer}`}>
      <h1
        className={`font-[700] leading-[1.2] text-[38px] lg:text-[55px]  ${titleClass}`}
      >
        {title}
      </h1>

      <p className={`font-[400] text-[16px] ${textDescriptionClass}`}>
        {description}
      </p>
    </div>
  );
};

export default TextTitleDescription;
