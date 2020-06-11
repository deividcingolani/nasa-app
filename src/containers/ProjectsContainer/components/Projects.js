import React, { useEffect } from "react";
import PropTypes from "prop-types";

import ShowProjects from "../../../components/ShowProjects";
import { AwesomeComponent } from "../../../utils/AwesomeComponent";

function ProjectsContainer({
  projects,
  error,
  getProjects,
  nextPagination,
  prevPagination,
  getDetailProjects,
  selectFavouriteProject,
  deselectFavouriteProject,
  deletedProject,
}) {
  
  const { pagination, projectsRender } = { ...projects };
  useEffect(() => {
    if (!(pagination && pagination.initialized === true)) {
      getProjects();
    }
  }, [getProjects, pagination]);

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

  if (!pagination) return <AwesomeComponent />;
  if (pagination && pagination.data) {
    return (
      <ShowProjects
        pageCurrent={pagination.currentPage + 1}
        projects={pagination.data}
        handlerClickPrevPagination={handlerClickPrevPagination}
        handlerClickNextPagination={handlerClickNextPagination}
        selectFavouriteProject={selectFavouriteProject}
        deselectFavouriteProject={deselectFavouriteProject}
        deletedProject={deletedProject}
      />
    );
  }
}

ProjectsContainer.propTypes = {
  projects: PropTypes.object,
  error: PropTypes.object,
  getProjects: PropTypes.func,
  nextPagination: PropTypes.func,
  prevPagination: PropTypes.func,
  getDetailProjects: PropTypes.func,
  selectFavouriteProject: PropTypes.func,
  deselectFavouriteProject: PropTypes.func,
  deletedProject: PropTypes.func,
};

export default ProjectsContainer;
