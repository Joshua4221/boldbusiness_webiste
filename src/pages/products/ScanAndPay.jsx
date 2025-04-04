import PageWrapper from "../../component/common/containers/PageWrapper";

import React from "react";
import { ScanAndPayHerosection } from "../../component/ui_sections/scanAndPay/ScanAndPayHerosection";
import MiniTripleSection from "../../component/ui_sections/loan/MiniTripleSection";
import TripleCardContainer from "../../component/ui_sections/scanAndPay/TripleCardContainer";
import DoubleChildThreeArraySection from "../../component/ui_sections/scanAndPay/DoubleChildThreeArraySection";
import FAQSection from "../../component/ui_sections/businesses/FAQSection";
import TextCenteredBanner from "../../component/common/bottom_banners/TextCenteredBanner";

const ScanAndPay = () => {
  return (
    <>
      <PageWrapper>
        <ScanAndPayHerosection />
        <MiniTripleSection mainContainerClass="bg-[#AFC3EF33] p-8" />
        <TripleCardContainer />
        <DoubleChildThreeArraySection />
        <FAQSection />
        <TextCenteredBanner />
      </PageWrapper>
    </>
  );
};

export default ScanAndPay;
