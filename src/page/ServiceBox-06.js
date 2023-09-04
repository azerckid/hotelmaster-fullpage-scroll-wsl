import React from "react";
import styled from "styled-components";

import ChapterBox from "../Components/ChapterBox";
import depic07 from "../img/bdepic_07.png";

const ServiceBoxContainer = styled.div`
  width: 100vw;
  height: 100vh;
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
  width: 20vw;
  margin-left: -26vw;
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
  }
`;

const DePicBox02 = styled.div`
  width: 60vw;
  height: 60vh;
  background-image: ${(props) => `url(${props.depic})`};
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  @media screen and (max-width: 768px) {
    width: 90vw;
    height: 30vh;
  }
`;

const ServiceBox_02 = () => {
  return (
    <ServiceBoxContainer>
      <ChapterBox
        chapter={"Chapter 2"}
        title={"예약부터 쇼핑까지"}
        des_01={"호텔관리도 하면서 예약까지 한꺼번에 가능하며,"}
        des_02={"호텔마스터 스토어를 통해 다양한 쇼핑을 즐길 수 있습니다."}
      ></ChapterBox>
      <ChapterSubBox>
        <DePicBox02 depic={depic07}></DePicBox02>
        <DescriptionBox>
          <div>예약이 가능해요</div>
          <div>호텔 객실 예약은 당연히 가능하죠</div>
          <div>한 번에 여행 준비 끝!</div>
        </DescriptionBox>
      </ChapterSubBox>
    </ServiceBoxContainer>
  );
};

export default ServiceBox_02;
