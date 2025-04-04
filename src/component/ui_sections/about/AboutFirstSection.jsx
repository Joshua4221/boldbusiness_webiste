import React from "react";
import { IMAGES } from "../../../constant/Images";
import TextTitleDescription from "../../widgets/text_elements/TextTitleDescription";

const AboutFirstSection = () => {
  return (
    <div className="lg:py-[100px] py-12">
      <section className=" container lg:px-[6rem] py-12 md:py-20 bg-white text-center">
        <TextTitleDescription
          title="Why Choose Bold?"
          description="Unlock your true potential and discover a world of opportunities that align with your skills, interests, and aspirations."
          titleClass={
            "text-3xl md:text-4xl w-[70%] mx-auto font-bold text-[#1E242C]"
          }
          textDescriptionClass={"text-[#414D60] w-[60%] mt-3 max-w-lg mx-auto"}
        />

        <div className="relative mt-12 flex flex-col gap-2 md:flex-row items-center justify-center">
          {/* Left Section */}
          <div>
            <img src={IMAGES.AboutScantoPayImg} alt="img" />
          </div>

          {/* Center Image (Visible only on Desktop) */}
          <div className=" rounded-lg hidden md:block">
            <img src={IMAGES.AbouUsGloryIMG} alt="User" className="" />
          </div>

          {/* Right Section */}
          <div>
            <img src={IMAGES.AboutNewopportunityImg} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutFirstSection;
