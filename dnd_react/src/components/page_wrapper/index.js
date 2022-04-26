import React from "react";

const PageWrapper = ({ children }) => {
  return <div className="w-full h-105 bg-white border-[1px] border-gray-300 rounded-md p-5">{children}</div>;
};

export default PageWrapper;
