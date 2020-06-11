import React, { memo } from "react";
import CardProject from "./CardProject";
import styled from "styled-components";

const Projects = styled.div`
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

}) => {
  if (!projects) return <h1>Is Loading</h1>;

  if (projects) {
    const dataProject = projects.map((project) => {
      const projectDetails = project.project;
      return <CardProject {...projectDetails} />;
    });

    return (
      <>

        <Projects>{dataProject}</Projects>
      </>
    );
  }
};

export default ShowProjects;
