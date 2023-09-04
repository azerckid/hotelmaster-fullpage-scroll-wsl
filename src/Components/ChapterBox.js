import React from "react";
import styled from "styled-components";

const ChapterBoxContainer = styled.div`
  width: 100vw;
  height: 32vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #605bff;
  color: #fff;
  font-family: "SUIT";
  font-size: 8px;
  font-weight: 300;
  div:nth-child(1) {
    margin-top: 30px;
    font-size: 2rem;
  }
  div:nth-child(2) {
    margin-top: 10px;
    font-size: 3rem;
    font-weight: 600;
    margin-bottom: 20px;
  }
  div:nth-child(3) {
    margin-top: 10px;
    font-size: 1.4rem;
  }
  div:nth-child(4) {
    margin-top: 4px;
    font-size: 1.4rem;
    margin-bottom: 30px;
  }
`;

function ChapterBox({ chapter, title, des_01, des_02 }) {
  return (
    <ChapterBoxContainer>
      <div>{chapter}</div>
      <div>{title}</div>
      <div>{des_01}</div>
      <div>{des_02}</div>
    </ChapterBoxContainer>
  );
}

export default ChapterBox;
