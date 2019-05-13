import React from "react";
import styled from "styled-components";
//components
import CurrentWeather from "../components/CurrentWeather";
import Forecast from "../components/Forecast";
import WeatherContext from "../context/weather-context";
import Background from "../components/Background";

export default class WeatherScreen extends React.Component {
  static navigationOptions = {
    title: "Weather for"
  };

  render() {
    return (
      <WeatherContext.Consumer>
        {context => (
          <Background>
            {context.success && (
              <WrapperScroll
                contentContainerStyle={{ paddingTop: 30, paddingBottom: 50 }}
              >
                <CurrentWeather />
                {context.forecasts.map((forecast, index) => {
                  return <Forecast key={index} {...forecast} />;
                })}
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
  padding-left: 15px;
  padding-right: 15px;
`;
