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
    <div
      className={` 2lg:py-[100px] lg:py-[80px] py-[60px] ${mainContainerClass}`}
    >
      <div className="container lg:px-[6rem] px-[3rem] ">
        <div
          className={` flex flex-wrap items-center justify-between mx-auto gap-4 ${innerContainerClass} `}
        >
          <div className={`child-one lg:w-[45%] w-[90%] ${childOneContainer}`}>
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
