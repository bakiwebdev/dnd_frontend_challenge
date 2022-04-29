import React, { useState, useEffect, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import DroppableArea from "../droppable_area/droppable_area";
import Todo from "../todo/todo";
import { TodoContext } from "../../provider/todo";
import Button from "../button/button";
import Modal from "../modal";
import { IoMdClose } from "react-icons/io";

const ProgressTaskContainer = () => {
  const [showModal, setShowModal] = useState(false);
  const [newTodo, setNewTodo] = useState("");

  const { progressTodo, setProgressTodo }: any = useContext(TodoContext);

  useEffect(() => {
    //   do nothing or uncomment
    // if (progressTodo.length === 0) {
    //   setShowModal(true);
    // }
  }, [progressTodo]);

  const handleAddTodo = () => {
    setShowModal(true);
  };
  const handleModalClose = () => {
    if (newTodo !== "") {
      const newTodoItem = {
        id: uuidv4(),
        text: newTodo,
      };
      setProgressTodo([...progressTodo, newTodoItem]);
      setNewTodo("");
      setShowModal(false);
    } else {
      setShowModal(false);
      alert("Please enter a todo");
    }
  };
  return (
    <div className="border-[1px] border-gray-300 h-fit md:w-96 rounded-md p-2 flex flex-col">
      <p className="text-lg text-gray-500 capitalize mb-1 pb-5 border-b border-gray-300">
        In progress
      </p>
      <DroppableArea id="progressTodoList">
        {progressTodo.length === 0 && (
          <div className="flex h-full items-center justify-center">
            <p className="text-center text-gray-500">
              Add a task to get started
            </p>
          </div>
        )}
        {progressTodo.map((todo: any, index: number) => (
          <Todo
            key={todo.id}
            draggableId={todo.id}
            index={index}
            text={todo.text}
          />
        ))}
      </DroppableArea>
      <Button onClick={handleAddTodo} />
      {showModal && (
        <Modal>
          <div className="w-96 p-5 bg-white border-2 border-secondary rounded-md h-auto">
            <div className="flex justify-between items-center">
              <h1 className="text-lg text-gray-800">Add todo's</h1>
              <button onClick={() => setShowModal(false)}>
                <IoMdClose />
              </button>
            </div>
            <input
              className="w-full p-2 border-2 border-secondary rounded-md mt-4"
              type="text"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
            />
            <button
              className="w-full py-2 cursor-pointer flex justify-center items-center text-lg text-white bg-blue-400 rounded-md mt-4"
              onClick={() => handleModalClose()}
              type="submit"
            >
              Submit
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default ProgressTaskContainer;
