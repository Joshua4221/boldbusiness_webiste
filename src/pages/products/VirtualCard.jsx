import React from "react";
import PageWrapper from "../../component/common/containers/PageWrapper";
import VirtualCardFirstSection from "../../component/ui_sections/virtualCard/VirtualCardFirstSection";
import VirtualCardDoubleSections from "../../component/ui_sections/virtualCard/VirtualCardDoubleSections";
import VirtualCardBannerSection from "../../component/ui_sections/virtualCard/VirtualCardBannerSection";
import FAQSection from "../../component/ui_sections/loan/FAQSection";
import TextCenteredBanner from "../../component/common/bottom_banners/TextCenteredBanner";
import { VirtualCardsPage } from "../../component/common/hero_sections/VirtualCardHeroSection";

const VirtualCard = () => {
  return (
    <div>
      <PageWrapper navType={"darkHero"}>
        <VirtualCardsPage />
        <VirtualCardFirstSection />
        <VirtualCardDoubleSections />
        <VirtualCardBannerSection />
        <FAQSection />
        <TextCenteredBanner />
      </PageWrapper>
    </div>
  );
};

export default VirtualCard;
