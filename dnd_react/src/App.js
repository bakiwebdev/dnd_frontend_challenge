import React from "react";
import AppProvider from "./provider/index.js";

const App = () => {
  return (
    <div className="h-screen w-screen bg-bg  flex justify-center items-center">
      <div className="w-4/5 min-w-fit max-w-6xl h-fit">
        <AppProvider />
      </div>
    </div>
  );
};

export default App;
