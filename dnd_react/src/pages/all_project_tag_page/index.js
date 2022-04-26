import React from "react";
import Header from "../../components/header";
import PageWrapper from "../../components/page_wrapper";

const index = () => {
  return (
    <PageWrapper>
      <Header
        title="All Project Tags"
        paragraph="Project tags are used to categorize projects. They are used to group projects together and to help you find them."
      />
    </PageWrapper>
  );
};

export default index;
