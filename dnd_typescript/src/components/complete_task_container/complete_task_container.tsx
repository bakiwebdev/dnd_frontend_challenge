import React, { useEffect, useContext } from "react";
import Todo from "../todo/todo";
import { TodoContext } from "../../provider/todo";

import DroppableArea from "../droppable_area/droppable_area";

const CompleteTaskContainer = () => {
  const { completedTodo }: any = useContext(TodoContext);

  useEffect(() => {
    //   do nothing
  }, [completedTodo]);

  return (
    <div className="border border-gray-300 h-auto rounded-md p-2 flex flex-col flex-1">
      <p className="text-lg text-gray-500 capitalize mb-1 pb-5 border-b border-gray-300">Completed</p>
      <DroppableArea id="completedTodoList">
        {completedTodo.map((todo: any, index: number) => (
          <Todo
            key={todo.id}
            draggableId={todo.id}
            index={index}
            text={todo.text}
          />
        ))}
      </DroppableArea>
    </div>
  );
};

export default CompleteTaskContainer;
