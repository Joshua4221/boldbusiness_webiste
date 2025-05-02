import React from "react";
import DoubleChildContainer from "../../common/containers/DoubleChildContainer";
import { IMAGES } from "../../../constant/Images";
import TextTitleDescription from "../../widgets/text_elements/TextTitleDescription";

const DownloadPageSection = () => {
  const pageSectionArray = [
    {
      headlineText: "Use Bold Business on the Go with our Mobile App",
      PageImage: IMAGES.DownloadPageImg1,
      descriptionText: "",
      AppStoreLogo: IMAGES.AppStoreImg,
      GooglePayLogo: IMAGES.GooglePayImg,
      BlueButtonText: "Get Started with Bold business",
      isButton: true,
      TextTitleClass: "2lg:w-[85%] mt-[30px] 2lg:text-[45px]",
    },
    {
      headlineText: "Experience Bold app for effortless bill payments",
      PageImage: IMAGES.DownloadPageQrCodeImg,
      descriptionText:
        "Scan the QR code to download now and unlock a world of financial convenience.",
      AppStoreLogo: IMAGES.AppStoreImg,
      GooglePayLogo: IMAGES.GooglePayImg,
      BlueButtonText: "",
      isButton: false,
      TextTitleClass: "",
    },
  ];

  return (
    <div>
      {pageSectionArray.map((section, index) => (
        <DoubleChildContainer
          key={index}
          mainContainerClass={section.mainContainerClass}
          innerContainerClass={section.innerContainerClass}
          childOneContainer={section.childOneContainer}
          childTwoContainer={section.childTwoContainer}
          childOne={
            <div>
              {section.isButton ? (
                <button className="bg-[#006EFE] text-[#FFFFFF] rounded-[10px] px-4 py-2 font-semibold hidden md:block">
                  {section.BlueButtonText}
                </button>
              ) : (
                ""
              )}
              <TextTitleDescription
                title={section.headlineText}
                description={section.descriptionText}
                titleClass={`2lg:text-[35px] ${section.TextTitleClass}`}
              />
              <div className="flex">
                <div className="2lg:w-[180px]">
                  <img src={section.AppStoreLogo} />
                </div>
                <div className="2lg:w-[180px]">
                  <img src={section.GooglePayLogo} />
                </div>
              </div>
            </div>
          }
          childTwo={
            <div>
              <img src={section.PageImage} alt="okk" />
            </div>
          }
        />
      ))}
    </div>
  );
};

export default DownloadPageSection;
