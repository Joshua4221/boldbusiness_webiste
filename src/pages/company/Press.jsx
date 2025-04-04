import React from "react";
import PageWrapper from "../../component/common/containers/PageWrapper";
import PressPageHeroSection from "../../component/common/hero_sections/PressPageHeroSection";
import { TripleChildContainer } from "../../component/common/containers/TripleChildContainer";
import TextTitleDescription from "../../component/widgets/text_elements/TextTitleDescription";
import LightText from "../../component/widgets/text_elements/LightText";
import { IMAGES } from "../../constant/Images";
import ItemCenteredBanner2Two from "../../component/common/bottom_banners/ItemCenteredBanner2Two";
import PressRealeaseSection from "../../component/ui_sections/press/PressRealeaseSection";

const Press = () => {
  return (
    <div>
      <>
        <PageWrapper>
          <PressPageHeroSection />
          <TripleChildContainer
            TripleChildContainerClass={"bg-[#FFFFFF]"}
            headlineChild={
              <div>
                <TextTitleDescription
                  title="Bold in the news"
                  description=""
                  titleClass={
                    "text-center mx-auto 2lg:text-[35px] font-semibold "
                  }
                />
                <div className="flex justify-between">
                  <div>
                    <TextTitleDescription
                      title=""
                      description="Year 2024"
                      textDescriptionClass={"font-semibold font-Inter"}
                    />
                    <LightText text="Key highlights and updates on public safety, fraud prevention, and police initiatives throughout the year." />
                  </div>

                  <div className=" flex gap-2 border-[#E5E7EF] border-[1px]">
                    <div className=" 2lg:h-[10px] border-[1px]">
                      <p className="text-[14px] text-[#2A2E34] font-medium font-Inter">
                        Year 2024
                      </p>
                    </div>
                    <div>
                      <img
                        src={IMAGES.vectorArrowDown}
                        alt="?"
                        className="w-[10px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            }
            firstChild={
              <div>
                <img src={IMAGES.PhysicalCardImg} />
              </div>
            }
            secondChild={
              <div>
                <img src={IMAGES.BoldVirtualCardSecImg} />
              </div>
            }
            thrirdChild={
              <div>
                <img src={IMAGES.PizzaDayImg} />
              </div>
            }
          />
          <TripleChildContainer
            TripleChildContainerClass={"bg-[#FFFFFF]"}
            firstChild={
              <>
                <img src={IMAGES.BoldspaceImg} />
              </>
            }
            secondChild={
              <>
                <img src={IMAGES.CustomerReactionImg} />
              </>
            }
            thrirdChild={
              <>
                <img src={IMAGES.PoliceServiceImg} />
              </>
            }
          />
          <PressRealeaseSection />
          <ItemCenteredBanner2Two />
        </PageWrapper>
      </>
    </div>
  );
};

export default Press;
