import React from "react";
import styled from "styled-components";

import depic09 from "../img/bdepic_09.png";

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
  color: #000;
  margin: 0.5% 0;
`;
const DescriptionBox = styled.div`
  width: 25vw;
  margin-left: -30vw;
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
`;

const DePicBox02 = styled.div`
  width: 60vw;
  height: 60vh;
  background-image: ${(props) => `url(${props.depic})`};
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

const ServiceBox_02 = () => {
  return (
    <ServiceBoxContainer>
      <ChapterSubBox>
        <DePicBox02 depic={depic09}></DePicBox02>
        <DescriptionBox>
          <div>주변에 뭐가 더 핫할까?</div>
          <div>여행 가기 전에 놀 거리 먹거리 보고</div>
          <div>혜택도 알차게 받아 가요!</div>
        </DescriptionBox>
      </ChapterSubBox>
    </ServiceBoxContainer>
  );
};

export default ServiceBox_02;
