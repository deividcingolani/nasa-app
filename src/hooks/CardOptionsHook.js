import React  from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const CardOption = styled.div`
  flex-grow: 2;
`;
//Todo IMPROVE STYLED OF COMPONENT
const CardOptionsHook = ({
  id,
  IconSelected,
  IconNoSelected,
  handlerSelected,
  handlerUnselected,
  defaultColor,
  selected,
  setSelected,
}) => {
  const IconSelectedStyled = styled.div`
    color: #f1ab06;
    font-size: 30px;
  `;

  const IconNoSelectedStyled = styled.div`
    font-size: 30px;
  `;

  const handleOnClick = () => {
    const newStatuSelected = !selected;
    setSelected(newStatuSelected);

    if (!handlerUnselected) {
      handlerSelected(id);
    } else if (!newStatuSelected) {
      handlerUnselected(id);
    } else {
      handlerSelected(id);
    }
  };

  return (
    <CardOption onClick={handleOnClick}>
      {selected ? (
        <IconSelectedStyled>
          <IconSelected />
        </IconSelectedStyled>
      ) : (
        <IconNoSelectedStyled>
          <IconNoSelected />
        </IconNoSelectedStyled>
      )}
    </CardOption>
  );
};

CardOptionsHook.propTypes = {
  id: PropTypes.number,
  IconSelected: PropTypes.func,
  IconNoSelected: PropTypes.func,
  handlerSelected: PropTypes.func,
  handlerUnselected: PropTypes.func,
};

export default CardOptionsHook;
