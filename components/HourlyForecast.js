import React from "react";
import styled from "styled-components";
import IMAGES from "../constants/WeatherIcons";
import WeatherContext from "../context/weather-context";
import Moment from "moment";

const HourlyForecast = () => {
  Moment.locale("en");

  return (
    <WeatherContext.Consumer>
      {context => (
        <Wrapper horizontal={true} showsHorizontalScrollIndicator={false}>
          {context.hourly.map((item, index) => (
            <Box key={index}>
              <Time>{Moment(item.time).format("HH")}h</Time>
              <Icon source={IMAGES[item.icon]} />
              <Temperature>{Math.round(item.temperature)}°</Temperature>
            </Box>
          ))}
        </Wrapper>
      )}
    </WeatherContext.Consumer>
  );
};

const Wrapper = styled.ScrollView`
  flex: 1;
  width: 100%;
  padding: 15px 15px 0 15px;
`;

const Box = styled.View`
  width: 68px;
  height: 100px;
  background-color: rgba(255, 255, 255, 0.25);
  margin-right: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 10px;
  padding: 2px;
`;

const Time = styled.Text`
  font-size: 16px;
  color: white;
`;

const Icon = styled.Image`
  width: 28px;
  height: 28px;
  margin-bottom: 3px;
`;

const Temperature = styled.Text`
  font-size: 16px;
  color: white;
`;

export default HourlyForecast;
