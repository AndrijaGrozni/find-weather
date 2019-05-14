import React from "react";
import styled from "styled-components";
//components
import Layout from "../constants/Layout";

const Header = () => {
  return (
    <Wrapper>
      <Logo source={require("../assets/images/logo.png")} />
      <Headline>FindWeatherApp</Headline>
      <Description>
        Find your local temperature, hourly and daily forecast, conditions and
        more.
      </Description>
    </Wrapper>
  );
};

const { window } = Layout;

const Wrapper = styled.View`
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-color: white;
  background-color: transparent;
  width: ${window.width};
  margin-top: -50px;
`;

const Headline = styled.Text`
  color: white;
  font-size: 32px;
  font-family: "Galada-regular";
`;

const Logo = styled.Image`
  width: 100px;
  height: 100px;
`;

const Description = styled.Text`
  font-size: 13px;
  line-height: 19px;
  width: ${window.width - 90};
  text-align: center;
  color: white;
`;

export default Header;
