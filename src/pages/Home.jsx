import React from "react";
import PageWrapper from "../component/common/containers/PageWrapper";
import FlexedTextImageHeroComp from "../component/common/hero_sections/FlexedTextImageHeroComp";
import FirstSection from "../component/ui_sections/home/FirstSection";
import SecondSection from "../component/ui_sections/home/SecondSection";
import ThirdSection from "../component/ui_sections/home/ThirdSection";
import TextCenteredBanner from "../component/common/bottom_banners/TextCenteredBanner";

const Home = () => {
  return (
    <>
      <PageWrapper>
        <FlexedTextImageHeroComp />
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <TextCenteredBanner />
      </PageWrapper>
    </>
  );
};

export default Home;
