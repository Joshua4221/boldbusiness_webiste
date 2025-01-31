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
    <div className={` ${mainContainerClass}`}>
      <div className="container lg:px-[6rem] px-[3rem] ">
        <div
          className={` flex flex-wrap items-center justify-between mx-auto ${innerContainerClass} `}
        >
          <div className={`child-one lg:w-[45%] ${childOneContainer}`}>
            {childOne}
          </div>
          <div className={`child-two lg:w-[45%] ${childTwoContainer}`}>
            {childTwo}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoubleChildContainer;
