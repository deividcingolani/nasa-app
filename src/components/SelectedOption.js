import React, { memo } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
`;
const SelectedContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
`;

const SelectedOption = ({
  handlerClickFavouritesCards,
  handlerClickDeletedCards,
}) => {
  return (
    <SelectedContainer>
      <Button onClick={handlerClickFavouritesCards}>
        Get All Projects selected Favourites
      </Button>

      <Button onClick={handlerClickDeletedCards}>
        Deleted All projects selected favourites
      </Button>
    </SelectedContainer>
  );
};

SelectedOption.propTypes = {
  handlerClickFavouritesCards: PropTypes.func,
  handlerClickDeletedCards: PropTypes.func,
};
export default memo(SelectedOption);
