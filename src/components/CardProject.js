import React, { useState, memo } from "react";
import styled from "styled-components";
import parse from "html-react-parser";
import CardOptions from "./CardOptions";
import PropTypes from "prop-types";

const Project = styled.div`
  display: inline-block;
  padding-top: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-bottom: 1.5rem;
  height: ${(props) => props.height};
  width: 35rem;
  overflow: hidden;
  box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.1);
  opacity: 0.75;
  font-family: "Lato", sans-serif;
`;

const Title = styled.h1`
  font-size: 18px;
`;

const Button = styled.button`
  margin: 1em;
  width: 200px;
  font-size: 16px;
  border: 2px solid black;
  cursor: pointer;

  background-color: ${(props) => (props.primary ? "white" : "#2d3436")};
  color: ${(props) => (props.primary ? "#2d3436" : "white")};
`;

const ButtonSecondary = styled(Button)`
  background-color: ${(props) => (props.active ? "#2d3436" : "#20207b")};
  color: white;
  width: 100px;
  height: 30px;
  cursor: auto;
`;

const CenteredButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Dates = styled.div``;
const Subheader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StartDate = styled.p`
  font-size: 14px;
  font-style: oblique;
  margin: 0;
`;
const LastUpdated = styled.p`
  font-size: 14px;
  font-style: oblique;
  margin: 0;
`;

const HeaderCard = styled.div`
  display: flex;
  justify-content: space-between;
`;

/*Description*/
const Description = styled.div``;
const DescriptionLabel = styled.h1`
  font-size: 16px;
  margin-top: 1rem;
  margin-bottom: 0.2rem;
`;
const DescriptionContent = styled.div`
  overflow: auto;
  font-size: 14px;
  max-height: 130px;
  letter-spacing: 1px;
  margin-top: 0;
`;

/*Benefits*/
const Benefits = styled.div`
`;

const BenefitsLabel = styled.h1`
  font-size: 16px;
  margin-top: 2rem;
  margin-bottom: 0.2rem;

`;
const BenefitsContent = styled.p`
  overflow: auto;
  font-size: 14px;
  max-height: 130px;
  letter-spacing: 1px;
  margin-top: 0;
`;
const CardProject = ({
  id,
  title,
  startDate,
  lastUpdated,
  status,
  description,
  benefits,
    favourite,
  selectFavouriteProject,
  deselectFavouriteProject,
  deletedProject,
}) => {
  if(favourite){
    console.log(favourite)
  }
  const [height, setHeight] = useState("350px");
  const [showMore, setShowMore] = useState(false);
  const [selectedStars, setSelectedStars] = useState(favourite);
  const [selectedDeleted, setSelectedDeleted] = useState(false);
  
  const HandlerClick = () => {
    const newHeight = height === "350px" ? "500px" : "350px";
    const newShowMore = showMore ? false : true;
    setHeight(newHeight);
    setShowMore(newShowMore);
  };
  return (
    <Project height={height} key={id}>
      <HeaderCard>
        <Title>{title}</Title>
        <ButtonSecondary active={status === "Active" ? true : false}>
          {status}
        </ButtonSecondary>
      </HeaderCard>
      <Subheader>
        <Dates>
          <StartDate>Start Date: {startDate}</StartDate>
          <LastUpdated>Last Update {lastUpdated}</LastUpdated>
        </Dates>
        <CardOptions
          selectedStars={selectedStars}
          setSelectedStars={setSelectedStars}
          selectedDeleted={selectedDeleted}
          setSelectedDeleted={setSelectedDeleted}
          id={id}
          selectFavouriteProject={selectFavouriteProject}
          deselectFavouriteProject={deselectFavouriteProject}
          deletedProject={deletedProject}
        />
      </Subheader>
      <Description>
        <DescriptionLabel>Description</DescriptionLabel>
        <DescriptionContent> {parse(`${description}`)} </DescriptionContent>
      </Description>

      {showMore && (
        <>
          <Benefits>
            <BenefitsLabel>Benefits</BenefitsLabel>
            <BenefitsContent>{parse(`${benefits}`)}</BenefitsContent>
          </Benefits>
          <CenteredButton>
            <Button onClick={HandlerClick}>Show Less</Button>
          </CenteredButton>
        </>
      )}
      {!showMore && (
        <CenteredButton>
          <Button primary onClick={HandlerClick}>
            Show More
          </Button>
        </CenteredButton>
      )}
    </Project>
  );
};

CardProject.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  startDate: PropTypes.string,
  lastUpdated: PropTypes.string,
  status: PropTypes.string,
  description: PropTypes.string,
  benefits: PropTypes.string,
  selectFavouriteProject: PropTypes.func,
  deselectFavouriteProject: PropTypes.func,
  deletedProject: PropTypes.func,
};

export default memo(CardProject);
