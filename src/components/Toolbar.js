import React, { memo } from "react";
import PropTypes from "prop-types";

import PaginationCustom from "./PaginationCustom";
import styled from "styled-components";

const ContainerToolbar = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    margin-top: 2rem;
    padding-top: 10px;
  }
  padding-top: 50px;
`;
const Button = styled.button`
  margin: 1em;
  width: 150px;
  font-size: 16px;
  border: 2px solid black;
  cursor: pointer;
  border-color: #2d3436;
  color: #2d3436;
  background-color: white;

  &:hover {
    background-color: #2d3436;
    color: white;
  }
`;
const SpaceDiv = styled.div`
  width: 200px;
  @media (max-width: 768px) {
    display: none;
  }
`;

const Toolbar = ({
  handlerClickPrevPagination,
  handlerClickNextPagination,
  pageCurrent,
  handlerClickDeletedCards,
}) => (
  <ContainerToolbar>
    <SpaceDiv></SpaceDiv>
    <PaginationCustom
      handlerClickPrevPagination={handlerClickPrevPagination}
      handlerClickNextPagination={handlerClickNextPagination}
      pageCurrent={pageCurrent}
    />
    <Button onClick={handlerClickDeletedCards}>Export Data</Button>
  </ContainerToolbar>
);

Toolbar.propTypes = {
  pageCurrent: PropTypes.number,
  handlerClickNextPagination: PropTypes.func,
  handlerClickFavouritesCards: PropTypes.func,
  handlerClickDeletedCards: PropTypes.func,
};
export default memo(Toolbar);
