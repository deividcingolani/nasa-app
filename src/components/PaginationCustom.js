import React, { memo } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Pagination = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
`;

const ButtonPrevious = styled.button`
  display: flex;
  flex-display: column;
  align-items: center;
  flex-direction: column;

  margin: 1em;
  width: 100px;
  font-size: 16px;
  border: 2px solid black;
  cursor: pointer;
  border-color: red;
  background-color: white;
  color: red;

  &:hover {
    background-color: ${(props) => (props.disabled ? "white" : "red")};
    color: ${(props) => (props.disabled ? "red" : "white")};
    cursor: ${(props) => (props.disabled ? "no-drop" : "auto")};
  }
`;
const ButtonNext = styled.button`
  border-color: #20207b;
  background-color: white;
  color: #20207b;
  display: flex;
  flex-display: column;
  align-items: center;
  flex-direction: column;

  margin: 1em;
  width: 100px;
  font-size: 16px;
  border: 2px solid black;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.disabled ? "white" : "#20207b")};
    color: ${(props) => (props.disabled ? "#20207b" : "white")};
    cursor: ${(props) => (props.disabled ? "no-drop" : "auto")};
  }
`;

const CurrentPage = styled.div`
  font-size: 1em;
`;

const PaginationCustom = ({
  handlerClickPrevPagination,
  pageCurrent,
  handlerClickNextPagination,
  lastPage,
}) => (
  <Pagination>
    <ButtonPrevious
      disabled={pageCurrent === 1}
      onClick={handlerClickPrevPagination}
    >
      {"<"} Previous
    </ButtonPrevious>
    <CurrentPage> Page {pageCurrent} </CurrentPage>
    <ButtonNext
      disabled={pageCurrent === lastPage}
      onClick={handlerClickNextPagination}
    >
      Next >
    </ButtonNext>
  </Pagination>
);
PaginationCustom.propTypes = {
  pageCurrent: PropTypes.number,
  handlerClickNextPagination: PropTypes.func,
  handlerClickPrevPagination: PropTypes.func,
};
export default memo(PaginationCustom);
