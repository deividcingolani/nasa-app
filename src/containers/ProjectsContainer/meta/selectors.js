import { initialState } from "./reducer";
import { createSelector } from "reselect";

export const select = (state) => state || initialState;

export const selectProjects = (state) => select(state).projects;
export const selectError = (state) => select(state).projects.error;

export const makeSelectProjects = createSelector(
  selectProjects,
  (projectsState) => {
    if (
      projectsState &&
      projectsState.projects &&
      projectsState.projects.projects
    ) {
      const projects = projectsState.projects.projects;
      const pagination = projectsState.pagination;

      if (pagination) {
        const projectsPage = projects.slice(
          pagination.offset,
          (pagination.currentPage + 1) * pagination.perPage
        );

        const projectsRender = projectsPage.map((projects) => projects);
        return { projectsRender: projectsRender, pagination };
      }
    }
  }
);
