import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const ListOptions = ({
  list = ["list one arr string", "list two"],
  listIcon = <FaCheckCircle color="#14B082" />,
  hasIcon = false,
}) => {
  return (
    <div className="flex flex-col gap-[15px] ">
      {list.map((item, key) => (
        <div key={key} className="flex items-center justify-start gap-[10px] ">
          {listIcon}
          <p>{item}</p>
        </div>
      ))}
    </div>
  );
};

export default ListOptions;
