import React from "react";

const DoubleChildContainer = ({
  childOne,
  childTwo,
  childOneContainer,
  childTwoContainer,
  innerContainerClass,
  mainContainerClass,
}) => {
  return (
    <div className={`mainContainer ${mainContainerClass}`}>
      <div
        className={`innerContainer w-[90%] flex flex-wrap items-center justify-between mx-auto ${innerContainerClass} `}
      >
        <div className={`child-one lg:w-[46%] ${childOneContainer}`}>
          {childOne}
        </div>
        <div className={`child-two lg:w-[46%] ${childTwoContainer}`}>
          {childTwo}
        </div>
      </div>
    </div>
  );
};

export default DoubleChildContainer;
