import React from "react";
import styled from "styled-components";

const ChapterBoxContainer = styled.div`
  width: 100vw;
  height: 32vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #605bff;
  color: #fff;
  font-family: "SUIT";
  font-size: 8px;
  font-weight: 300;
  div:nth-child(1) {
    margin-top: 3vh;
    font-size: 2rem;
  }
  div:nth-child(2) {
    margin-top: 2vh;
    font-size: 3rem;
    font-weight: 600;
    margin-bottom: 2vh;
  }
  div:nth-child(3) {
    margin-top: 1vh;
    font-size: 1.4rem;
  }
  div:nth-child(4) {
    margin-top: 0.5vh;
    margin-bottom: 3vh;
    font-size: 1.4rem;
  }
  @media screen and (max-width: 768px) {
    div:nth-child(1) {
      font-size: 1.5rem;
    }
    div:nth-child(2) {
      margin-top: 5vh;
      font-size: 2rem;
    }
    div:nth-child(3) {
      margin-bottom: 0.4vh;
      font-size: 0.9rem;
    }
    div:nth-child(4) {
      font-size: 0.9rem;
    }
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
