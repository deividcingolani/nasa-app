import React from "react";
import styled from "styled-components";

const HomeContainer = styled.div`
  display: flex;
  background-color: #000411f5;
  flex-direction: column;
  align-items: center;
  font-family: "Lato", sans-serif;
  min-height: 800px;
  color: white;
`;

const ContainerNasa = styled.div`
  padding-top: 3rem;
`;

const HeaderNasa = styled.div`
  font-size: 44px;
  text-align: center;
`;

const DescriptionNasa = styled.h1`
  font-size: 14px;
  margin-left: 2rem;
  margin-right: 2rem;
  letter-spacing: 0.1rem;
  line-height: 1.5rem;
`;

const DescriptionTechport = styled.h1`
  margin-top: 2rem;
  font-size: 14px;
  margin-left: 2rem;
  margin-right: 2rem;
  letter-spacing: 0.1rem;
  line-height: 1.5rem;
`;

const ContainerTechport = styled.div`
  padding-top: 3rem;
`;
const Philoshophy = styled.h1`
  padding-top: 2rem;
  font-size: 16px;
  text-justify: auto;
  margin-left: 2rem;
  margin-right: 2rem;
  letter-spacing: 0.1rem;
  margin-bottom: 1.5rem;
  line-height: 1.5rem;
`;
const HeaderTechport = styled.div`
  font-size: 36px;
  text-align: center;
  margin-top: 3rem;
`;

const HomeRender = () => (
  <HomeContainer>
    <ContainerNasa>
      <HeaderNasa>Welcome to NASA</HeaderNasa>
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
        This is an application build with Techport APIS
      </HeaderTechport>
      <DescriptionTechport>
        NASA's resource for collecting and sharing information about NASA-funded
        technology development. Techport allows the public to discover the
        technologies NASA is working on every day to explore space, understand
        the universe, and improve aeronautics. NASA is developing technologies
        in areas such as propulsion, nanotechnology, robotics, and human health.
        NASA is committed to making its data available and machine-readable
        through an Application Programming Interface (API) to better serve its
        user communities.
      </DescriptionTechport>
    </ContainerTechport>
  </HomeContainer>
);
export default HomeRender;
