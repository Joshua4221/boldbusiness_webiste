import React from "react";
import PageWrapper from "../../component/common/containers/PageWrapper";
import FlexedTextImageHeroComp from "../../component/common/hero_sections/FlexedTextImageHeroComp";
import { IMAGES } from "../../constant/Images";
import LightText from "../../component/widgets/text_elements/LightText";
import MiniTripleSection from "../../component/ui_sections/loan/MiniTripleSection";
import CreditScoreSection from "../../component/ui_sections/loan/CreditScoreSection";
import TrackLoanSection from "../../component/ui_sections/loan/TrackLoanSection";
import FastTxFeauture from "../../component/ui_sections/loan/FastTxFeauture";
import EasyLoanApplication from "../../component/ui_sections/loan/EasyLoanApplication";
import FAQSection from "../../component/ui_sections/loan/FAQSection";
import TextCenteredBanner from "../../component/common/bottom_banners/TextCenteredBanner";

const Loan = () => {
  return (
    <>
      <PageWrapper>
        <FlexedTextImageHeroComp
          heroTitle="Simplified and Quick Access to Loans"
          image={IMAGES.NewSmileHumanImg}
          imgBox={"xmd:w-full smd:w-[90%] w-full pt-20"}
          imgstyle={"w-[70%] h-[auto]"}
          mainContainer={"bg-[#D1EDF5]"}
          main={"py-[6rem]"}
          heroDescription={
            <>
              <div className=" flex flex-col gap-2">
                <div className="flex gap-1">
                  <img src={IMAGES.checkMarkIcon} />
                  <LightText text="Online Applications & Minimal Paperwork" />
                </div>
                <div className="flex gap-1">
                  <img src={IMAGES.checkMarkIcon} />
                  <LightText text="Flexible Eligibility & Quick Disbursement" />
                </div>
              </div>
            </>
          }
        />
        <MiniTripleSection />
        <CreditScoreSection />
        <TrackLoanSection />
        <FastTxFeauture />
        <EasyLoanApplication />
        <FAQSection />
        <TextCenteredBanner />
      </PageWrapper>
    </> 
  );
};

export default Loan;
