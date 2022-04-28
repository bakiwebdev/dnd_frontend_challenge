import React, { useState, useEffect } from "react";
import { Droppable } from "react-beautiful-dnd";
import Tag from "../tag";

const DroppableTagContainer = () => {
  const [tags, setTags] = useState([]);

  return (
    <div className="ml-5 border border-gray-300 h-auto rounded-md p-2 flex flex-col flex-1">
      <p className="text-lg text-gray-500 capitalize mb-1">
        Droppable Container
      </p>
      {/* droppable area */}
      <Droppable droppableId="droppable">
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="flex-1"
          >
            {tags &&
              tags.map((tag, index) => (
                <Tag key={index} marked={tag.marked} title={tag.title} />
              ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default DroppableTagContainer;
