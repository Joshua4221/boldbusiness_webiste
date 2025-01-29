import React from "react";

const ThirdSectionDoubleChildContainer = ({
  thirdSecMainContainerClass,
  thirdSecInnerContainerClass,
  thirdSecChild1Class,
  thirdSecChild1,
  thirdSecChild2Class,
  thirdSecChild2,
}) => {
  return (
    <div className={`thirdSecMainContainer  ${thirdSecMainContainerClass}`}>
      <div
        className={`thirdSecInnerContainer w-[90%] flex flex-wrap items-center justify-between mx-auto ${thirdSecInnerContainerClass}`}
      >
        <div className={`thirdSec-Child1 lg:w-[46%] ${thirdSecChild1Class}`}>
          {thirdSecChild1}
        </div>
        <div className={`thirdSec-Child2 lg:w-[46%] ${thirdSecChild2Class}`}>
          {thirdSecChild2}
        </div>
      </div>
    </div>
  );
};

export default ThirdSectionDoubleChildContainer;
