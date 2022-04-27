import React, { useState } from "react";
import { RiDeleteBin6Line, RiEditLine } from "react-icons/ri";
import { BiExpandAlt } from "react-icons/bi";
const Tag = ({ marked, title, onDelete, onEdit, onExpand }) => {
  const [isChecked, setIsChecked] = useState(marked);
  return (
    <div className="my-2 flex justify-between items-center">
      {/* checkbox with tag name */}
      <label className="max-w-[65%] inline-flex justify-center items-center cursor-pointer">
        <input
          type="checkbox"
          className="w-4 h-4 rounded-full border-gray-300 border focus:ring-0 active:ring-0"
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
        />
        <span className="ml-2 px-4 py-1 rounded-full bg-primary-light text-primary truncate ...">
          {title}
        </span>
      </label>
      {/* tag icons */}
      <div className="inline-flex space-x-3 justify-start">
        <BiExpandAlt
          onClick={onExpand}
          className="text-gray-500 hover:text-gray-700 cursor-pointer"
        />
        <RiDeleteBin6Line
          onClick={onDelete}
          className="text-gray-500 hover:text-gray-700 cursor-pointer"
        />
        <RiEditLine
          onClick={onEdit}
          className="text-gray-500 hover:text-gray-700 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Tag;
