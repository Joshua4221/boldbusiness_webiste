import React from "react";
import PageWrapper from "../../component/common/containers/PageWrapper";
import ColumnBasedHeroSecComp from "../../component/common/hero_sections/ColumnBasedHeroSecComp";
import { VirtualBankFirstSection } from "../../component/ui_sections/virtual_banking/VirtualBankFirstSection";
import VirtualBankingSecondSection from "../../component/ui_sections/virtual_banking/VirtualBankingSecondSection";
import VirtualBankThirdSection from "../../component/ui_sections/virtual_banking/VirtualBankThirdSection";
import FAQSection from "../../component/ui_sections/loan/FAQSection";
// import FlexedTextImageHeroComp from "../../component/common/hero_sections/FlexedTextImageHeroComp";

const VirtualBankAccounts = () => {
  return (
    <>
      <PageWrapper navType={"darkHero"}>
        <ColumnBasedHeroSecComp />
        <VirtualBankFirstSection />
        <VirtualBankingSecondSection />
        <VirtualBankThirdSection />
        <FAQSection />
      </PageWrapper>
    </>
  );
};

export default VirtualBankAccounts;
