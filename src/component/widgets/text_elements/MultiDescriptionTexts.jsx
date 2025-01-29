import React from "react";

const MultiDescriptionTexts = ({
  textContainer,
  descriptions = [{ description: "Add Description", class: "" }],
}) => {
  return (
    <div className={` text-primary flex flex-col gap-[20px]  ${textContainer}`}>
      {descriptions.map((description, key) => (
        <p key={key} className={`font-[400] text-[16px] ${description.class}`}>
          {description.description}
        </p>
      ))}
    </div>
  );
};

export default MultiDescriptionTexts;
