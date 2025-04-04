import React from "react";
import PageWrapper from "../component/common/containers/PageWrapper";
import ContactFAQSection from "../component/ui_sections/contact/ContactFAQSection";
import QuickResponseSection from "../component/ui_sections/contact/QuickResponseSection";
import ItemCenteredBanner2Two from "../component/common/bottom_banners/ItemCenteredBanner2Two";

const Contact = () => {
  return (
    <div>
      <>
        <PageWrapper>
          <div className=" container flex flex-col justify-center items-center text-center pt-[100px] px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Connect with Our <span className="block sm:inline">Team</span>
            </h1>
            <p className="text-gray-600 text-sm sm:text-base mt-2">
              Just ask and we are always ready to answer.
            </p>
          </div>
          <ContactFAQSection />
          <QuickResponseSection />
          <ItemCenteredBanner2Two />
        </PageWrapper>
      </>
    </div>
  );
};

export default Contact;
