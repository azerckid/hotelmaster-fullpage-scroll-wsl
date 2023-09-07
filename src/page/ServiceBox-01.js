import React from "react";
import styled, { keyframes } from "styled-components";

const animation = keyframes`
  from{
    opacity:0;
  }
  to{
    opacity:1;
  }
`;
const animationBack = keyframes`
  from{
    opacity:1;
  }
  to{
    opacity:0;
  }
`;
const movingAnimationFromTop = keyframes`
  from{
    opacity:0;
    transform:translateY(-50vw);
  }
  to{
    opacity:1;
    transform:translateY(0vw);
  }
`;

const ServiceBoxContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const DescriptionBox = styled.div`
  width: 100vw;
  margin-bottom: 2vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "SUIT", Heavy;
  font-size: 2.5rem;
  font-weight: 700;
  color: black;
  animation: ${movingAnimationFromTop} 1s ease-in-out;
  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;
const DePicBox = styled.div`
  width: 40vw;
  height: 40vh;
  background-image: ${(props) => `url(${props.depic})`};
  background-size: cover;
  background-position: center;
  animation: ${(props) => (props.didExit ? animationBack : animation)} 2s
    ease-in-out;
  @media screen and (max-width: 768px) {
    width: 80vw;
  }
`;

const ServiceBox_01 = ({ des01, des02, depic }) => {
  const [didExit, setDidExit] = React.useState(false);
  if (didExit) {
    return (
      <ServiceBoxContainer>
        <DescriptionBox>{des01}</DescriptionBox>
        <DescriptionBox>{des02}</DescriptionBox>
        <DePicBox depic={depic}></DePicBox>
      </ServiceBoxContainer>
    );
  } else {
    return (
      <ServiceBoxContainer onEnded={() => setDidExit(true)}>
        <DescriptionBox>{des01}</DescriptionBox>
        <DescriptionBox>{des02}</DescriptionBox>
        <DePicBox depic={depic} didExit={didExit}></DePicBox>
      </ServiceBoxContainer>
    );
  }
};

export default ServiceBox_01;
