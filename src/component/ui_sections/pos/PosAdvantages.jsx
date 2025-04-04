import React from "react";
import TextTitleDescription from "../../widgets/text_elements/TextTitleDescription";
import { IMAGES } from "../../../constant/Images";
import { GetBoldButton } from "../../widgets/buttons/GetBoldButton";

const PosAdvantages = () => {
  const PosAdvantage = [
    {
      PosIcon: IMAGES.StreamlinedIcon,
      PosTopic: "Streamlined Payment Processing",
      PosDescription:
        "A POS (Point of Sale) system streamlines payments, accepting various methods, and reduces wait times, enhancing customer experience.",
    },

    {
      PosIcon: IMAGES.ImprovedInventoryIcon,
      PosTopic: "Improved Inventory Management",
      PosDescription:
        "A POS system automates inventory tracking, updating stock levels in real-time to prevent overstocking and stockouts.",
    },

    {
      PosIcon: IMAGES.EnhanceSalesIcon,
      PosTopic: "Enhanced Sales Tracking and Reporting",
      PosDescription:
        "POS systems provide real-time sales insights, tracking transactions to inform business decisions.",
    },

    {
      PosIcon: IMAGES.MultiLocationIcon,
      PosTopic: "Multi-Location Management",
      PosDescription:
        "A POS system provides centralized management across multiple locations for streamlined operations.",
    },
  ];

  return (
    <div className="lg:py-[100px] py-[50px]">
      <div className="container lg:px-[6rem]">
        <div className="lg:text-center lg:mx-auto  2lg:w-[50%] mx-auto w-[60%] text-[35px]">
          <TextTitleDescription
            title="Few Advantages of our Point Of Sale Device"
            description=""
            titleClass={"text-center 2lg:text-[35px] "}
          />
        </div>
        <div className="flex flex-wrap justify-between max-w-5xl mx-auto ">
          {PosAdvantage.map((advantage, index) => (
            <div
              key={index}
              className="flex w-full 2lg:mb-8 md:w-[48%] mb-6 px-5 md:mb-0 items-start space-x-4"
            >
              <img src={advantage.PosIcon} />

              <div>
                <h3 className="text-[#000000] font-bold text-[18px] font-sans">
                  {advantage.PosTopic}
                </h3>
                <p className="text-[#52525B] text-[14px] font-normal">
                  {advantage.PosDescription}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <GetBoldButton
            children={"Get Bold"}
            className={
              "bg-[#006EFE] text-[white] w-[180px]  lg:w-[150px] md:w-[160px]  px-4 py-2 rounded-md"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default PosAdvantages;
