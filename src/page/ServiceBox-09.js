import React from "react";
import styled from "styled-components";

import depic10 from "../img/bdepic_10.png";
import logo from "../img/hotelMasterLogo.png";
import qr from "../img/hotelMasterQR.png";

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
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  font-family: "SUIT", Heavy;
  font-size: 2.5rem;
  font-weight: 700;
  color: #000;
`;

const DePicBox02 = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;

  background-image: ${(props) => `url(${props.depic})`};
  background-size: cover;
  background-position: bottom;
  background-repeat: no-repeat;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    div:nth-child(1) {
      div:nth-child(1) {
        font-size: 1.3rem;
      }
      div:nth-child(2) {
        margin-top: -10vw;
      }
    }
    div:nth-child(2) {
      width: 90px;
      height: 90px;
    }
  }
`;

const ServiceBox_02 = () => {
  return (
    <ServiceBoxContainer>
      <ChapterSubBox>
        <DePicBox02 depic={depic10}>
          <div style={{ marginRight: "5vw", marginTop: "5vw" }}>
            <div>호텔관리 필수앱</div>
            <div
              style={{
                width: `30vw`,
                height: `107px`,
                backgroundImage: `url(${logo})`,
                backgroundSize: `contain`,
                backgroundPosition: `center`,
                backgroundRepeat: `no-repeat`,
                zIndex: `100`,
              }}
            ></div>
          </div>
          <div
            style={{
              width: `180px`,
              height: `180px`,
              marginLeft: `5vw`,
              marginTop: `2.5vw`,
              backgroundImage: `url(${qr})`,
              backgroundSize: `contain`,
              backgroundPosition: `center`,
              backgroundRepeat: `no-repeat`,
              zIndex: `100`,
            }}
          ></div>
        </DePicBox02>
      </ChapterSubBox>
    </ServiceBoxContainer>
  );
};

export default ServiceBox_02;
