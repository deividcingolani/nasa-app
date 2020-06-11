import { all } from "redux-saga/effects";
import projectsSaga from "../containers/ProjectsContainer/meta/saga";

export default function* saga() {
  yield all([projectsSaga()]);
}
