import React from "react";
import styled from "styled-components";
import WeatherContext from "../context/weather-context";
//shared
import Layout from "../constants/Layout";
import IMAGES from "../constants/WeatherIcons";
import Moment from "moment";

const Forecast = () => {
  Moment.locale("en");

  return (
    <WeatherContext.Consumer>
      {context => (
        <Wrapper>
          <Headline>weather next days</Headline>
          {context.forecasts.map((forecast, index) => (
            <Box key={index}>
              <Left>
                <Day>{Moment(forecast.day).format("dddd")}</Day>
                <Description>{forecast.description}</Description>
              </Left>
              <Right>
                <Icon source={IMAGES[forecast.icon]} />
                <Temperature>{Math.round(forecast.temperature)}°</Temperature>
              </Right>
            </Box>
          ))}
        </Wrapper>
      )}
    </WeatherContext.Consumer>
  );
};

const { window } = Layout;

// styles
const Wrapper = styled.View`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Headline = styled.Text`
  color: white;
  font-size: 10px;
  text-transform: uppercase;
  padding: 20px 0 0 15px;
  width: 100%;
`;

const Box = styled.View`
  width: ${window.width - 30};
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.25);
  color: white;
  padding: 10px 20px;
  border-radius: 10px;
  margin-top: 10px;
`;

const Day = styled.Text`
  text-align: left;
  font-size: 20px;
  margin: 0;
  text-transform: uppercase;
  margin-bottom: 1px;
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
  align-items: center;
  justify-content: flex-end;
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
  padding-left: 10px;
`;

const Icon = styled.Image`
  width: 35px;
  height: 35px;
`;

const Temperature = styled.Text`
  font-size: 28px;
  color: white;
  margin-left: 10px;
`;

export default Forecast;
