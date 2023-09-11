import React from "react";
import styled from "styled-components";

import manualPC from "../img/manualPC.pdf";
import manualMobile from "../img/manualMobile.pdf";

const FooterContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: #343434; */
  color: #000;
  font-family: "SUIT";
  font-size: 10px;
  font-weight: 200;
`;
const FooterInfo = styled.div`
  width: 100vw;
  margin-top: 3vh;
  margin-bottom: 5vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  /* background-color: blueviolet; */
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
const CompanyInfo = styled.div`
  width: 50vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 10px;
`;
// const CompanyInfoItem = styled.div`
//   width: 30vw;
//   margin-bottom: 8px;
//   font-size: 9px;
//   font-weight: 300;
//   @media screen and (max-width: 768px) {
//     width: 90vw;
//   }
// `;
const Disclaimer = styled.div`
  width: 30vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  font-family: "SUIT";
  font-weight: 200;
  font-size: 12px;
  @media screen and (max-width: 768px) {
    width: 70vw;
  }
`;
const DownLoadTextBox = styled.div`
  margin-right: 40px;
  font-size: 10px;
  font-weight: 400;
`;
const DownLoadBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 10px;

  margin-right: 12px;
  font-family: "SUIT";
  font-weight: 400;
  font-size: 10px;
  div:nth-child(1) {
    width: 80px;
    margin-right: 20px;
    padding: 4px 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #000;
    border-radius: 4px;
  }
  div:nth-child(2) {
    width: 80px;
    margin-left: 20px;
    padding: 4px 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #000;
    border-radius: 4px;
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterInfo>
        <CompanyInfo>
          {/* <CompanyInfoItem style={{ fontWeight: 600, fontSize: 11 }}>
            <span>(주) 호텔마스터</span>{" "}
            <span style={{ marginLeft: "5vw" }}>
              이용약관 | 개인정보처리방침 | 사업자정보확인
            </span>
          </CompanyInfoItem>
          <CompanyInfoItem>대표: 김동현</CompanyInfoItem>
          <CompanyInfoItem>
            <span>사업자등록번호: 000-00-00000 </span>
            <span style={{ marginLeft: "2vw" }}>
              TEL:+82 2135 2776 FAX:+82 505 300 1678
            </span>
          </CompanyInfoItem>
          <CompanyInfoItem>
            서울특별시 영등포구 63로 40 (라이프빌딩 912호)
          </CompanyInfoItem> */}
        </CompanyInfo>
        <Disclaimer>
          <DownLoadTextBox> 호텔마스터 이용방법 다운로드</DownLoadTextBox>
          <DownLoadBox>
            <div>
              <a href={manualPC} download="호텔마스터 이용방법 PC">
                PC. Ver
              </a>
            </div>
            <div>
              <a href={manualMobile} download="호텔마스터 이용방법 Mobile">
                Mobile. Ver
              </a>
            </div>
          </DownLoadBox>
        </Disclaimer>
      </FooterInfo>
    </FooterContainer>
  );
}

export default Footer;
