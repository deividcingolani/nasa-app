import React, { memo } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Pagination = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
`;

const Button = styled.button`
  display: flex;
  flex-display: column;
  align-items: center;
  flex-direction: column;

  margin: 1em;
  width: 100px;
  font-size: 16px;
  border: 2px solid black;
  cursor: pointer;
`;
const ButtonPrevious = styled(Button)`
  border-color: red;
  background-color: white;
  color: red;

  &:hover {
    background-color: red;
    color: white;
  }
`;

const ButtonNext = styled(Button)`
  border-color: #20207b;
  background-color: white;
  color: #20207b;

  &:hover {
    background-color: #20207b;
    color: white;
  }
`;

const CurrentPage = styled.div`
  font-size: 1em;
`;

const PaginationCustom = ({
  handlerClickPrevPagination,
  pageCurrent,
  handlerClickNextPagination,
}) => (
  <Pagination>
    <ButtonPrevious
      disabled={pageCurrent === 1}
      onClick={handlerClickPrevPagination}
    >
      {"<"} Previous
    </ButtonPrevious>
    <CurrentPage> Page {pageCurrent} </CurrentPage>

    <ButtonNext onClick={handlerClickNextPagination}>Next ></ButtonNext>
  </Pagination>

);
PaginationCustom.propTypes = {
  pageCurrent: PropTypes.number,
  handlerClickNextPagination: PropTypes.func,
  handlerClickPrevPagination: PropTypes.func,
};
export default memo(PaginationCustom);
