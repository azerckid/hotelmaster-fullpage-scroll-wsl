import React from "react";
import styled, { keyframes } from "styled-components";

import depic04 from "../img/bdepic_04.png";

const movingAnimationFromBottom = keyframes`
  from{
    opacity:0;
    transform:translateY(50vw);
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
const ChapterSubBox = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "SUIT", Heavy;
  font-size: 2.5rem;
  font-weight: 700;
  color: #000;
  margin: 0.5% 0;
`;
const DescriptionBox = styled.div`
  width: 100vw;
  margin-bottom: 6vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "SUIT", Heavy;
  font-size: 2rem;
  font-weight: 700;
  color: #000;
`;

const DePicBox02 = styled.div`
  width: 90vw;
  height: 36.5vh;
  background-image: ${(props) => `url(${props.depic})`};
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  animation: ${movingAnimationFromBottom} 1s ease-in-out;
`;

const ServiceBox_02 = () => {
  return (
    <ServiceBoxContainer>
      <ChapterSubBox>
        <DescriptionBox>지출조회예시</DescriptionBox>
        <DePicBox02 depic={depic04}></DePicBox02>
      </ChapterSubBox>
    </ServiceBoxContainer>
  );
};

export default ServiceBox_02;
