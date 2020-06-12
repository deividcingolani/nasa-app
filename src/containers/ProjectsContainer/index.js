import { connect } from "react-redux";
import Projects from "./components/Projects";
import {
  makeSelectProjects,
  selectError,
  selectProjectsFavourites,
  selectProjectsDeleted,
} from "./meta/selectors";
import {
  getProjects,
  nextPagination,
  prevPagination,
  getDetailProjects,
  selectFavouriteProject,
  deletedProject,
  deselectFavouriteProject,
  exportData,
} from "./meta/actions";

const mapStateToProps = (state) => ({
  projects: makeSelectProjects(state),
  error: selectError(state),
  projectsFavourites: selectProjectsFavourites(state),
  projectsDeleted: selectProjectsDeleted(state),
});

const mapDispatchToProps = {
  getProjects,
  nextPagination,
  prevPagination,
  getDetailProjects,
  selectFavouriteProject,
  deletedProject,
  deselectFavouriteProject,
  exportData,
};

const ProjectContainer = connect(mapStateToProps, mapDispatchToProps)(Projects);

export default ProjectContainer;
