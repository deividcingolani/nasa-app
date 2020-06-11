import React from "react";
import styled from "styled-components";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: black !important;
  opacity: 0.1;
  min-height: 800px;
`;

const ContainerNasa = styled.div`
  padding-top: 1rem;
  color: white;
  z-index: 300;
`;

const HeaderNasa = styled.div`
  font-size: 44px;
  background-color: yellow;
  color: black !important;
  opacity: 1 !important;
`;

const DescriptionNasa = styled.p`
  padding-top: 1rem;
  font-size: 16px;
`;

const ContainerTechport = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;
const Philoshophy = styled.h1`
  padding-top: 2rem;
  font-size: 18px;
`;
const HeaderTechport = styled.div``;
const DescriptionTechport = styled.h1``;

const HomeRender = ({ navbarState }) => (
  <HomeContainer>
    <ContainerNasa>
      <HeaderNasa>Welcome to Nasa</HeaderNasa>
      <Philoshophy>
        NASA inspires the world by exploring new frontiers, discovering new
        knowledge, and developing new technology.
      </Philoshophy>
      <DescriptionNasa>
        The National Aeronautics and Space Administration (NASA) is the United
        States government agency responsible for U.S. space exploration, space
        technology, Earth and space science, and aeronautics research.
      </DescriptionNasa>
    </ContainerNasa>
    <ContainerTechport>
      <HeaderTechport>
        This is an application build with Techport APIa
      </HeaderTechport>
      <DescriptionTechport>
        Techport Welcome to TechPort - NASA's resource for collecting and
        sharing information about NASA-funded technology development. Techport
        allows the public to discover the technologies NASA is working on every
        day to explore space, understand the universe, and improve aeronautics.
        NASA is developing technologies in areas such as propulsion,
        nanotechnology, robotics, and human health. NASA is committed to making
        its data available and machine-readable through an Application
        Programming Interface (API) to better serve its user communities.
      </DescriptionTechport>
    </ContainerTechport>
  </HomeContainer>
);
export default HomeRender;
