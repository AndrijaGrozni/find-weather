import React from "react";
import { Text } from "react-native";
import styled from "styled-components";
//components
import IMAGES from "../constants/WeatherIcons";
import Layout from "../constants/Layout";
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
                <DetailsText>Humidity: </DetailsText>
                <DetailsHeadline>{context.today.humidity}%</DetailsHeadline>
              </Details>
              <Details>
                <DetailsText>Pressure: </DetailsText>
                <DetailsHeadline>{context.today.pressure} hpa</DetailsHeadline>
              </Details>
            </Column>
            <Column>
              <Details>
                <DetailsText>Wind speed: </DetailsText>
                <DetailsHeadline>{context.today.windSpeed} m/h</DetailsHeadline>
              </Details>
              <Details>
                <DetailsText>Wind degree: </DetailsText>
                <DetailsHeadline>
                  {Math.round(context.today.windDeg)}
                </DetailsHeadline>
              </Details>
            </Column>
          </Stats>
        </Wrapper>
      )}
    </WeatherContext.Consumer>
  );
};

const { window } = Layout;

const Wrapper = styled.View`
  background-color: rgba(255, 255, 255, 0.25);
  color: white;
  width: ${window.width - 30};
  margin: 0 auto;
  text-align: center;
  padding: 20px;
  border-radius: 10px;
  display: flex;
`;

const Header = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: column;
  border-bottom-color: white;
  border-bottom-width: 1px;
  padding-bottom: 15px;
`;

const City = styled.Text`
  font-size: 34px;
  color: white;
  font-weight: 500;
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

const Details = styled.View`
  padding: 5px 10px 5px 15px;
  margin: 0 0 5px 0;
  flex: 1;
  width: 100%;
  text-align: left;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;

const DetailsText = styled.Text`
  color: white;
  margin-bottom: 2px;
`;

const DetailsHeadline = styled.Text`
  color: white;
  font-size: 18px;
  font-weight: bold;
`;

export default CurrentWeather;
