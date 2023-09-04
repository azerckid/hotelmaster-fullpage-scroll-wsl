import React from "react";
import styled from "styled-components";

const ServiceBoxContainer = styled.div`
  width: 100vw;
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
  font-size: 2.5rem;
  font-weight: 700;
  color: #000;
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
  @media screen and (max-width: 768px) {
    width: 80vw;
  }
`;

const ServiceBox_01 = ({ des01, des02, depic }) => {
  return (
    <ServiceBoxContainer>
      <DescriptionBox>{des01}</DescriptionBox>
      <DescriptionBox>{des02}</DescriptionBox>
      <DePicBox depic={depic}></DePicBox>
    </ServiceBoxContainer>
  );
};

export default ServiceBox_01;
