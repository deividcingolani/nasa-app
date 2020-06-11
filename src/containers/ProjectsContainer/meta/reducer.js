import produce from "immer";
import * as constants from "./constants";

export const initialState = {
  projects: [],
  pagination: {
    data: [],
    perPage: 10,
    currentPage: 0,
    offset: 0,
    updating: false,
  },
};

/* eslint-disable no-param-reassign */
const Projects = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case constants.GET_PROJECTS_SUCCESS:
        draft.projects = action.payload.projects;
        break;
      case constants.GET_PROJECTS_ERROR:
        draft.error = action.payload.error;

        break;
      case constants.GET_DETAIL_PROJECTS_SUCCESS:
        draft.pagination.data = action.payload.projectsDetail;
        draft.pagination.updating = false;

        break;
      case constants.GET_DETAIL_PROJECTS_ERROR:
        draft.pagination.updating = false;
        draft.error = action.payload.error;
        break;
      case constants.GET_DETAIL_PROJECTS:
        break;

      case constants.INIT_PAGINATION:
        draft.pagination.lastPage = Math.trunc(
          action.payload.countRows / state.pagination.perPage
        );
        break;
      case constants.NEXT_PAGINATION:
        const currentPage = state.pagination.currentPage + 1;
        draft.pagination.currentPage = currentPage;
        draft.pagination.offset = currentPage * state.pagination.perPage;
        draft.pagination.updating = true;
        break;
      case constants.PREV_PAGINATION:
        if (state.pagination.currentPage > 0) {
          draft.pagination.offset =
            (state.pagination.currentPage - 1) * state.pagination.perPage;
          draft.pagination.currentPage = state.pagination.currentPage - 1;
        }
        draft.pagination.updating = true;

        break;
      default:
        break;
    }
  });

export default Projects;