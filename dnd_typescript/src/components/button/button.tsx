import React from "react";
import { IoIosAdd } from "react-icons/io";

type PropsType = {
  onClick: () => void;
};

const Button = ({ onClick }: PropsType) => {
  return (
    <button
      onClick={onClick}
      className="my-2 py-2 gap-x-2 flex justify-center items-center rounded-full border-2 border-dashed border-gray-300 text-gray-300 text-md"
    >
      <IoIosAdd />
      Add todo
    </button>
  );
};

export default Button;
