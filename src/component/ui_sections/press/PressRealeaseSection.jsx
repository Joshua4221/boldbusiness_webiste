import React from "react";
import TextTitleDescription from "../../widgets/text_elements/TextTitleDescription";
import { IMAGES } from "../../../constant/Images";

const PressRealeaseSection = () => {
  const PressRealise = [
    {
      PressImage: IMAGES.PressRealise1img,
      pressLabel: "Press Release",
      PressHeadline:
        "A team of developers just made payment seamless with scan to pay devices.",
      PressInfo:
        "Over 32 million phishing emails have been reported to the Suspicious Email Reporting Service (SERS), with more than a third of all emails reported in the last year, new figures reveal. Over 32 million phishing emails have been reported to the Suspicious ",
      PressIssuer: "Business Insider",
      PressDate: "9th April 2024,10:28 am",
    },
    {
      PressImage: IMAGES.PressRealiseImg2,
      pressLabel: "Press Release",
      PressHeadline:
        "A team of developers just made payment seamless with scan to pay devices.",
      PressInfo:
        "Over 32 million phishing emails have been reported to the Suspicious Email Reporting Service (SERS), with more than a third of all emails reported in the last year, new figures reveal. Over 32 million phishing emails have been reported to the Suspicious ",
      PressIssuer: "Business Insider",
      PressDate: "9th April 2024,10:28 am",
    },
    {
      PressImage: IMAGES.PressRealiseImg3,
      pressLabel: "Press Release",
      PressHeadline:
        "A team of developers just made payment seamless with scan to pay devices.",
      PressInfo:
        "Over 32 million phishing emails have been reported to the Suspicious Email Reporting Service (SERS), with more than a third of all emails reported in the last year, new figures reveal. Over 32 million phishing emails have been reported to the Suspicious ",
      PressIssuer: "Business Insider",
      PressDate: "9th April 2024,10:28 am",
    },
  ];

  return (
    <div className="">
      <div className="container lg:px-[6rem] px-[3rem]">
        {/* page count icons */}
        <div></div>

        {/* headings */}
        <div className=" text-center">
          <TextTitleDescription title="Press Release" description="" />
        </div>

        {PressRealise.map((pressContent, index) => (
          <div
            className="flex flex-col md:flex-row bg-gray-100 rounded-lg overflow-hidden shadow-lg mb-6"
            key={index}
          >
            <img
              src={pressContent.PressImage}
              alt="Press Image 1"
              className="w-full md:w-1/3 object-cover"
            />
            <div className="p-6 md:w-2/3">
              <span className="bg-yellow-400 text-black px-2 py-1 rounded text-xs font-bold">
                {pressContent.pressLabel}
              </span>
              <h3 className="text-xl font-bold mt-2">
                {pressContent.PressHeadline}
              </h3>
              <p className="text-gray-600 mt-2 text-sm">
                {pressContent.PressInfo}
              </p>
              <p className="text-xs text-gray-500 mt-4">
                {pressContent.PressIssuer}
              </p>
              <p className="text-xs text-gray-500">{pressContent.PressDate}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PressRealeaseSection;
