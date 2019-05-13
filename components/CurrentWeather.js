import React from "react";
import { Text } from "react-native";
import styled from "styled-components";
//components
import IMAGES from "../constants/WeatherIcons";
import WeatherContext from "../context/weather-context";

const CurrentWeather = () => {
  return (
    <WeatherContext.Consumer>
      {context => (
        <Wrapper>
          <Header>
            <City>
              {context.today.city}, {context.today.country}
            </City>
          </Header>
          <Content>
            <Column>
              <Temperature>
                {Math.round(context.today.temperature)}°
              </Temperature>
            </Column>
            <Column>
              {context.today.icon && (
                <Icon source={IMAGES[context.today.icon]} />
              )}
              <Descritpion>{context.today.description}</Descritpion>
            </Column>
          </Content>
          <Stats>
            <Column>
              <Details>
                Humidity: <Text>{context.today.humidity}%</Text>
              </Details>
              <Details>
                Pressure: <Text>{context.today.pressure} hpa</Text>
              </Details>
            </Column>
            <Column>
              <Details>
                Wind speed: <Text>{context.today.windSpeed} m/h</Text>
              </Details>
              <Details>
                Wind degree: <Text>{Math.round(context.today.windDeg)}</Text>
              </Details>
            </Column>
          </Stats>
        </Wrapper>
      )}
    </WeatherContext.Consumer>
  );
};

const Wrapper = styled.View`
  background-color: rgba(255, 255, 255, 0.25);
  color: white;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 30;
  display: flex;
  height: 320px;
`;

const Header = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0 10px 0;
  width: 100%;
  height: 100px;
  flex-direction: column;
  border-bottom-color: white;
  border-bottom-width: 1px;
`;

const City = styled.Text`
  font-size: 34px;
  color: white;
  font-weight: 500;
  letter-spacing: 0.5;
`;

const Icon = styled.Image`
  width: 60px;
  height: 60px;
  margin-bottom: 5px;
`;

const Content = styled.View`
  padding: 10px 0 15px 0;
  display: flex;
  flex-direction: row;
  height: 120px;
  border-bottom-color: white;
  border-bottom-width: 1px;
  margin-bottom: 10px;
`;

const Temperature = styled.Text`
  font-size: 85px;
  flex: 1;
  color: white;
  font-weight: 500;
`;

const Descritpion = styled.Text`
  font-size: 14px;
  text-align: left;
  color: white;
`;

const Column = styled.View`
  flex: 1;
  text-align: center;
  display: flex;
  align-items: ${props => (props.stretch ? "stretch" : "center")};
  justify-content: center;
`;

const Stats = styled.View`
  flex: 1;
  text-align: left;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;

const Details = styled.Text`
  padding-top: 5px;
  padding-bottom: 5px;
  margin: 0 0 5px 0;
  color: white;
  text-align: left;
`;

export default CurrentWeather;
