import React from "react";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();
  const buttonData = [
    {
      name: "project tags",
      path: "/",
    },
    {
      name: "global tags",
      path: "/global",
    },
    {
      name: "all project tags",
      path: "/all",
    },
  ];
  // check current route
  const currentRoute = window.location.pathname;

  const getNavButtons = () => {
    return buttonData.map((button, index) => {
      const isActive = currentRoute === button.path;
      return (
        <div key={index} onClick={() => navigate(button.path)} className="relative">
          <div
            className={`py-4 px-8 border-t-[5px] border-x-[1px] text-xl  rounded-t-md tracking-wide cursor-pointer transition-colors ${
              isActive
                ? "bg-white text-gray-800  border-t-blue-500 border-x-gray-300 shadow-md"
                : "bg-transparent text-gray-600 border-transparent"
            }`}
          >
            {button.name}
          </div>
          {/*bottom line line hider */}
          <div
            className={` ${
              isActive && "absolute -bottom-4 left-0 w-full h-4 bg-white"
            }`}
          ></div>
        </div>
      );
    });
  };

  return (
    <div className="flex justify-start items-end space-x-10 capitalize pt-2 px-10">
      {/* links */}
      {getNavButtons()}
    </div>
  );
};

export default Nav;
