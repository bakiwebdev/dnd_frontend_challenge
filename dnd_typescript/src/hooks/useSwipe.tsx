import { useContext } from "react";
import { TodoContext } from "../provider/todo/index";

const useSwipe = () => {
  const {
    progressTodo,
    completedTodo,
    setProgressTodo,
    setCompletedTodo,
  }: any = useContext(TodoContext);

  const handleSwipe = (result: any) => {
    console.log(result);
    const { destination, source } = result;
    // if their is no destination, return
    if (!destination) {
      return;
    }
    // if the destination and index is the same as the source, return
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    // if the destination is the same but the index is different, return
    if (
      destination.droppableId === source.droppableId &&
      destination.index !== source.index
    ) {
      // remove the list from source.index
      // add the list to destination.index
      if (source.droppableId === "progressTodoList") {
        const newProgressTodo = [...progressTodo];
        const selectedTag = newProgressTodo[source.index];
        newProgressTodo.splice(source.index, 1);
        newProgressTodo.splice(destination.index, 0, selectedTag);
        setProgressTodo(newProgressTodo);
      }
      // add the list to DroppableTagContainer
      if (destination.droppableId === "completedTodoList") {
        const newCompletedTodo = [...completedTodo];
        const selectedTag = newCompletedTodo[source.index];
        newCompletedTodo.splice(source.index, 1);
        newCompletedTodo.splice(destination.index, 0, selectedTag);
        setCompletedTodo(newCompletedTodo);
      }
    }
    // if the destination is different from the source, return
    else {
      // if the draggableId is from issueTag, remove from issueTag and add to completedTag
      if (source.droppableId === "progressTodoList") {
        const newProgressTodo = [...progressTodo];
        const selectedTag = newProgressTodo[source.index];
        newProgressTodo.splice(source.index, 1);
        setProgressTodo(newProgressTodo);
        const newCompletedTodo = [...completedTodo];
        newCompletedTodo.splice(destination.index, 0, selectedTag);
        setCompletedTodo(newCompletedTodo);
      }
      // if the draggableId is from completedTag, remove from completedTag and add to issueTag
      if (source.droppableId === "completedTodoList") {
        const newCompletedTodo = [...completedTodo];
        const selectedTag = newCompletedTodo[source.index];
        newCompletedTodo.splice(source.index, 1);
        setCompletedTodo(newCompletedTodo);
        const newProgressTodo = [...progressTodo];
        newProgressTodo.splice(destination.index, 0, selectedTag);
        setProgressTodo(newProgressTodo);
      }
    }
  };
  return [handleSwipe];
};

export default useSwipe;
