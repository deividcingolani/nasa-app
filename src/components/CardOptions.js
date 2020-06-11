import React, { useState } from "react";
import CardOptionsHook from "../hooks/CardOptionsHook";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { BsTrash2, BsTrash2Fill } from "react-icons/bs";
import styled from "styled-components";

const Options = styled.div`
  display: flex;
  flex-direction: row;
`;
const CardOptions = ({ id }) => {
  const [icon, setIcon] = useState(false);

  const handleOnClick = () => setIcon(!icon);
  return (
    <Options>
      <CardOptionsHook
        id={id}
        IconSelected={AiFillStar}
        IconNoSelected={AiOutlineStar}
      />
      <CardOptionsHook
        id={id}
        IconSelected={BsTrash2Fill}
        IconNoSelected={BsTrash2}
      />
    </Options>
  );
};

export default CardOptions;
