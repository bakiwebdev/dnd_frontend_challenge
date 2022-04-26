import React from "react";

const Header = ({ title, paragraph }) => {
  return (
    <div className="space-y-2">
      <h1 className="text-4xl text-gray-700 font-semibold tracking-wide">
        {title}
      </h1>
      <p className="text-md text-gray-500">{paragraph}</p>
    </div>
  );
};

export default Header;
