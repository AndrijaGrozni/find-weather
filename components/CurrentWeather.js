import React from "react";
import styled from "styled-components";
//components
import Layout from "../constants/Layout";
import WeatherContext from "../context/weather-context";

const CurrentWeather = () => {
  return (
    <WeatherContext.Consumer>
      {context => (
        <Wrapper>
          <City>{context.today.city}</City>
          <Descritpion>{context.today.description}</Descritpion>
          <Temperature>{Math.round(context.today.temperature)}°</Temperature>
        </Wrapper>
      )}
    </WeatherContext.Consumer>
  );
};

const { window } = Layout;

const Wrapper = styled.View`
  color: white;
  width: ${window.width - 30};
  margin: 0 auto;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const City = styled.Text`
  font-size: 35px;
  color: white;
  font-weight: 500;
  margin-bottom: 5px;
`;

const Temperature = styled.Text`
  font-size: 85px;
  flex: 1;
  color: white;
  font-weight: 500;
`;

const Descritpion = styled.Text`
  font-size: 16px;
  text-align: left;
  color: white;
`;

export default CurrentWeather;
