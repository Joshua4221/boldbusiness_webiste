import React from "react";
import DoubleChildContainer from "../../common/containers/DoubleChildContainer";
import TextTitleDescription from "../../widgets/text_elements/TextTitleDescription";
import { IMAGES } from "../../../constant/Images";

const VirtualCardDoubleSections = () => {
  const VirtualCardDoubleSecArray = [
    {
      imgsrc: IMAGES.VCardFirstSecImg1,
      title: "Physical Card for Everyday Spending",
      description1:
        "Use your physical card at any point-of-sale, ATMs, or anywhere that accepts Visa or Mastercard.",
      description2:
        "We’ve created a free social media audience research template to help you keep track of all the information you learn as you conduct your research.",
      mainContainerClass: "md:p-0",
      innerContainerClass: "",
      titleClass: "md:w-[60%]",
      hasMobileviewImage: true,
      imageClass: "hidden md:block w-[100%]",
    },
    {
      imgsrc: IMAGES.VCardFirstSecImg2,
      title: "Virtual Cards for Online Shopping",
      description1:
        "  Create virtual cards on-demand for secure online purchases, avoiding the risk of exposing your main account details.",
      description2:
        "By creating a strong brand presence on social media, you can reach a broader audience & get partners brand advocates to post content.",
      innerContainerClass:
        "flex-wrap-reverse lg:flex-row-reverse  gap-[20px] lg:gap-[0px] ",
      mainContainerClass: "",
      titleClass: "md:w-[55%]",
      hasMobileviewImage: false,
      imageClass: "w-[100%]",
    },
  ];

  return (
    <div>
      {VirtualCardDoubleSecArray.map((section, index) => (
        <DoubleChildContainer
          key={index}
          mainContainerClass={section.mainContainerClass}
          innerContainerClass={section.innerContainerClass}
          childOneContainer={section.childOneContainer}
          childTwoContainer={section.childTwoContainer}
          childOne={
            <div className=" w-[100%]">
              <img
                src={section.imgsrc}
                alt="img1"
                className={section.imageClass}
              />
              {section.hasMobileviewImage ? (
                <img
                  src={IMAGES.virtualCardMobileIMG}
                  className="block md:hidden"
                />
              ) : (
                ""
              )}
            </div>
          }
          childTwo={
            <div className="flex flex-col gap-[25px]">
              <TextTitleDescription
                title={section.title}
                titleClass={`2lg:text-[35px]  lg:w-[80%]  ${section.titleClass}`}
                textDescriptionClass={`lg:text-[15px] lg:w-[70%] text-[Aeonik]`}
                description={section.description1}
                description2={section.description2}
              />
            </div>
          }
        />
      ))}
    </div>
  );
};

export default VirtualCardDoubleSections;
