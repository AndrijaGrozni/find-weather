import React from "react";
import { View, Text, Button } from "react-native";
import styled from "styled-components";
//components
import CurrentWeather from "../components/CurrentWeather";
import Forecast from "../components/Forecast";
import WeatherContext from "../context/weather-context";
import Background from "../components/Background";
import HourlyForecast from "../components/HourlyForecast";
import NoWeather from "../components/NoWeather";

export default class WeatherScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <WeatherContext.Consumer>
        {context => (
          <Background>
            {!context.success && <NoWeather />}
            {context.success && (
              <WrapperScroll
                contentContainerStyle={{
                  paddingTop: 40,
                  paddingBottom: 70
                }}
              >
                <CurrentWeather />
                <HourlyForecast />
                <Forecast />
              </WrapperScroll>
            )}
          </Background>
        )}
      </WeatherContext.Consumer>
    );
  }
}

const WrapperScroll = styled.ScrollView`
  flex: 1;
  padding-top: 10px;
`;
