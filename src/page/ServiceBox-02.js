import React from "react";
import styled from "styled-components";
import ChapterBox from "../Components/ChapterBox";

import depic03 from "../img/bdepic_03.png";

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
  margin-top: 50px;
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
  padding-top: 50px;
  display: flex;

  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "SUIT", Heavy;
  font-size: 1rem;
  font-weight: 500;
  color: #000;
  margin: 0.5% 0;
`;
const DePicBox = styled.div`
  width: 90vw;
  height: 40vh;
  background-image: ${(props) => `url(${props.depic})`};
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

const ServiceBox_02 = () => {
  return (
    <ServiceBoxContainer>
      <ChapterBox
        chapter={"Chapter 1"}
        title={"매출부터 정산까지"}
        des_01={"수익 지출을 한눈에 확인하여 운영 흐름을 확인할 수 있으며"}
        des_02={"세금계산서 또한 '호텔마스터'에서 처리가 가능합니다."}
      ></ChapterBox>
      <ChapterSubBox>
        <DescriptionBox>매출조회예시</DescriptionBox>
        <DePicBox depic={depic03}></DePicBox>
      </ChapterSubBox>
    </ServiceBoxContainer>
  );
};

export default ServiceBox_02;
