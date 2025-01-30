import React, { useLayoutEffect, useState } from "react";
import TextTitleDescription from "../../widgets/text_elements/TextTitleDescription";
import { GetBoldButton } from "../../widgets/buttons/GetBoldButton";
import { IMAGES } from "../../../constant/Images";
// import LigthText from "../../widgets/text_elements/LigthText";
import LightText from "../../widgets/text_elements/LightText";
import { HeroStylesDiv } from "../../../ExtraStyles/HeroStyles";

const FlexedTextImageHeroComp = () => {
  const [windowHeight, setWindowHeight] = useState(0);

  useLayoutEffect(() => {
    setWindowHeight(window.innerHeight);
    // Add event listener for resize (optional)
    window.addEventListener("resize", () => {
      setWindowHeight(window.innerHeight);
    });
    return () => window.removeEventListener("resize", () => {}); // Cleanup function
  }, []);

  console.log(windowHeight, "windowHeight");

  return (
    <>
      <HeroStylesDiv
        height={windowHeight}
        className="bg-custom-gradient w-full"
      >
        <div className="container h-full lg:px-[6rem] px-[3rem] xmd:pt-0 pt-[7rem] xmd:py-0 py-[3rem] xmd:relative flex xmd:flex-row flex-col justify-start items-center">
          <div className="w-full">
            <div className="text-container flex flex-col gap-[20px] xmd:w-[45%] xsm:w-[65%] w-full">
              <TextTitleDescription
                title="Accept In-Store Payment Across Africa"
                description="With Bold Business App, You’ll be able to make Digital Payments From Your Shop through Mobile Money, Bank Transfer & Card Payments."
              />
              <GetBoldButton
                className="bg-black w-[40%]  lg:w-[30%] text-white px-4 py-2 rounded-md"
                children={"Get started"}
              />
              <LightText text="No Card Required . Pay Anytime" />
            </div>

            <div className="xmd:w-[55%] xsm:w-[35%] w-0"></div>
          </div>

          <div className="image-container xmd:absolute relative xmd:top-[-1rem]  2lg:right-0 xmd:right-[-1.5rem] xl:w-[55%] xlg:w-[60%] 2lg:w-[65%] lg:w-[70%] xmd:w-[77%] w-full xmd:h-[unset] md:h-[28rem] sm:h-[26rem] sxm:h-[23rem] xs:h-[21rem] mxs:h-[17rem] h-[13rem]">
            <div className="xmd:w-full smd:w-[90%] w-full xmd:absolute-[unset] absolute xmd:top-0 md:top-[-9rem] xsm:top-[-7rem] sm:top-[-4rem] sxm:top-[-2rem] xmd:right-0 sxm:right-[-1rem]">
              <img className="w-full h-[auto]" src={IMAGES.LaughWomanIMG} />
            </div>
          </div>
        </div>
      </HeroStylesDiv>
    </>
  );
};

export default FlexedTextImageHeroComp;
