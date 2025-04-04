import React from "react";
import { TripleChildContainer } from "../../common/containers/TripleChildContainer";
import TextTitleDescription from "../../widgets/text_elements/TextTitleDescription";
import { IMAGES } from "../../../constant/Images";

const EmployeesReviewSection = () => {
  return (
    <div>
      <TripleChildContainer
        TripleChildContainerClass={"bg-[white]"}
        headlineChild={
          <TextTitleDescription
            title="See what our employees have to say"
            description=""
          />
        }
        firstChild={
          <div>
            <img src={IMAGES.Employee1Img} />
          </div>
        }
        secondChild={
          <div>
            <img src={IMAGES.Employee2Img} />
          </div>
        }
        thrirdChild={
          <div>
            <img src={IMAGES.Employee3Img} />
          </div>
        }
      />
    </div>
  );
};

export default EmployeesReviewSection;
