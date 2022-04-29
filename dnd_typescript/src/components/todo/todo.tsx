import React from "react";
import { Draggable } from "react-beautiful-dnd";

type PropsType = {
    draggableId: string;
    index: number;
    text: string;
}

const Todo = ({draggableId, index, text}: PropsType) => {
  return (
    <Draggable draggableId={draggableId} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="min-h-[3rem] h-auto w-full border border-gray-300 bg-gray-100 rounded-md overflow-hidden inline-flex items-center space-x-2"
        >
          <span className="w-5 h-full bg-secondary rounded-none"></span>
          <p className=" text-gray-800 p-1 text-base tracking-wide first-letter:capitalize">
            {text}
          </p>
        </div>
      )}
    </Draggable>
  );
};

export default Todo;
