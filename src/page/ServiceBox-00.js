import React from "react";
import styled from "styled-components";

import apple from "../img/btn_bapple.png";
import google from "../img/btn_bgoogle.png";

const ServiceBoxContainer = styled.div`
  width: 100vw;
  margin-top: 20vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const DescriptionBox = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "SUIT", Heavy;
  font-size: 4rem;
  font-weight: 700;
  color: #fff;
  margin: 0.5% 0;
  @media screen and (max-width: 768px) {
    font-size: 2.5rem;
  }
`;
const StoreBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const ButtonBox = styled.div`
  width: 210px;
  height: 70px;
  margin: 10px 10px;

  background-image: ${(props) => `url(${props.pic})`};
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  @media screen and (max-width: 768px) {
    width: 100px;
    height: 70px;
    margin: 10px 10px;
  }
`;

const ServiceBox_01 = ({ des01, des02, des03, depic }) => {
  return (
    <ServiceBoxContainer>
      <DescriptionBox>{des01}</DescriptionBox>
      <DescriptionBox>{des02}</DescriptionBox>
      <DescriptionBox
        style={{ marginTop: "3vh", fontSize: "2rem", fontWeight: 500 }}
      >
        {des03}
      </DescriptionBox>
      <StoreBox>
        <ButtonBox pic={google}></ButtonBox>
        <ButtonBox pic={apple}></ButtonBox>
      </StoreBox>
    </ServiceBoxContainer>
  );
};

export default ServiceBox_01;
