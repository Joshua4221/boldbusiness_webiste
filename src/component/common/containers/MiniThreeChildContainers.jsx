import React from "react";

const MiniThreeChildContainers = ({
  miniThreeChildContainerClass,
  innerThreeMiniContainerClass,
  miniChild1,
  // miniChild2,
  // miniChild3,
  miniChild1Class,
  // miniChild2Class,
  // miniChild3Class,
}) => {
  return (
    <div
      className={`miniThreeChildContainer bg-[#0F172A] py-6 ${miniThreeChildContainerClass}`}
    >
      <div
        className={`innerThreeMiniContainer border flex border-[red] text-[white]  mx-auto ${innerThreeMiniContainerClass}`}
      >
        <div className={`miniChild1 ${miniChild1Class}`}>{miniChild1}</div>

        {/* <div className={`miniChild2 ${miniChild1Class}`}>{miniChild1}</div>
        <div className={`miniChild3 ${miniChild1Class}`}>{miniChild1}</div> */}
      </div>
    </div>
  );
};

export default MiniThreeChildContainers;
