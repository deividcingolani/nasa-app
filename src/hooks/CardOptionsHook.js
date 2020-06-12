import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const CardOption = styled.div`
  flex-grow: 2;
`;

const CardOptionsHook = ({
  id,
  IconSelected,
  IconNoSelected,
  handlerSelected,
  handlerUnselected,
  defaultColor,
}) => {
  const IconSelectedStyled = styled(IconSelected)`
    color: ${(props) =>
      props.iconColor === defaultColor ? defaultColor : ""};
    font-size: 30px;
  `;

  const IconNoSelectedStyled = styled(IconNoSelected)`
  font-size: 30px;
  `;


  const [selected, setSelected] = useState(false);
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
  console.log(defaultColor);
  return (
    <CardOption onClick={handleOnClick}>
      {selected ? (
        <IconSelectedStyled iconColor={defaultColor ? defaultColor : ""} />
      ) : (
        <IconNoSelectedStyled />
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
