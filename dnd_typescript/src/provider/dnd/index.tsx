import React from "react";
import { DragDropContext } from "react-beautiful-dnd";
import useSwipe from "../../hooks/useSwipe";

type PropsType = {
  children: React.ReactNode;
};

const DNDProvider = ({ children }: PropsType) => {
  const [handleSwipe] = useSwipe();

  const handleDragEnd = (result: any) => {
    handleSwipe(result);
  };
  return (
    <DragDropContext onDragEnd={handleDragEnd}>{children}</DragDropContext>
  );
};

export default DNDProvider;
