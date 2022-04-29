import React from "react";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";

const Header = () => {
  return (
    <div className="space-y-2 mb-3">
      <h1 className="text-4xl text-gray-700 font-semibold tracking-wide">
        Todo Drag N Drop
      </h1>
      <div className="flex space-x-5 justify-between items-center">
        <p className="text-md text-gray-500">Built by Biruk Endris</p>
        <div className="flex space-x-2">
          <a
            href="https://github.com/Biruk-hub/dnd_frontend_challenge"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoGithub className="h-8 w-8 hover:text-gray-600" />
          </a>
          <a
            href="https://www.linkedin.com/in/biruk-endris/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoLinkedin className="h-8 w-8 hover:text-gray-600" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
