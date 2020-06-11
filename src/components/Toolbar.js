import React from "react";

import PaginationCustom from "./PaginationCustom";

const Toolbar = ({
  handlerClickPrevPagination,
  handlerClickNextPagination,
  pageCurrent,
}) => (
  <>
    <PaginationCustom
      handlerClickPrevPagination={handlerClickPrevPagination}
      handlerClickNextPagination={handlerClickNextPagination}
      pageCurrent={pageCurrent}
    />

  </>
);

export default {Toolbar};
