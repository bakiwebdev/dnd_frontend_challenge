import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProjectTagPage from "../pages/project_tag_page/index.js";
import GlobalTagPage from "../pages/global_tag_page/index.js";
import AllProjectTagPage from "../pages/all_project_tag_page/index.js";
import Nav from "../components/nav/index.js";
import TestPage from "../pages/test_page/index.js";

const index = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<ProjectTagPage />} />
        <Route path="/global" element={<GlobalTagPage />} />
        <Route path="/all" element={<AllProjectTagPage />} />
        <Route path="/test" element={<TestPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default index;
