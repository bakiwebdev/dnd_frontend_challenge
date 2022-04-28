import React, { useContext, useState } from "react";
import AddTagButton from "../button";
import TagListContainer from "../tag_list_container";
import { Droppable } from "react-beautiful-dnd";
import { TagContext } from "../../provider/tag";
import Modal from "../modal";

const TagContainer = ({ title }) => {
  const [newTag, setNewTag] = useState({
    marked: false,
    title: "",
  });
  const [showModal, setShowModal] = useState(false);
  const { issueTag, setIssueTag } = useContext(TagContext);
  const handleAddButtonClick = () => {
    setShowModal(true);
  };
  const handleModalClose = () => {
    if (newTag.title !== "") {
      setIssueTag([...issueTag, newTag]);
      setNewTag({
        marked: false,
        title: "",
      });
    }
    setShowModal(false);
  };
  return (
    <div className="border-[1px] border-gray-300 h-fit w-80 rounded-md p-2 flex flex-col">
      {/* title */}
      <p className="text-lg text-gray-500 capitalize mb-1">{title}</p>
      <Droppable droppableId={title}>
        {(provided, snapshot) => (
          <div
            className="flex-1"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <TagListContainer />
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      {showModal && (
        <Modal>
          <div className="w-96 p-5 bg-white border-2 border-secondary rounded-md h-auto">
            <h1 className="text-lg text-gray-800">Title</h1>
            <input
              className="w-full p-2 border-2 border-secondary rounded-md mt-4"
              type="text"
              value={newTag.title}
              onChange={(e) => setNewTag({ ...newTag, title: e.target.value })}
            />
            <div
              className="cursor-pointer flex justify-center items-center text-lg text-white bg-blue-400 rounded-md mt-4"
              onClick={() => handleModalClose()}
            >
              Add tag
            </div>
          </div>
        </Modal>
      )}
      <AddTagButton onClick={handleAddButtonClick} />
    </div>
  );
};

export default TagContainer;
