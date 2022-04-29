import React from "react";
type PropsType = {
  children: React.ReactNode;
};

const Modal = ({ children }: PropsType) => {
  return (
    <div className="bg-black bg-opacity-40 fixed inset-0 z-50">
      <div className="h-screen flex justify-center items-center">
        {children}
      </div>
    </div>
  );
};

export default Modal;
