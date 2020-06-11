import React from "react";
import styled from "styled-components";

import logo from "../../assets/nasa-logo.svg";
import { Link } from "react-router-dom";

const Image = styled.img`
  height: 85%;
  margin: auto 0;
`;

const Brand = () => {
  return (
    <Link to="/">
      <Image src={logo} alt="Company Logo" />
    </Link>
  );
};

export default Brand;
