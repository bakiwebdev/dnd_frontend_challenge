import React from "react";
import AddTagButton from "../button";
import TagListContainer from "../tag_list_container";
import { Droppable } from "react-beautiful-dnd";

const TagContainer = ({ title }) => {
  return (
    <div className="border-[1px] border-gray-300 h-auto w-80 rounded-md p-2 flex flex-col">
      {/* title */}
      <p className="text-lg text-gray-500 capitalize mb-1">{title}</p>
      <Droppable droppableId={title}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="flex-1"
          >
            <TagListContainer />
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <AddTagButton />
    </div>
  );
};

export default TagContainer;
