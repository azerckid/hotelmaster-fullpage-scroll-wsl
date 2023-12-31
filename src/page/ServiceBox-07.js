import React from "react";
import styled, { keyframes } from "styled-components";

import depic08 from "../img/bdepic_08.png";

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
  justify-content: flex-start;
  align-items: center;
`;
const ChapterSubBox = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-family: "SUIT", Heavy;
  font-size: 2.5rem;
  font-weight: 700;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
const DescriptionBox = styled.div`
  width: 28vw;
  margin-left: -16vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;

  div:nth-child(1) {
    margin-bottom: 4px;
    font-size: 2.5rem;
  }
  div:nth-child(2) {
    margin-bottom: 4px;
    font-size: 1.3rem;
    font-weight: 500;
  }
  div:nth-child(3) {
    font-size: 1.3rem;
    font-weight: 500;
  }
  @media screen and (max-width: 768px) {
    width: 90vw;
    margin-left: 0vw;
    div:nth-child(1) {
      font-size: 1.8rem;
    }
    div:nth-child(2) {
      font-size: 1.3rem;
    }
    div:nth-child(3) {
      font-size: 1.3rem;
    }
  }
`;

const DePicBox02 = styled.div`
  width: 50vw;
  height: 60vh;
  margin-left: -10vw;
  background-image: ${(props) => `url(${props.depic})`};
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  animation: ${movingAnimationFromBottom} 1s ease-in-out;
  @media screen and (max-width: 768px) {
    width: 90vw;
    height: 30vh;
  }
`;

const ServiceBox_02 = () => {
  const [didExit, setDidExit] = React.useState(false);
  if (didExit) {
    return (
      <ServiceBoxContainer>
        <ChapterSubBox>
          <DePicBox02 depic={depic08}></DePicBox02>
          <DescriptionBox>
            <div>여행 준비 전 쇼핑해 볼까?</div>
            <div>스토어에서 다양하게 구매해</div>
            <div>알차게 여행 준비해요!</div>
          </DescriptionBox>
        </ChapterSubBox>
      </ServiceBoxContainer>
    );
  } else {
    return (
      <ServiceBoxContainer>
        <ChapterSubBox onEnded={() => setDidExit(true)}>
          <DePicBox02 depic={depic08} didExit={didExit}></DePicBox02>
          <DescriptionBox didExit={didExit}>
            <div>여행 준비 전 쇼핑해 볼까?</div>
            <div>스토어에서 다양하게 구매해</div>
            <div>알차게 여행 준비해요!</div>
          </DescriptionBox>
        </ChapterSubBox>
      </ServiceBoxContainer>
    );
  }
};

export default ServiceBox_02;
