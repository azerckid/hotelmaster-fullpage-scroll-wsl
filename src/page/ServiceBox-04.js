import React from "react";
import styled, { keyframes } from "styled-components";

import depic05 from "../img/bdepic_05.png";

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
const textAnimation = keyframes`
  from{
    opacity:0;
    transform:translateX(50vw);

  }
  to{
    opacity:1;
    transform:translateX(0vw);
  }
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
  width: 30vw;
  margin-left: -10vw;
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
    font-size: 1rem;
  }
  div:nth-child(3) {
    font-size: 1rem;
  }
  animation: ${textAnimation} 1s ease-in-out;
  z-index: 10;
  @media screen and (max-width: 768px) {
    width: 90vw;
    div:nth-child(1) {
      font-size: 1.5rem;
    }
    div:nth-child(2) {
    }
    div:nth-child(3) {
    }
  }
`;

const DePicBox02 = styled.div`
  width: 40vw;
  height: 60vh;
  background-image: ${(props) => `url(${props.depic})`};
  background-size: cover;
  background-position: left;
  background-repeat: no-repeat;
  animation: ${(props) => (props.didExit ? animationBack : animation)} 1.5s
    ease-in-out;
  @media screen and (max-width: 768px) {
    width: 90vw;
    height: 30vh;
  }
`;

const ServiceBox_02 = () => {
  const [didExit, setDidExit] = React.useState(false);
  if (didExit) {
    return (
      <ChapterSubBox>
        <DePicBox02 depic={depic05}></DePicBox02>
        <DescriptionBox>
          <div>세금계산서를 편리하게</div>
          <div>PC와 모바일에서 금액만 입력하면</div>
          <div>바로 간편하게 발행완료 !</div>
        </DescriptionBox>
      </ChapterSubBox>
    );
  } else {
    return (
      <ChapterSubBox onEnded={() => setDidExit(true)}>
        <DePicBox02 depic={depic05} didExit={didExit}></DePicBox02>
        <DescriptionBox didExit={didExit}>
          <div>세금계산서를 편리하게</div>
          <div>PC와 모바일에서 금액만 입력하면</div>
          <div>바로 간편하게 발행완료 !</div>
        </DescriptionBox>
      </ChapterSubBox>
    );
  }
};

export default ServiceBox_02;
