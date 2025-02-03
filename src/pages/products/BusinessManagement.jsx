import React from "react";
import PageWrapper from "../../component/common/containers/PageWrapper";
import FlexedTextImageHeroComp from "../../component/common/hero_sections/FlexedTextImageHeroComp";

const BusinessManagement = () => {
  return (
    <div>
      <>
        <PageWrapper>
          <FlexedTextImageHeroComp
            heroTitle="The all in one Business Manager you need"
            heroDescription="Send invoices, receive POS payments, pay business bills, make bulk transfers, and free up time for the rest of your life."
          />
        </PageWrapper>
      </>
    </div>
  );
};

export default BusinessManagement;
