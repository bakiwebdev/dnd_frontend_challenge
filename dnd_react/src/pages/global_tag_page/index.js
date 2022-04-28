import React, {useEffect ,useContext} from "react";
import Header from "../../components/header";
import PageWrapper from "../../components/page_wrapper";
import TagContainer from "../../components/tag_container";
import { DragDropContext } from "react-beautiful-dnd";
import DroppableTagContainer from "../../components/droppable_tag_container";
import { TagContext } from "../../provider/tag";

const Index = () => {
  const {
    issueTag,
    setIssueTag,
    projectTag,
    setProjectTag,
    globalTag,
    setGlobalTag,
    completedTag,
    setCompletedTag,
  } = useContext(TagContext);

  const onDragEndHandler = (result) => {
    console.log("Drag end", result);
    const { destination, source, draggableId } = result;
    // if their is no destination, return
    if (!destination) {
      return;
    }
    // check where the draggable is dropped
    if(
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

  };
  return (
    <PageWrapper>
      <Header
        title="Global Tags"
        paragraph="These tags are available in all projects.
        This way you can use the same taxonomy
        accross all projects."
      />
      <DragDropContext onDragEnd={onDragEndHandler}>
        <div className="mt-5 flex justify-between w-full">
          <TagContainer title={"Issues"} />
          <DroppableTagContainer />
        </div>
      </DragDropContext>
    </PageWrapper>
  );
};

export default Index;
