import React from "react";

export const TripleChildContainer = ({
  TripleChildContainerClass,
  tripleChildInnerContainerClass,
  headlineChild,
  headlineContainerClass,
  threeChildContainerClass,
  firstChildContainer,
  firstChild,
  secondChild,
  secondChildContainer,
  thrirdChild,
  thirdChildContainer,
}) => {
  return (
    <div
      className={`tripleChildContainer bg-[#0F172A] py-8 ${TripleChildContainerClass}`}
    >
      <div className="container lg:px-[6rem] px-[3rem]">
        <div
          className={`tripleChildInnerContainer  mx-auto ${tripleChildInnerContainerClass}`}
        >
          <div className={`headlineContainer py-5 ${headlineContainerClass}`}>
            {headlineChild}
          </div>
          <div
            className={`threeChildContainer flex flex-wrap  lg:justify-between mx-auto ${threeChildContainerClass}`}
          >
            <div className={`firstChild lg:w-[30%] ${firstChildContainer}`}>
              {firstChild}
            </div>
            <div className={`secondChild lg:w-[30%] ${secondChildContainer}`}>
              {secondChild}
            </div>
            <div className={`thirdChild lg:w-[30%] ${thirdChildContainer}`}>
              {thrirdChild}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
