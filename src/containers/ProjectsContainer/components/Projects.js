import React, { useEffect } from "react";
import ShowProjects from "../../../components/ShowProjects";
import {AwesomeComponent} from "../../../utils/AwesomeComponent";


function ProjectsContainer({
  projects,
  error,
  getProjects,
  nextPagination,
  prevPagination,
  getDetailProjects,
}) {
  const { pagination, projectsRender } = { ...projects };
  useEffect(() => {
    getProjects();
  }, [getProjects]);

  useEffect(() => {
    if (pagination && pagination.updating) {
      getDetailProjects({ row: projectsRender });
    }
  }, [projectsRender, pagination, getDetailProjects, projects]);

  const handlerClickPrevPagination = () => {
    prevPagination();
  };

  const handlerClickNextPagination = () => {
    nextPagination();
  };
  if (error) return <h1>There is an error!</h1>;

  if (!pagination) return <AwesomeComponent/>

  if (pagination && pagination.data) {
    return (
      <ShowProjects
        projects={pagination.data}
        handlerClickPrevPagination={handlerClickPrevPagination}
        handlerClickNextPagination={handlerClickNextPagination}
      />
    );
  }
}
export default ProjectsContainer;
