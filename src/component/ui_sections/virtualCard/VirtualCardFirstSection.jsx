import React from "react";
import { TripleChildContainer } from "../../common/containers/TripleChildContainer";
import { IMAGES } from "../../../constant/Images";

const VirtualCardFirstSection = () => {
  return (
    <div>
      <TripleChildContainer
        TripleChildContainerClass={"bg-[#FFFFFF]"}
        tripleChildInnerContainerClass={"mx-auto"}
        firstChildContainer={"lg:w-[25%]"}
        secondChildContainer={"lg:w-[25%]"}
        thirdChildContainer={"lg:w-[25%]"}
        threeChildContainerClass={
          "flex flex-wrap lg:justify-center lg:items-center lg:gap-0 p-6  mx-auto space-y-6 md:space-x-6"
        }
        headlineChild={null}
        firstChild={
          <div className="">
            <img src={IMAGES.VirtualCard1stSecIMG1} />
          </div>
        }
        secondChild={
          <div>
            <img src={IMAGES.VirtualCard1stSecIMG2} />
          </div>
        }
        thrirdChild={
          <div>
            <img src={IMAGES.VirtualCard1stSecIMG3} />
          </div>
        }
      />
    </div>
  );
};

export default VirtualCardFirstSection;
