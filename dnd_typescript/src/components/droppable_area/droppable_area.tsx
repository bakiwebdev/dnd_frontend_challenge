import React from "react";
import { Droppable } from "react-beautiful-dnd";

type PropsType = {
  id: string;
  children: React.ReactNode;
};

const DroppableArea = ({ id, children }: PropsType) => {
  return (
    <Droppable droppableId={id}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
          className="flex flex-col space-y-2 w-full h-full min-h-[15rem] max-h-96 p-2 overflow-y-scroll no-scrollbar"
        >
          {children}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default DroppableArea;
