import React from "react";
import { IMAGES } from "../../../constant/Images";
import LightText from "../../widgets/text_elements/LightText";

const MiniTripleSection = ({
  mainContainerClass = "bg-[#F8FAFC] p-8 hidden md:block",
}) => {
  const TextIcon = [
    {
      icon: IMAGES.BuildIconMini,
      description: "Building world class business with ease",
    },
    {
      icon: IMAGES.WoldIconMini,
      description: "Easy payments all over the world ",
    },
    {
      icon: IMAGES.saveMiniIcon,
      description: "Save up to 10% of every purchase you made",
    },
  ];

  return (
    <div className={mainContainerClass}>
      <div className="container mx-auto flex flex-col gap-3 md:flex-row justify-between items-center px-6 md:px-12 ">
        {TextIcon.map((testIconChild, index) => (
          <div key={index} className="flex gap-2">
            <img src={testIconChild.icon} />
            <div className="flex justify-center items-center">
              <LightText text={testIconChild.description} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MiniTripleSection;
