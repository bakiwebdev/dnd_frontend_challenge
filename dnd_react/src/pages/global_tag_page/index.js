import React from "react";
import Header from "../../components/header";
import PageWrapper from "../../components/page_wrapper";
import TagContainer from "../../components/tag_container";

const index = () => {
  return (
    <PageWrapper>
      <Header
        title="Global Tags"
        paragraph="These tags are available in all projects.
        This way you can use the same taxonomy
        accross all projects."
      />
      <div className="mt-5">
        <TagContainer />
      </div>
    </PageWrapper>
  );
};

export default index;
