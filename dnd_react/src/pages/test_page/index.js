import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const TestPage = () => {
  const tagData = [
    {
      id: "1",
      name: "tag1",
    },
    {
      id: "2",
      name: "tag2",
    },
    {
      id: "3",
      name: "tag3",
    },
    {
      id: "4",
      name: "tag4",
    },
  ];
  const [tagList, setTagList] = useState(tagData);

  const onDragEnd = (result) => {
    console.log("Drag end", result);
  };
  return (
    // to wrap every draggable item in a div
    <DragDropContext onDragEnd={onDragEnd}> 
    {/* draggable area */}
      <div className="w-96 bg-gray-200">
        List Item
        <Droppable droppableId="testid">
          {(provided, snapshot) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {tagList.map((tag, index) => (
                <Draggable
                  draggableId={tag.id}
                  key={tag.id}
                  index={index}
                >
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <div className="w-52 h-20 bg-yellow-200 m-2">{tag.name}</div>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
};

export default TestPage;
