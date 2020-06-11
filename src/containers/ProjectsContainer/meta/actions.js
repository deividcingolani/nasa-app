import * as constants from "./constants";

export const getProjects = () => ({
  type: constants.GET_PROJECTS,
});

export const getProjectsSuccess = (payload) => ({
  type: constants.GET_PROJECTS_SUCCESS,
  payload,
});

export const getProjectsError = (payload) => ({
  type: constants.GET_PROJECTS_ERROR,
  payload,
});

export const getDetailProjects = (payload) => ({
  type: constants.GET_DETAIL_PROJECTS,
  payload,
});

export const getDetailProjectsSuccess = (payload) => ({
  type: constants.GET_DETAIL_PROJECTS_SUCCESS,
  payload,
});

export const getDetailProjectsError = (payload) => ({
  type: constants.GET_DETAIL_PROJECTS_ERROR,
  payload,
});

export const initPagination = (payload) => ({
  type: constants.INIT_PAGINATION,
  payload,
});

export const nextPagination = () => ({
  type: constants.NEXT_PAGINATION,
});

export const prevPagination = () => ({
  type: constants.PREV_PAGINATION,
});

export const selectFavouriteProject = (projectId) => ({
  type: constants.SELECTED_FAVOURITE_PROJECT,
  projectId,
});

export const deselectFavouriteProject = (projectId) => ({
  type: constants.DESELECTED_FAVOURITE_PROJECT,
  projectId,
});

export const setFavouriteSuccess = (payload) => ({
  type: constants.SET_FAVOURITE_SUCCESS,
  payload,
});

export const setFavouriteError = (payload) => ({
  type: constants.SET_FAVOURITE_ERROR,
  payload,
});

export const deletedProject = (projectId) => ({
  type: constants.DELETED_PROJECT,
  projectId,
});

export const deletedProjectsSuccess = (payload) => ({
  type: constants.DELETED_PROJECT_SUCCESS,
  payload,
});

export const deletedProjectsError = (payload) => ({
  type: constants.DELETED_PROJECT_ERROR,
  payload,
});
