import React from "react";
import DoubleChildContainer from "../../common/containers/DoubleChildContainer";
import TextTitleDescription from "../../widgets/text_elements/TextTitleDescription";
import LightText from "../../widgets/text_elements/LightText";
import { IMAGES } from "../../../constant/Images";

const TrackLoanSection = ({
  trackImage = IMAGES.TrackLoanImg,
  theMainContainerClass = "bg-[#18181B] py-[100px]",
  titleTextClass,
}) => {
  return (
    <div>
      <DoubleChildContainer
        mainContainerClass={theMainContainerClass}
        childOne={
          <div>
            <TextTitleDescription
              title={
                "Effectively track real-time and updates from all loan payments"
              }
              description=""
              titleClass={`text-[#FFFFFF] 2lg:text-[35px] 2lg:w-[80%] ${titleTextClass}`}
            />
            <LightText
              text={
                "Designed with a simple, user-friendly interface, nTask is a 7-in-1 project management tool that is ideal for both small and large teams. You can create multiple workspaces."
              }
              classStyle={"text-[#A1A1AA] lg:w-[65%]"}
            />
            <div className="flex gap-6">
              <div className="flex justify-center gap-3">
                <div>
                  <TextTitleDescription
                    title={"12K+"}
                    description=""
                    titleClass={"text-[#FFFFFF]"}
                  />
                </div>
                <div className=" lg:pt-3">
                  <LightText
                    text={"loren ipsium"}
                    classStyle={"text-[#A1A1AA] lg:w-[20px]"}
                  />
                </div>
              </div>
              <div className="flex gap-3">
                <div>
                  <TextTitleDescription
                    title={"1947"}
                    description=""
                    titleClass={"text-[#FFFFFF]"}
                  />
                </div>
                <div className=" lg:pt-3">
                  <LightText
                    text={"loren ipsium"}
                    classStyle={"text-[#A1A1AA] lg:w-[20px]"}
                  />
                </div>
              </div>
            </div>
          </div>
        }
        childTwo={
          <div>
            <img src={trackImage} />
          </div>
        }
      />
    </div>
  );
};

export default TrackLoanSection;
