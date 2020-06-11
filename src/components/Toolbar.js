import React, { memo } from "react";
import PropTypes from "prop-types";

import PaginationCustom from "./PaginationCustom";
import styled from "styled-components";
import SelectedOption from "./SelectedOption";

const ContainerToolbar = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 50px;
  grid-auto-rows: minmax(100px, auto);
`;

const Toolbar = ({
  handlerClickPrevPagination,
  handlerClickNextPagination,
  pageCurrent,
  handlerClickFavouritesCards,
  handlerClickDeletedCards,
}) => (
  <ContainerToolbar>
    <PaginationCustom
      handlerClickPrevPagination={handlerClickPrevPagination}
      handlerClickNextPagination={handlerClickNextPagination}
      pageCurrent={pageCurrent}
    />
    <SelectedOption
      handlerClickDeletedCards={handlerClickDeletedCards}
      handlerClickFavouritesCards={handlerClickFavouritesCards}
    />
  </ContainerToolbar>
);

Toolbar.propTypes = {
  pageCurrent: PropTypes.number,
  handlerClickNextPagination: PropTypes.func,
  handlerClickPrevPagination: PropTypes.func,
  handlerClickFavouritesCards: PropTypes.func,
  handlerClickDeletedCards: PropTypes.func,
};
export default memo(Toolbar);
