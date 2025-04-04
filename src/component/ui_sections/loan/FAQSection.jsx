import React from "react";
import { IMAGES } from "../../../constant/Images";
import TextTitleDescription from "../../widgets/text_elements/TextTitleDescription";

const FAQSection = ({}) => {
  const FaqSec = [
    {
      iconLogo: IMAGES.Icon1,
      Question: "How do I create an account on the job board?",
      Answer: "",
      starLogo: IMAGES.BlueStarIcon1,
      FaqSecClass: "mb-[10px]",
    },
    {
      iconLogo: IMAGES.Icon2,
      Question: "How do I apply for a job through the platform?",
      Answer: "",
      starLogo: IMAGES.BlueStarIcon1,
      FaqSecClass: "mb-[10px]",
    },
    {
      iconLogo: IMAGES.Icon3,
      Question: "How can I track the status of my job applications?",
      Answer: "",
      starLogo: IMAGES.BlueStarIcon1,
      FaqSecClass: "",
    },
  ];

  return (
    <div className="py-9">
      <div className="container lg:px-[6rem] px-[3rem]">
        {/* header text */}
        <div className="mb-[10px]">
          <TextTitleDescription
            title="Frequently asked Questions"
            titleClass={"text-[#1E242C] font-sans text-center"}
            description=""
          />
          {/* <p className=" text-[46px] font-medium text-[#1E242C] font-sans"> </p> */}
        </div>

        <div className="flex flex-wrap items-center justify-between mx-auto">
          <div className="lg:w-[45%]">
            {FaqSec.map((question, index) => (
              <div
                className={`flex border-[#E6E9EA] border-[1px] p-2 rounded-[20px] ${question.FaqSecClass}`}
                key={index}
              >
                <img src={question.iconLogo} />
                <div className=" pt-2 px-2 m-2">
                  <p>{question.Question}</p>
                </div>
                <img src={question.starLogo} />
              </div>
            ))}
          </div>

          <div className="lg:w-[45%]">
            <div className=" bg-[#E6F0FF]  border-[1px] p-2 rounded-[20px] mb-[10px]">
              <div className="flex">
                <img src={IMAGES.Icon4} />
                <div className="pt-2 px-2 m-2">
                  <p>How do I create an account on the job board?</p>
                </div>
                <img src={IMAGES.BlueXicon} />
              </div>
              <div className="px-10 pl-16 pb-3">
                <p className="text-[12px] font-normal text-[#414D60]">
                  Use the search bar on the homepage to enter keywords related
                  to your skills, job title, or preferred location. You can also
                  use the advanced search filters to narrow down results by
                  industry, job type (full-time, part-time, freelance), and
                  experience level.
                </p>
              </div>
            </div>
            <div className="flex border-[#E6E9EA] border-[1px] p-2 rounded-[20px]">
              <img src={IMAGES.Icon5} />
              <div className="pt-2 px-2 m-2">
                <p>How can I track the status of my job applications?</p>
              </div>
              <img src={IMAGES.BlueStarIcon1} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
