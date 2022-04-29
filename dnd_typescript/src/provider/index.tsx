import React from "react";
import TodoProvider from "./todo/index";
import DNDProvider from "./dnd/index";

type PropsType = {
  children: React.ReactNode;
};

const AppProvider = ({ children }: PropsType) => {
  return (
    <TodoProvider>
      <DNDProvider>{children}</DNDProvider>
    </TodoProvider>
  );
};

export default AppProvider;
