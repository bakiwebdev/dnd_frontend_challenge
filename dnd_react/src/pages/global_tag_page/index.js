import React, { useContext } from "react";
import Header from "../../components/header";
import PageWrapper from "../../components/page_wrapper";
import TagContainer from "../../components/tag_container";
import { DragDropContext } from "react-beautiful-dnd";
import DroppableTagContainer from "../../components/droppable_tag_container";
import { TagContext } from "../../provider/tag";

const Index = () => {
  const { issueTag, setIssueTag, completedTag, setCompletedTag } =
    useContext(TagContext);

  const onDragEndHandler = (result) => {
    const { destination, source } = result;
    // if their is no destination, return
    if (!destination) {
      return;
    }
    // if the destination is the same as the source, return
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
      // add the list to destination.index\
      if (source.droppableId === "Issues") {
        const newIssueTag = [...issueTag];
        const selectedTag = newIssueTag[source.index];
        newIssueTag.splice(source.index, 1);
        newIssueTag.splice(destination.index, 0, selectedTag);
        setIssueTag(newIssueTag);
      }
      // add the list to DroppableTagContainer
      if (destination.droppableId === "droppable") {
        const newCompletedTag = [...completedTag];
        const selectedTag = newCompletedTag[source.index];
        newCompletedTag.splice(source.index, 1);
        newCompletedTag.splice(destination.index, 0, selectedTag);
        setCompletedTag(newCompletedTag);
      }
    }
    // if the destination is different from the source, return
    else {
      // if the draggableId is from issueTag, remove from issueTag and add to completedTag
      if (source.droppableId === "Issues") {
        const newIssueTag = [...issueTag];
        const selectedTag = newIssueTag[source.index];
        newIssueTag.splice(source.index, 1);
        setIssueTag(newIssueTag);
        const newCompletedTag = [...completedTag];
        newCompletedTag.splice(destination.index, 0, selectedTag);
        setCompletedTag(newCompletedTag);
      }
      // if the draggableId is from completedTag, remove from completedTag and add to issueTag
      if (source.droppableId === "droppable") {
        const newCompletedTag = [...completedTag];
        const selectedTag = newCompletedTag[source.index];
        newCompletedTag.splice(source.index, 1);
        setCompletedTag(newCompletedTag);
        const newIssueTag = [...issueTag];
        newIssueTag.splice(destination.index, 0, selectedTag);
        setIssueTag(newIssueTag);
      }
    }
  };
  return (
    <PageWrapper>
      <Header
        title="Global Tags"
        paragraph="These tags are available in all projects.
        This way you can use the same taxonomy
        across all projects."
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
