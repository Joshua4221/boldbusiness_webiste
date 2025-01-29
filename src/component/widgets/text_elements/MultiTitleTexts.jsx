import React from "react";

const MultiTitleTexts = ({
  textContainer,
  titles = [{ title: "Add Description", class: "" }],
}) => {
  return (
    <div className={` text-primary flex flex-col gap-[20px]  ${textContainer}`}>
      {titles.map((title, key) => (
        <h1
          key={key}
          className={`font-[700] leading-[1.2] text-[38px] lg:text-[55px]  ${title.class}`}
        >
          {title.title}
        </h1>
      ))}
    </div>
  );
};

export default MultiTitleTexts;
