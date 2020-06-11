import React, { useState } from "react";
import styled from "styled-components";

const CardOption = styled.div`
  flex-grow: 2;
`;
const CardOptionsHook = ({ id, IconSelected, IconNoSelected }) => {
  const [icon, setIcon] = useState(false);

  const handleOnClick = () => setIcon(!icon);

  return (
    <CardOption onClick={handleOnClick}>
      {icon ? <IconSelected /> : <IconNoSelected />}
    </CardOption>
  );
};

export default CardOptionsHook;
