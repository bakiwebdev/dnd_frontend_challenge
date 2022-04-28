import React from "react";
import AppRouter from "../router/index.js";
import TagProvider from "./tag/index.js";

const AppProvider = () => {
  return (
    <TagProvider>
      <AppRouter />
    </TagProvider>
  );
};

export default AppProvider;
