import { all, takeLatest, put, call } from "redux-saga/effects";
import * as constants from "./constants";
import * as actions from "./actions";
import network from "../../../utils/network";
import { getEndpointURL } from "../../../utils/endpoint";
import { API_KEY } from "../../../utils/environment";
export const getProject = (state) => state.project;
function* handleGetProjects() {
  try {
    const action = getEndpointURL("PROJECTS");
    const params = {
      updatedSince: "2020-01-01",
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

function* handleDetailProjects(action) {
  try {
    const params = {
      api_key: API_KEY,
    };
    const actionRender = getEndpointURL("DETAIL_PROJECT");
    const projectsDetail = yield all(
      action.payload.row.map((project) => {
        const actionsEndpoint = actionRender.replace("project_id", project.id);
        return call(network.getData, actionsEndpoint, params);
      })
    );
    yield put(actions.getDetailProjectsSuccess({ projectsDetail }));
  } catch (error) {
    console.log(error);
    yield put(actions.getDetailProjectsError({ error }));
  }
}

export default function* () {
  yield takeLatest(constants.GET_PROJECTS, handleGetProjects);
  yield takeLatest(constants.GET_DETAIL_PROJECTS, handleDetailProjects);
}
