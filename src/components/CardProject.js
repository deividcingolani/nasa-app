import React, { useState } from "react";
import styled from "styled-components";
import parse from "html-react-parser";
import CardOptions from "./CardOptions";

const Project = styled.div`
  display: inline-block;
  padding-top: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-bottom: 1.5rem;
  background-color: #fff;
  height: ${(props) => props.height};
  width: 35rem;
  overflow: hidden;
  box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.1);
  opacity: 0.75;
`;

const Title = styled.h1`
  font-size: 22px;
  font-family: "Droid Serif";
`;
const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${(props) => (props.primary ? "palevioletred" : "white")};
  color: ${(props) => (props.primary ? "white" : "palevioletred")};
  font-size: 0.8em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid;
  border-radius: 3px;
  width: 100px;
  height: 30px;
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

const StartDate = styled.h1`
  font-size: 14px;
`;
const LastUpdated = styled.h1`
  font-size: 14px;
`;

const HeaderCard = styled.div`
  display: flex;
  justify-content: space-between;
`;

/*Description*/
const Description = styled.div``;
const DescriptionLabel = styled.h1`
  font-size: 22px;
`;
const DescriptionContent = styled.p`
  overflow: auto;
  font-size: 14px;
  max-height: 100px;
`;

/*Benefits*/
const Benefits = styled.div``;
const BenefitsContent = styled.p`
  overflow: auto;
  font-size: 14px;
  max-height: 100px;
`;
const BenefitsLabel = styled.h1`
  font-size: 22px;
`;

const CardProject = ({
  id,
  title,
  startDate,
  lastUpdated,
  status,
  description,
  benefits,
}) => {
  const [height, setHeight] = useState("350px");
  const [showMore, setShowMore] = useState(false);

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
        <Button seconday={status === "Active" ? true : false}> {status}</Button>
      </HeaderCard>
      <Subheader>
        <Dates>
          <StartDate>Start Date: {startDate}</StartDate>
          <LastUpdated>Last Update {lastUpdated}</LastUpdated>
        </Dates>
        <CardOptions id={id} />
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
            <Button primary onClick={HandlerClick}>
              Show Less
            </Button>
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
export default CardProject;
