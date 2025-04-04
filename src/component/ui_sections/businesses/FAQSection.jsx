import React from "react";
import TextTitleDescription from "../../widgets/text_elements/TextTitleDescription";
import { IMAGES } from "../../../constant/Images";
import LightText from "../../widgets/text_elements/LightText";

const FAQSection = () => {
  const FAQArray = [
    {
      title: "Cross-border multi?",
      description: "",
      icon: IMAGES.vectorArrowDown,
    },
    {
      title: "Cross-border multi?",
      description:
        "Cross-border Find your dream home with CribInn's selection of houses. Whether you're looking for a cozy cottage or a spacious villa, we've got options to suit every lifestyle and budget Cross-border Find your dream home with CribInn's selection of houses. Whether you're looking for a cozy cottage or a spacious villa, we've got options to suit every lifestyle and budget",
      icon: IMAGES.vectorArrowDown,
    },
    {
      title: "Cross-border multi?",
      description: "",
      icon: IMAGES.vectorArrowDown,
    },
    {
      title: "Cross-border multi?",
      description: "",
      icon: IMAGES.vectorArrowDown,
    },
  ];

  return (
    <div className="px-[0.3rem] lg:px-[3rem] py-10">
      <div className="container px-[0.3rem] lg:px-[3rem]">
        {/* title */}
        <div className="flex justify-center ">
          <TextTitleDescription
            title="Frequently Asked Questions"
            titleClass={"2lg:text-[40px]"}
            description=""
          />
        </div>

        {/* Faq Element */}
        {FAQArray.map((faqSec, index) => (
          <div className="bg-[#FAFAFA] rounded-[20px] mb-4 px-8 py-3">
            <div className="flex justify-between " key={index}>
              <div className="">
                <TextTitleDescription
                  description={faqSec.title}
                  title=""
                  textDescriptionClass={"text-[#1E1E1E] font-bold"}
                />
              </div>
              <div className=" flex justify-center">
                <img src={faqSec.icon} className="lg:w-6" />
              </div>
            </div>
            <div className="">
              <LightText
                text={faqSec.description}
                classStyle={"2lg:w-[70%] hidden md:block"}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
