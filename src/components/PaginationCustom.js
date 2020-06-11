import React from "react";
import styled from "styled-components";

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

const CurrentPage = styled.h1`
  font-size: 1em;
`;

const PaginationCustom = ({
  handlerClickPrevPagination,
  pageCurrent,
  handlerClickNextPagination,
}) => (
  <Pagination>
    <Button onClick={handlerClickPrevPagination}>
      Previous Page {pageCurrent - 1}
    </Button>
    <CurrentPage> Current Page ({pageCurrent})</CurrentPage>

    <Button onClick={handlerClickNextPagination}>
      Next Page {pageCurrent + 1}
    </Button>
  </Pagination>
);
export default PaginationCustom;
