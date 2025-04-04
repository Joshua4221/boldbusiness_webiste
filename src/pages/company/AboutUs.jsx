import React from "react";
import PageWrapper from "../../component/common/containers/PageWrapper";
import IncredibleClientSection from "../../component/ui_sections/about/IncredibleClientSection";
import AboutFirstSection from "../../component/ui_sections/about/AboutFirstSection";
import ItemCenteredBanner2Two from "../../component/common/bottom_banners/ItemCenteredBanner2Two";
import { AboutLastSection } from "../../component/ui_sections/about/AboutLastSection";

const AboutUs = () => {
  return (
    <div>
      <>
        <PageWrapper>
          <AboutFirstSection />
          <IncredibleClientSection />
          <AboutLastSection />
          <ItemCenteredBanner2Two />
        </PageWrapper>
      </>
    </div>
  );
};

export default AboutUs;
