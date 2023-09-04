import React from "react";
import styled from "styled-components";

import depic06 from "../img/bdepic_06.png";

const ServiceBoxContainer = styled.div`
  width: 100vw;
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
  width: 20vw;
  margin-left: -26vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;

  div:nth-child(1) {
    margin-bottom: 4px;
    font-size: 2rem;
  }
  div:nth-child(2) {
    margin-bottom: 4px;
    font-size: 1rem;
  }
  div:nth-child(3) {
    font-size: 1rem;
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
        <DePicBox02 depic={depic06}></DePicBox02>
        <DescriptionBox>
          <div>정산내역도 한눈에</div>
          <div>PC와 모바일에서 금액만 입력하면</div>
          <div>바로 간편하게 발행완료 !</div>
        </DescriptionBox>
      </ChapterSubBox>
    </ServiceBoxContainer>
  );
};

export default ServiceBox_02;
