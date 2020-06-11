import React, { memo } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Pagination = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
`;

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
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
    <Button disabled={pageCurrent === 1} onClick={handlerClickPrevPagination}>
      Previous Page {pageCurrent > 1 && pageCurrent - 1}
    </Button>
    <CurrentPage> Current Page ({pageCurrent})</CurrentPage>

    <Button onClick={handlerClickNextPagination}>
      Next Page {pageCurrent + 1}
    </Button>
  </Pagination>
);
PaginationCustom.propTypes = {
  pageCurrent: PropTypes.number,
  handlerClickNextPagination: PropTypes.func,
  handlerClickPrevPagination: PropTypes.func,
};
export default memo(PaginationCustom);
