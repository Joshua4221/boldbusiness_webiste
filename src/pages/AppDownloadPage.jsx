import React from "react";
import PageWrapper from "../component/common/containers/PageWrapper";
import ItemCenteredBanner2Two from "../component/common/bottom_banners/ItemCenteredBanner2Two";
import DownloadPageSection from "../component/ui_sections/download/DownloadPageSection";

const AppDownloadPage = () => {
  return (
    <div>
      <PageWrapper>
        <DownloadPageSection />
        <ItemCenteredBanner2Two />
      </PageWrapper>
    </div>
  );
};

export default AppDownloadPage;
