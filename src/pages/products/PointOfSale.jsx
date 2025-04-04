import React from "react";
import PageWrapper from "../../component/common/containers/PageWrapper";
import FlexedTextImageHeroComp from "../../component/common/hero_sections/FlexedTextImageHeroComp";
import { IMAGES } from "../../constant/Images";
import { TripleMiniSection } from "../../component/ui_sections/businesses/TripleMiniSection";
import PosAdvantages from "../../component/ui_sections/pos/PosAdvantages";
import TrackLoanSection from "../../component/ui_sections/loan/TrackLoanSection";
import DoubleChildContainer from "../../component/common/containers/DoubleChildContainer";
import TextTitleDescription from "../../component/widgets/text_elements/TextTitleDescription";
import LightText from "../../component/widgets/text_elements/LightText";
import { PosAquirementSection } from "../../component/ui_sections/pos/PosAquirementSection";
import FAQSection from "../../component/ui_sections/businesses/FAQSection";
import TextCenteredBanner from "../../component/common/bottom_banners/TextCenteredBanner";
import { GetBoldButton } from "../../component/widgets/buttons/GetBoldButton";

const PointOfSale = () => {
  return (
    <>
      <PageWrapper>
        <DoubleChildContainer
          mainContainerClass={"2lg:pt-[120px] lg:pt-[100px] pt-[120px]"}
          childOne={
            <div>
              <TextTitleDescription
                title="Point of Sale terminals for all businesses"
                description="Simple email marketing is clean and user-friendly dashboard software that helps you achieve business goals together. Using software makes it easier to create."
              />
              <GetBoldButton
                children={"Get Bold"}
                className={
                  "bg-[#006EFE] text-[white] w-[40%]  lg:w-[30%] md:w-[35%] px-4 py-2 rounded-md"
                }
              />
            </div>
          }
          childTwo={
            <div>
              <img src={IMAGES.WomanHoldPos} />
            </div>
          }
        />
        <TripleMiniSection
          mainMiniTripleChildContainer={"bg-[#EDFEDD7A]"}
          titleClassStyle={"text-[black] 2lg:text-[35px]"}
          textDescriptionClassStyle={"text-[black]"}
        />
        <PosAdvantages />
        <DoubleChildContainer
          mainContainerClass={"bg-[#EAF4FF]"}
          childOne={
            <div>
              <TextTitleDescription
                title={"Track updates from all loan payments"}
                description=""
                titleClass={`text-[#18181B] 2lg:text-[35px] 2lg:w-[80%]`}
              />
              <LightText
                text={
                  "Designed with a simple, user-friendly interface, nTask is a 7-in-1 project management tool that is ideal for both small and large teams. You can create multiple workspaces."
                }
                classStyle={"text-[#18181B] lg:w-[65%]"}
              />
              <div className="flex gap-6">
                <div className="flex justify-center gap-3">
                  <div>
                    <TextTitleDescription
                      title={"12K+"}
                      description=""
                      titleClass={"text-[#18181B]"}
                    />
                  </div>
                  <div className=" lg:pt-3">
                    <LightText
                      text={"loren ipsium"}
                      classStyle={"text-[#18181B] lg:w-[20px]"}
                    />
                  </div>
                </div>
                <div className="flex gap-3">
                  <div>
                    <TextTitleDescription
                      title={"1947"}
                      description=""
                      titleClass={"text-[#18181B]"}
                    />
                  </div>
                  <div className=" lg:pt-3">
                    <LightText
                      text={"loren ipsium"}
                      classStyle={"text-[#18181B] lg:w-[20px]"}
                    />
                  </div>
                </div>
              </div>
            </div>
          }
          childTwo={
            <div>
              <img src={IMAGES.PosLoanTrackImage} />
            </div>
          }
        />
        <DoubleChildContainer
          mainContainerClass={""}
          childOne={
            <div>
              <img src={IMAGES.PosImage} />
            </div>
          }
          childTwo={
            <div>
              <TextTitleDescription
                title="Set Savings Target easily with our App"
                titleClass={"2lg:text-[35px] 2lg:w-[70%]"}
                description="Tax specialists assist in preparing quarterly and annual tax provisions and performing tax accounting duties."
                textDescriptionClass={"2lg:w-[75%] text-[#12141D] font-bold"}
              />

              <LightText
                text="Tax specialists assist in preparing quarterly and annual tax provisions and performing tax accounting duties."
                classStyle={"2lg:w-[70%]"}
              />
            </div>
          }
        />
        <PosAquirementSection />
        <FAQSection />
        <TextCenteredBanner />
      </PageWrapper>
    </>
  );
};

export default PointOfSale;
