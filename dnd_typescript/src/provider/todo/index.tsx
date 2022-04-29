import React, { useState, createContext } from "react";

type PropsType = {
  children: React.ReactNode;
};
export const TodoContext = createContext({});

const TodoProvider = ({ children }: PropsType) => {
  const [progressTodo, setProgressTodo] = useState([]);
  const [completedTodo, setCompletedTodo] = useState([]);
  return (
    <TodoContext.Provider
      value={{
        progressTodo,
        completedTodo,
        setProgressTodo,
        setCompletedTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
