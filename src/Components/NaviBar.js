import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// import LogoImage from "../img/logo.png";
import Blogo from "../img/hotelmasterBlogo.png";

const NaviContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    width: 674px;
    height: 70px;
    margin-top: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const NaviBox = styled.div`
  width: 60vw;
  height: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: black;
  background-color: whitesmoke;
  border-radius: 20px;
  @media (min-width: 768px) {
    width: 674px;
    height: 46px;
    margin-top: 8%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: black;
    background-color: whitesmoke;
    border-radius: 40px;
  }
`;
const NaviLink = styled(Link)`
  margin-left: 8px;
  margin-right: 8px;
  font-size: 9px;
  color: black;
  text-decoration: none;
  cursor: pointer;
  font-family: "SUIT";
  font-size: 13px;
  font-weight: 200;
  @media (max-width: 768px) {
    margin-left: 8px;
    margin-right: 8px;
    color: darkgray;
    text-decoration: none;
    cursor: pointer;
    font-family: "SUIT";
    font-size: 8px;
    font-weight: 400;
  }
`;
const LogoBox = styled.div`
  width: 140px;
  height: 29px;
  margin-left: 8px;
  margin-top: 4px;
  background-image: url(${Blogo});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 10;
  @media screen and (max-width: 768px) {
    width: 70px;
    margin-top: 0px;
  }
`;

const NaviBar = ({ manualRef }) => {
  return (
    <NaviContainer>
      <NaviBox>
        <LogoBox></LogoBox>
        <NaviLink to={"/"}>HOME</NaviLink>
        <NaviLink to={"/"}>이용관련</NaviLink>
      </NaviBox>
    </NaviContainer>
  );
};

export default NaviBar;
