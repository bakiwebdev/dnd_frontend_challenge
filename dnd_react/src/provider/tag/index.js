import React, { useState, createContext } from "react";

export const TagContext = createContext();

const TagProvider = ({ children }) => {
  const [issueTag, setIssueTag] = useState([
    {
      marked: true,
      title: "bug",
    },
    {
      marked: false,
      title: "feature",
    },
    {
      marked: false,
      title: "enhancement",
    },
  ]);
  const [projectTag, setProjectTag] = useState([]);
  const [globalTag, setGlobalTag] = useState([]);
  const [completedTag, setCompletedTag] = useState([]);
  return (
    <TagContext.Provider
      value={{
        issueTag,
        setIssueTag,
        projectTag,
        setProjectTag,
        globalTag,
        setGlobalTag,
        completedTag,
        setCompletedTag,
      }}
    >
      {children}
    </TagContext.Provider>
  );
};

export default TagProvider;
