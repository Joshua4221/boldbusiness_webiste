import React from "react";
import TextTitleDescription from "../../widgets/text_elements/TextTitleDescription";
import { IMAGES } from "../../../constant/Images";

const ManageAffairSection = ({}) => {
  const BusinessManagementAffairs = [
    {
      textTitle: "Bulk Transfer",
      TestDescription:
        "Many desktop publishing packages and web page editors now use for them.",
      Icon: IMAGES.BulkTfIcon,
      containerClass: "",
    },

    {
      textTitle: "Pay Salaries",
      TestDescription:
        "Many desktop publishing packages and web page editors now use for them.",
      Icon: IMAGES.PaySalaryIcon,
      containerClass: "",
    },

    {
      textTitle: "Business Verification",
      TestDescription:
        "Many desktop publishing packages and web page editors now use for them.",
      Icon: IMAGES.BusinessVerifcationIcon,
      containerClass: "",
    },
  ];

  return (
    <div className=" bg-[#FAFAFA]">
      <div className="container lg:px-[8rem] px-4 py-[4rem] ">
        {/* header sectio */}
        <div className=" flex justify-center flex-col items-center  mx-[auto]">
          <p className="text-[#2B59FF] font-[bold]">kEY FEATURES</p>
          <TextTitleDescription
            title="Bold Business Manager Eases Your Affairs"
            titleClass={
              "text-center mx-auto w-[60%] lg:w-[70%] 2lg:text-[35px]"
            }
            description=""
          />
        </div>

        {/* card sectios */}
        <div className=" flex flex-wrap justify-center items-center gap-8 mx-auto ">
          <div className="2lg:w-[40%] lg:w-[40%]">
            {BusinessManagementAffairs.map((businessSec, index) => (
              <div className="flex gap-3" key={index}>
                <div className="">
                  <img src={businessSec.Icon} />
                </div>

                <div className={`textContainer`}>
                  <TextTitleDescription
                    titleClass={"2lg:text-[21px]"}
                    textDescriptionClass={"lg:text-[16px] text-[#12141D]"}
                    title={businessSec.textTitle}
                    description={businessSec.TestDescription}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="w-[40%] hidden md:block">
            <img src={IMAGES.BulkTransferCard} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageAffairSection;
