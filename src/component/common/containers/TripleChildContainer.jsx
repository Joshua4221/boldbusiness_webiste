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
      <div
        className={`tripleChildInnerContainer max-w-7xl mx-auto ${tripleChildInnerContainerClass}`}
      >
        <div className={`headlineContainer py-5 ${headlineContainerClass}`}>
          {headlineChild}
        </div>
        <div
          className={`threeChildContainer flex flex-wrap  justify-evenly mx-auto ${threeChildContainerClass}`}
        >
          <div className={`firstChild ${firstChildContainer}`}>
            {firstChild}
          </div>
          <div className={`secondChild ${secondChildContainer}`}>
            {secondChild}
          </div>
          <div className={`thirdChild ${thirdChildContainer}`}>
            {thrirdChild}
          </div>
        </div>
      </div>
    </div>
  );
};
