import React, { useState, useEffect, useContext } from "react";
import { TagContext } from "../../provider/tag";
import Modal from "../modal";
import Tag from "../tag";
import { Draggable } from "react-beautiful-dnd";

const TagListContainer = () => {
  const { issueTag } = useContext(TagContext);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentTag, setCurrentTag] = useState({});
  const [tags, setTags] = useState([]);
  useEffect(() => {
    setTags(issueTag);
  }, [issueTag]);
  const handleDelete = (index) => {
    const newTags = [...tags];
    newTags.splice(index, 1);
    console.log(newTags);
    setTags(newTags);
  };
  const handleEdit = (index) => {
    setIsEditing(true);
    setCurrentTag(tags[index]);
  };
  const handleExpand = (index) => {
    setCurrentTag(tags[index]);
    setIsExpanded(true);
  };
  return (
    <div className="w-full h-80 overflow-x-scroll no-scrollbar">
      { tags && tags.map((tag, index) => (
        <Draggable draggableId={tag.title} index={index} key={tag.title}>
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
            >
              <Tag
                key={index}
                marked={tag.marked}
                title={tag.title}
                onExpand={() => handleExpand(index)}
                onDelete={() => handleDelete(index)}
                onEdit={() => handleEdit(index)}
              />
            </div>
          )}
        </Draggable>
      ))}
      {/* when expand button clicked */}
      {isExpanded && (
        <Modal>
          <div className="w-96 p-5 bg-white border-2 border-secondary rounded-md h-auto">
            <div>
              <h1 className="text-lg text-gray-800">Title</h1>
              <p className="ml-5 text-gray-500">{currentTag.title}</p>
            </div>
            <div>
              <h1 className="text-lg text-gray-800">Status</h1>
              <p className="ml-5 text-gray-500">
                {currentTag.marked ? "Checked" : "Not Checked"}
              </p>
            </div>
            <div
              className="cursor-pointer flex justify-center items-center text-lg text-white bg-blue-400 rounded-md mt-4"
              onClick={() => setIsExpanded(false)}
            >
              Close
            </div>
          </div>
        </Modal>
      )}
      {isEditing && (
        <Modal>
          <div className="w-96 p-5 bg-white border-2 border-secondary rounded-md h-auto">
            <div>
              <h1 className="text-lg text-gray-800">Title</h1>
              <input
                className="w-full p-2 border-2 border-secondary rounded-md mt-4"
                type="text"
                value={currentTag.title}
                onChange={(e) =>
                  setCurrentTag({ ...currentTag, title: e.target.value })
                }
              />
            </div>
            <div
              className="cursor-pointer flex justify-center items-center text-lg text-white bg-blue-400 rounded-md mt-4"
              onClick={() => setIsEditing(false)}
            >
              Change
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default TagListContainer;
