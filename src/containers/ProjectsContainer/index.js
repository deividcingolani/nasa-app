import { connect } from "react-redux";
import Projects from "./components/Projects";
import { makeSelectProjects, selectError } from "./meta/selectors";
import {
  getProjects,
  nextPagination,
  prevPagination,
  getDetailProjects,
} from "./meta/actions";

const mapStateToProps = (state) => ({
  projects: makeSelectProjects(state),
  error: selectError(state)
});

const mapDispatchToProps = {
  getProjects,
  nextPagination,
  prevPagination,
  getDetailProjects,
};

const ProjectContainer = connect(mapStateToProps, mapDispatchToProps)(Projects);

export default ProjectContainer;
