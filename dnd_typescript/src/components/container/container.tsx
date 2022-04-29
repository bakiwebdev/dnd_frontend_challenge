import React from "react";
import CompleteTaskContainer from "../complete_task_container/complete_task_container";
import Header from "../header/header";
import ProgressTaskContainer from "../progress_task_container/progress_task_container";

const Container = () => {
  return (
    <div className="w-full md:w-4/5 h-full md:h-auto flex  md:space-y-5 flex-col bg-white border border-gray-300 rounded-md p-10">
      <Header />
      <div className="flex md:flex-row flex-col gap-x-5 space-y-5 md:space-y-0">
        <ProgressTaskContainer />
        <CompleteTaskContainer />
      </div>
    </div>
  );
};

export default Container;
