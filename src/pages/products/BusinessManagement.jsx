import React from "react";
import PageWrapper from "../../component/common/containers/PageWrapper";
import { IMAGES } from "../../constant/Images";
import { TripleMiniSection } from "../../component/ui_sections/businesses/TripleMiniSection";
import { TripleChildContainer } from "../../component/common/containers/TripleChildContainer";
import ImageTextCard from "../../component/widgets/cards/ImageTextCard";
import CashMonitorSection from "../../component/ui_sections/businesses/CashMonitorSection";
import ManageAffairSection from "../../component/ui_sections/businesses/ManageAffairSection";
import ScanAndPaySection from "../../component/ui_sections/businesses/ScanAndPaySection";
import FAQSection from "../../component/ui_sections/businesses/FAQSection";
import TextCenteredBanner from "../../component/common/bottom_banners/TextCenteredBanner";
import DoubleChildContainer from "../../component/common/containers/DoubleChildContainer";
import { GetBoldButton } from "../../component/widgets/buttons/GetBoldButton";
import TextTitleDescription from "../../component/widgets/text_elements/TextTitleDescription";

const BusinessManagement = () => {
  return (
    <div>
      <>
        <PageWrapper>
          <DoubleChildContainer
            childTwoContainer={"w-[100%] lg:w-[45%]"}
            mainContainerClass={"2lg:pt-[120px] lg:pt-[100px] pt-[120px]"}
            childOne={
              <div>
                <TextTitleDescription
                  title="The all in one Business Manager you need"
                  description="Send invoices, receive POS payments, pay business bills, make bulk transfers, and free up time for the rest of your life."
                />
                <GetBoldButton
                  children={"Get Bold"}
                  className={
                    "bg-[#101828] text-[white] w-[40%]  lg:w-[30%] md:w-[35%] px-4 py-2 rounded-md"
                  }
                />
              </div>
            }
            childTwo={
              <div className="w-[100%]">
                <img
                  src={IMAGES.BusinessGroupImg}
                  className="hidden md:block"
                />
                <img
                  src={IMAGES.BusinessGroupImg2}
                  className="block md:hidden  w-[100%]"
                />
              </div>
            }
          />
          <TripleMiniSection />
          <TripleChildContainer
            TripleChildContainerClass={"bg-[#FAFAFA]"}
            headlineContainerClass={"lg:mx-auto lg:text-center lg:w-[70%]"}
            headlineChild={
              <h2 className="text-center text-3xl md:text-4xl capitalize font-bold text-[#12141D]">
                Simple interface through which transactions can be easily
                managed
              </h2>
            }
            firstChild={
              <div className="lg:w-[90%] mx-auto">
                <ImageTextCard
                  innerContainer={"flex flex-col gap-[10px]"}
                  image={IMAGES.firstTxInterfaceImg}
                  title={"Transaction History"}
                  description={
                    "Customer activity can be easily tracked with one click"
                  }
                  titleClassStyle={
                    "text-[#12141D] font-[400] text-center 2lg:text-[20px]"
                  }
                  descriptionClass={"text-[#12141D] text-center"}
                />
              </div>
            }
            secondChild={
              <div className="lg:w-[90%] mx-auto">
                <ImageTextCard
                  titleClassStyle={
                    "text-[#12141D] font-[400] text-center 2lg:text-[20px]"
                  }
                  descriptionClass={"text-[#12141D] text-center"}
                  image={IMAGES.SecondtransactioninterfaceImg}
                  title={"Get Feedbacks"}
                  description={
                    "A bar code is generated for you to pay for your expenses"
                  }
                />
              </div>
            }
            thrirdChild={
              <div className="lg:w-[90%] mx-auto">
                <ImageTextCard
                  image={IMAGES.thirdTxInterfaceImg}
                  title={"Swift Transaction in Seconds"}
                  description={"The results show how much work has been done"}
                  titleClassStyle={
                    "text-[#12141D] font-[400] text-center 2lg:text-[20px]"
                  }
                  descriptionClass={"text-[#12141D] text-center"}
                />
              </div>
            }
          />
          <CashMonitorSection />
          <ManageAffairSection />
          <ScanAndPaySection />
          <FAQSection />
          <TextCenteredBanner />
        </PageWrapper>
      </>
    </div>
  );
};

export default BusinessManagement;
