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
}) => {
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

  return (
    <CardOption onClick={handleOnClick}>
      {selected ? <IconSelected /> : <IconNoSelected />}
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
