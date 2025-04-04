import React from "react";
import PageWrapper from "../../component/common/containers/PageWrapper";
import PressPageHeroSection from "../../component/common/hero_sections/PressPageHeroSection";
import SearchSection from "../../component/ui_sections/career/SearchJobRolesSection";
import SearchRolesSection from "../../component/ui_sections/career/SearchRolesSection";
import TalentShowCaseSection from "../../component/ui_sections/career/TalentShowCaseSection";
import DiscorverEmergingMasterSectio from "../../component/ui_sections/career/DiscorverEmergingMasterSectio";
import PerksOnCareerSection from "../../component/ui_sections/career/PerksOnCareerSection";
import EmployeesReviewSection from "../../component/ui_sections/career/EmployeesReviewSection";
import ItemCenteredBanner2Two from "../../component/common/bottom_banners/ItemCenteredBanner2Two";

const Career = () => {
  return (
    <div>
      <>
        <PageWrapper>
          <PressPageHeroSection
            PressHeroContainerClass="bg-[white]"
            heading="Looking For That Dream Job?"
            description="Find your dream job here. Explore, apply, succeed"
          />
          {/* <SearchRolesSection /> */}
          <SearchSection />
          <TalentShowCaseSection />
          <DiscorverEmergingMasterSectio />
          <PerksOnCareerSection />
          <EmployeesReviewSection />
          <ItemCenteredBanner2Two />
        </PageWrapper>
      </>
    </div>
  );
};

export default Career;
