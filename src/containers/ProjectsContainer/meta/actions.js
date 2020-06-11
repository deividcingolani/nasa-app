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
  payload
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
