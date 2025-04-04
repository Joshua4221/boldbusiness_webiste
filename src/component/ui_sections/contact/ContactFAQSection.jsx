import React from "react";
import { IMAGES } from "../../../constant/Images";

const ContactFAQSection = () => {
  const ContactFAQ1 = [
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
      FaqSecClass: "mb-[10px]",
    },
  ];

  const ContactFAQ2 = [
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
      FaqSecClass: "mb-[10px]",
    },
    {
      iconLogo: IMAGES.Icon5,
      Question: "How can I track the status of my job applications?",
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
  ];

  return (
    <div className="py-9">
      <div className="container lg:px-[6rem] px-[3rem]">
        <div className="flex justify-between bg-[#E0E0E0] lg:w-[500px] text-center mx-auto p-4 rounded-[8px] mb-5">
          <p className="text-[#646363]">Tell us how we can help you</p>
          <img src={IMAGES.FAQSearchIcon} className="w-[30px]" />
        </div>

        <div className="flex flex-wrap items-center justify-between mx-auto">
          <div className="lg:w-[45%]">
            {ContactFAQ1.map((question, index) => (
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
          </div>

          <div className="lg:w-[45%]">
            {ContactFAQ2.map((question, index) => (
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
        </div>
      </div>
    </div>
  );
};

export default ContactFAQSection;
