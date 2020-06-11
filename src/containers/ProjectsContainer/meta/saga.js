import { all, takeLatest, put, call } from "redux-saga/effects";
import * as constants from "./constants";
import * as actions from "./actions";
import network from "../../../utils/network";
import { getEndpointURL } from "../../../utils/endpoint";
import { API_KEY } from "../../../utils/environment";
import {
  selectProjectsFavourites,
  selectProjectsDeleted,
  selectProjects,
} from "./selectors";
import { select } from "@redux-saga/core/effects";
import update from "immutability-helper";

function* handleGetProjects() {
  try {
    const action = getEndpointURL("PROJECTS");
    const params = {
      api_key: API_KEY,
    };
    const response = yield call(network.getData, action, params);
    const countRows = response.projects.totalCount;
    const rowsRenderInit = response.projects.projects.slice(0, 10);

    yield put(actions.getProjectsSuccess(response));
    yield put(actions.initPagination(countRows));
    yield put(actions.getDetailProjects({ row: rowsRenderInit }));
  } catch (error) {
    yield put(actions.getProjectsError({ error }));
  }
}

//TODO: Improve
function* handleDetailProjects(action) {
  //In this var I save the return of the operation
  // where if is found return detail of project
  // if this project is not found return id project and false
  function projectsRenderWithData(projectsWithData) {
    if (projectsWithData) {
      //Loop through of projects to render
      return action.payload.row.map((projectRender) => {
        //Loop through of projects before search
        const projectsBeforeRender = projectsWithData.filter(
          (projectWithData) => {
            //If projects id on loop is equal to render project id,
            // return true on other form return false
            return projectWithData.project.id === projectRender.id;
          }
        );
        //This was found, and return detail of the project
        if (projectsBeforeRender && projectsBeforeRender.length > 0)
          return projectsBeforeRender[0];
        //This was not found, and return project ID as id and  renderBefore False.
        return { id: projectRender.id, renderBefore: false };
      });
    }
    return;
  }

  function callGetDetail(actionRender, { projectId }, params) {
    const actionsEndpoint = actionRender.replace("project_id", projectId);
    return call(network.getData, actionsEndpoint, params);
  }

  function* projectsDetailWithoutBeforeData(actionRender, params) {
    return yield all(
      action.payload.row.map((project) => {
        return callGetDetail(actionRender, { projectId: project.id }, params);
      })
    );
  }

  function* getDataWithoutBeforeRender(
    dataPagination,
    projectsRenderData,
    actionRender,
    params
  ) {
    dataPagination = yield all(
      projectsRenderData.map((project) => {
        if (project && project.id && project.renderBefore === false) {
          return callGetDetail(actionRender, { projectId: project.id }, params);
        }
        return project;
      })
    );
    return dataPagination;
  }

  try {
    const data = yield select(selectProjects);
    const projectsWithData = data.projects.detailProjects;
    let projectsRenderData = projectsRenderWithData(projectsWithData);

    //Params of endpoint
    const params = {
      api_key: API_KEY,
    };
    const actionRender = getEndpointURL("DETAIL_PROJECT");

    //Set data for return
    let dataPagination;
    let newProjectsDetail;

    //There isn't projects with before data
    if (!projectsWithData) {
      dataPagination = yield* projectsDetailWithoutBeforeData(
        actionRender,
        params
      );
      newProjectsDetail = dataPagination;
    } else {
      dataPagination = yield* getDataWithoutBeforeRender(
        dataPagination,
        projectsRenderData,
        actionRender,
        params
      );

      //get the id of the new Details
      const newProjects = projectsRenderData.filter(
        (project) => project.renderBefore === false
      );

      //Get the data of the new projects details
      const newDetails = dataPagination.filter((dataPage) => {
        const match = newProjects.filter((project) => {
          return project.id === dataPage.project.id;
        });
        if (match && match.length >= 1) return true;
        return false;
      });
      if (newDetails) {
        newProjectsDetail = update(projectsWithData, {
          $push: newDetails,
        });
      }
    }

    yield put(
      actions.getDetailProjectsSuccess({
        dataPagination: dataPagination,
        newProjectsDetail: newProjectsDetail,
      })
    );
  } catch (error) {
    console.error(error);
    yield put(actions.getDetailProjectsError({ error }));
  }
}

function* handleSelectedFavourite(action) {
  try {
    let projects = yield select(selectProjectsFavourites);

    const favouritesSelected = update(projects, {
      $push: [action.projectId],
    });

    yield put(actions.setFavouriteSuccess({ favourites: favouritesSelected }));
  } catch (error) {
    console.error(error);
    // yield put(actions.setFavouriteError({ error }));
  }
}

function* handleUnSelectedFavourite(action) {
  try {
    const projectsFavourites = yield select(selectProjectsFavourites);
    const newProjects = projectsFavourites.filter(
      (id) => id !== action.projectId
    );
    console.log(newProjects);
    yield put(actions.setFavouriteSuccess({ favourites: newProjects }));
  } catch (error) {
    console.error(error);
    yield put(actions.setFavouriteError({ error }));
  }
}

function* handleDelete(action) {
  try {
    const projectsDeleted = yield select(selectProjectsDeleted);
    const deletedProjects = update(projectsDeleted, {
      $push: [action.projectId],
    });

    const dataProject = yield select(selectProjects);
    const projects = dataProject.projects.projects;
    const newProjects = projects.filter(
      (project) => project.id !== action.projectId
    );
    yield put(
      actions.deletedProjectsSuccess({
        deleted: deletedProjects,
        projects: newProjects,
        totalCount: newProjects.length,
      })
    );
    yield put(actions.deselectFavouriteProject(action.projectId));
  } catch (error) {
    console.error(error);
    yield put(actions.deletedProjectsError({ error }));
  }
}

export default function* () {
  yield takeLatest(constants.GET_PROJECTS, handleGetProjects);
  yield takeLatest(constants.GET_DETAIL_PROJECTS, handleDetailProjects);
  yield takeLatest(
    constants.SELECTED_FAVOURITE_PROJECT,
    handleSelectedFavourite
  );
  yield takeLatest(
    constants.DESELECTED_FAVOURITE_PROJECT,
    handleUnSelectedFavourite
  );
  yield takeLatest(constants.DELETED_PROJECT, handleDelete);
}
