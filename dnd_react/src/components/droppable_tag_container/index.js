import React, { useState, useEffect, useContext } from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
import Tag from "../tag";
import { TagContext } from "../../provider/tag";

const DroppableTagContainer = () => {
  const { completedTag } = useContext(TagContext);
  const [tags, setTags] = useState([]);
  useEffect(() => {
    setTags(completedTag);
  }, [completedTag]);

  return (
    <div className="ml-5 border border-gray-300 h-auto rounded-md p-2 flex flex-col flex-1">
      <p className="text-lg text-gray-500 capitalize mb-1">
        Completed tags
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
                <Draggable
                  draggableId={tag.title}
                  index={index}
                  key={tag.title}
                >
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <Tag marked={tag.marked} title={tag.title} />
                    </div>
                  )}
                </Draggable>
              ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default DroppableTagContainer;
