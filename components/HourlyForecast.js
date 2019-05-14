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
        <React.Fragment>
          <Headline>weather next hours</Headline>
          <Wrapper horizontal={true} showsHorizontalScrollIndicator={false}>
            {context.hourly.map((item, index) => (
              <Box key={index}>
                <Time>{Moment(item.time).format("HH")}h</Time>
                <Icon source={IMAGES[item.icon]} />
                <Temperature>{Math.round(item.temperature)}°</Temperature>
              </Box>
            ))}
          </Wrapper>
        </React.Fragment>
      )}
    </WeatherContext.Consumer>
  );
};

const Wrapper = styled.ScrollView`
  flex: 1;
  width: 100%;
  padding: 10px 15px 0 15px;
`;

const Headline = styled.Text`
  color: white;
  font-size: 10px;
  text-transform: uppercase;
  padding: 20px 0 0 15px;
  border-bottom-width: 1px;
  border-bottom-color: white;
  width: 100%;
`;

const Box = styled.View`
  width: 70px;
  height: 110px;
  background-color: rgba(255, 255, 255, 0.25);
  margin-right: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 10px;
  padding: 4px 2px;
`;

const Time = styled.Text`
  font-size: 17px;
  color: white;
`;

const Icon = styled.Image`
  width: 28px;
  height: 28px;
  margin-bottom: 3px;
`;

const Temperature = styled.Text`
  font-size: 17px;
  color: white;
`;

export default HourlyForecast;
