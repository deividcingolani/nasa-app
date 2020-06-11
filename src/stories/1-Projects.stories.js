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
const handlerClickFavouritesCards = () => {
  console.log("Favourites Cards");
};

const handlerClickDeletedCards = () => {
  console.log("Deleted Cards");
};
export const showProject = () => <CardProject {...Project} />;

export const showProjects = () => (
  <ShowProjects
    handlerClickNextPagination={handlerClickNextPagination}
    handlerClickPrevPagination={handlerClickPrevPagination}
    handlerClickFavouritesCards={handlerClickFavouritesCards}
    handlerClickDeletedCards={handlerClickDeletedCards}
    projects={Projects}
    pageCurrent={5}
  />
);


