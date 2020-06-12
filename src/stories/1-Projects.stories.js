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
export const showCardProject = () => <CardProject {...Project} />;
export const saCardWithoutData = () => <CardProject/>;

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

export const showProjectsWithoutProjects = () => (
  <ShowProjects
    handlerClickNextPagination={handlerClickNextPagination}
    handlerClickPrevPagination={handlerClickPrevPagination}
    handlerClickFavouritesCards={handlerClickFavouritesCards}
    handlerClickDeletedCards={handlerClickDeletedCards}
    pageCurrent={0}
  />
);

let oneProjects = [];
oneProjects.push(Projects[0]);

export const showOne = () => (
  <ShowProjects
    handlerClickNextPagination={handlerClickNextPagination}
    handlerClickPrevPagination={handlerClickPrevPagination}
    handlerClickFavouritesCards={handlerClickFavouritesCards}
    handlerClickDeletedCards={handlerClickDeletedCards}
    projects={oneProjects}
    pageCurrent={1}
  />
);
const Twoprojects = [];
Twoprojects.push(...oneProjects)
Twoprojects.push(Projects[1]);

export const showTwo = () => (
  <ShowProjects
    handlerClickNextPagination={handlerClickNextPagination}
    handlerClickPrevPagination={handlerClickPrevPagination}
    handlerClickFavouritesCards={handlerClickFavouritesCards}
    handlerClickDeletedCards={handlerClickDeletedCards}
    projects={Twoprojects}
    pageCurrent={1}
  />
);

const ThreeProjects = [];
ThreeProjects.push(...Twoprojects)
ThreeProjects.push(Projects[2]);

export const showThee = () => (
  <ShowProjects
    handlerClickNextPagination={handlerClickNextPagination}
    handlerClickPrevPagination={handlerClickPrevPagination}
    handlerClickFavouritesCards={handlerClickFavouritesCards}
    handlerClickDeletedCards={handlerClickDeletedCards}
    projects={ThreeProjects}
    pageCurrent={1}
  />
);
const Fourprojects = [];
Fourprojects.push(...ThreeProjects)
Fourprojects.push(Projects[3]);
export const showFour = () => (
  <ShowProjects
    handlerClickNextPagination={handlerClickNextPagination}
    handlerClickPrevPagination={handlerClickPrevPagination}
    handlerClickFavouritesCards={handlerClickFavouritesCards}
    handlerClickDeletedCards={handlerClickDeletedCards}
    projects={Fourprojects}
    pageCurrent={1}
  />
);
const Fiveprojects = [];
Fiveprojects.push(...Fourprojects)
Fiveprojects.push(Projects[4]);
export const showFive = () => (
  <ShowProjects
    handlerClickNextPagination={handlerClickNextPagination}
    handlerClickPrevPagination={handlerClickPrevPagination}
    handlerClickFavouritesCards={handlerClickFavouritesCards}
    handlerClickDeletedCards={handlerClickDeletedCards}
    projects={Fiveprojects}
    pageCurrent={1}
  />
);

const Sixprojects = [];
Sixprojects.push(...Fiveprojects)
Sixprojects.push(Projects[5]);
export const showSix = () => (
  <ShowProjects
    handlerClickNextPagination={handlerClickNextPagination}
    handlerClickPrevPagination={handlerClickPrevPagination}
    handlerClickFavouritesCards={handlerClickFavouritesCards}
    handlerClickDeletedCards={handlerClickDeletedCards}
    projects={Sixprojects}
    pageCurrent={1}
  />
);

const Sevenprojects = [];
Sevenprojects.push(...Sixprojects)
Sevenprojects.push(Projects[6]);
export const showSeven = () => (
  <ShowProjects
    handlerClickNextPagination={handlerClickNextPagination}
    handlerClickPrevPagination={handlerClickPrevPagination}
    handlerClickFavouritesCards={handlerClickFavouritesCards}
    handlerClickDeletedCards={handlerClickDeletedCards}
    projects={Sevenprojects}
    pageCurrent={1}
  />
);

const Eightprojects = [];
Eightprojects.push(...Sevenprojects)
Eightprojects.push(Projects[7]);
export const showEight = () => (
  <ShowProjects
    handlerClickNextPagination={handlerClickNextPagination}
    handlerClickPrevPagination={handlerClickPrevPagination}
    handlerClickFavouritesCards={handlerClickFavouritesCards}
    handlerClickDeletedCards={handlerClickDeletedCards}
    projects={Eightprojects}
    pageCurrent={1}
  />
);

const Nineprojects = [];
Nineprojects.push(...Eightprojects)
Nineprojects.push(Projects[8]);
export const showNine = () => (
  <ShowProjects
    handlerClickNextPagination={handlerClickNextPagination}
    handlerClickPrevPagination={handlerClickPrevPagination}
    handlerClickFavouritesCards={handlerClickFavouritesCards}
    handlerClickDeletedCards={handlerClickDeletedCards}
    projects={Nineprojects}
    pageCurrent={1}
  />
);

const Tenprojects = [];
Tenprojects.push(...Nineprojects)
Tenprojects.push(Projects[8]);
export const showTen = () => (
    <ShowProjects
        handlerClickNextPagination={handlerClickNextPagination}
        handlerClickPrevPagination={handlerClickPrevPagination}
        handlerClickFavouritesCards={handlerClickFavouritesCards}
        handlerClickDeletedCards={handlerClickDeletedCards}
        projects={Tenprojects}
        pageCurrent={1}
    />
);
