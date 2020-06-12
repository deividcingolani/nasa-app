import React from "react";
import PropTypes from "prop-types";

import CardOptionsHook from "../hooks/CardOptionsHook";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { BsTrash2, BsTrash2Fill } from "react-icons/bs";
import styled from "styled-components";

const Options = styled.div`
  display: flex;
  flex-direction: row;
`;
const CardOptions = ({
  id,
  selectFavouriteProject,
  deselectFavouriteProject,
  deletedProject,
  selectedStars,
  setSelectedStars,
  selectedDeleted,
  setSelectedDeleted,
}) => (
  <Options>
    <CardOptionsHook
      id={id}
      IconSelected={AiFillStar}
      IconNoSelected={AiOutlineStar}
      handlerSelected={selectFavouriteProject}
      handlerUnselected={deselectFavouriteProject}
      selected={selectedStars}
      setSelected={setSelectedStars}
    />
    <CardOptionsHook
      id={id}
      IconSelected={BsTrash2Fill}
      IconNoSelected={BsTrash2}
      handlerSelected={deletedProject}
      selected={selectedDeleted}
      setSelected={setSelectedDeleted}
    />
  </Options>
);
CardOptions.propTypes = {
  selectFavouriteProject: PropTypes.func,
  deselectFavouriteProject: PropTypes.func,
  deletedProject: PropTypes.func,
};
export default CardOptions;
