import React from "react";
import CardProject from "../components/CardProject";
import ShowProjects from "../components/ShowProjects";
import Project from "./utils/Project_dummy";
import Projects from "./utils/Projects_dummy";

export default {
  title: "Projects",
};

const handlerClickPrevPagination = () => {
  console.log("Prev page");
};
const handlerClickNextPagination = () => {
  console.log("Next page");
};
export const showProject = () => <CardProject {...Project} />;

export const showProjects = () => (
  <ShowProjects
    handlerClickNextPagination={handlerClickNextPagination}
    handlerClickPrevPagination={handlerClickPrevPagination}
    projects={Projects}
    pageCurrent={5}
  />
);
