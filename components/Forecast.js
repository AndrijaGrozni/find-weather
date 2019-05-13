import React from "react";
import styled from "styled-components";
//shared
import IMAGES from "../constants/WeatherIcons";

const Forecast = ({ day, description, icon, temperature }) => {
  return (
    <Wrapper>
      <Left>
        <Day>{day}</Day>
        <Description>{description}</Description>
      </Left>
      <Right>
        <Icon source={IMAGES[icon]} />
        <Temperature>{Math.round(temperature)}°</Temperature>
      </Right>
    </Wrapper>
  );
};

// styles
const Wrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.25);
  color: white;
  padding: 10px 35px;
  border-radius: 30px;
  margin-top: 15px;
  letter-spacing: 2px;
`;

const Day = styled.Text`
  text-align: left;
  font-size: 20px;
  margin: 0;
  text-transform: uppercase;
  margin-bottom: 5px;
  color: white;
`;

const Description = styled.Text`
  margin: 0;
  font-size: 13px;
  color: white;
`;

const Left = styled.View`
  display: flex;
  flex: 2;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
`;

const Right = styled.View`
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
  padding-left: 40px;
`;

const Icon = styled.Image`
  width: 40px;
  height: 40px;
`;

const Temperature = styled.Text`
  font-size: 32px;
  color: white;
  margin-left: 10px;
`;

export default Forecast;
