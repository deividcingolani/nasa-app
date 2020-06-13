import React from "react";
import PropTypes from "prop-types";

import CardProject from "./CardProject";
import styled from "styled-components";
import Toolbar from "./Toolbar";

const ProjectsEmpty = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 15rem;
  font-size: 44px;
  letter-spacing: 0.5rem;
`;

const ProjectsCard = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 0.5rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    margin-top: 2rem;
    grid-gap: 20px;
    justify-items: center;
    align-items: center;
  }
  grid-gap: 50px;
  grid-auto-rows: minmax(100px, auto);
`;

const ShowProjects = ({
  projects,
  pageCurrent,
  handlerClickPrevPagination,
  handlerClickNextPagination,
  selectFavouriteProject,
  deselectFavouriteProject,
  deletedProject,
  handleExportData,
  lastPage,
}) => {
  if (!projects) return <h1>Is Loading</h1>;
  if (projects && projects.length !== undefined) {
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
          handleExportData={handleExportData}
          lastPage={lastPage}
        />
        <ProjectsCard>{dataProject}</ProjectsCard>
        <Toolbar
          pageCurrent={pageCurrent}
          handlerClickNextPagination={handlerClickNextPagination}
          handlerClickPrevPagination={handlerClickPrevPagination}
          handleExportData={handleExportData}
          lastPage={lastPage}
        />
      </>
    );
  }
  if (projects.length === undefined)
    return <ProjectsEmpty>THERE IS NO PROJECT</ProjectsEmpty>;
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
