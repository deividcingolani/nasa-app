import React from "react";
import PropTypes from "prop-types";

import CardProject from "./CardProject";
import styled from "styled-components";
import Toolbar from "./Toolbar";

const ProjectsCard = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 50px;
  grid-auto-rows: minmax(100px, auto);
`;

const ShowProjects = ({
  projects,
  pageCurrent,
  handlerClickPrevPagination,
  handlerClickNextPagination,
  handlerClickFavouritesCards,
  handlerClickDeletedCards,
  selectFavouriteProject,
  deselectFavouriteProject,
  deletedProject,
}) => {
  if (!projects) return <h1>Is Loading</h1>;

  if (projects) {
    const dataProject = projects.map((project) => {
      const projectDetails = project.project;
      return (
        <CardProject
          key={projectDetails.id}
          selectFavouriteProject={selectFavouriteProject}
          deselectFavouriteProject={deselectFavouriteProject}
          deletedProject={deletedProject}
          {...projectDetails}
        />
      );
    });

    return (
      <>
        <Toolbar
          pageCurrent={pageCurrent}
          handlerClickNextPagination={handlerClickNextPagination}
          handlerClickPrevPagination={handlerClickPrevPagination}
          deletedProject={handlerClickDeletedCards}
          handlerClickFavouritesCards={handlerClickFavouritesCards}
        />
        <ProjectsCard>{dataProject}</ProjectsCard>
      </>
    );
  }
};
ShowProjects.defaultProps = {
  projects: {},
};

ShowProjects.propTypes = {
  projects: PropTypes.array,
  pageCurrent: PropTypes.number,
  handlerClickNextPagination: PropTypes.func,
  handlerClickPrevPagination: PropTypes.func,
  handlerClickFavouritesCards: PropTypes.func,
  deselectFavouriteProject: PropTypes.func,
  handlerClickDeletedCards: PropTypes.func,
  deletedProject: PropTypes.func,
  selectFavouriteProject: PropTypes.func,
};

export default ShowProjects;
