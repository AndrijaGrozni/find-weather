import React from "react";
import styled from "styled-components";
//components
import IMAGES from "../constants/WeatherIcons";
import Layout from "../constants/Layout";
import WeatherContext from "../context/weather-context";

const CurrentWeatherDetails = () => {
  return (
    <WeatherContext.Consumer>
      {context => (
        <React.Fragment>
          <Headline>current weather details</Headline>
          <Wrapper>
            <Column left>
              {context.today.icon && (
                <Icon source={IMAGES[context.today.icon]} />
              )}
            </Column>
            <Column>
              <Stats>
                <Column>
                  <Details>
                    <DetailsText>humidity: </DetailsText>
                    <DetailsHeadline>{context.today.humidity}%</DetailsHeadline>
                  </Details>
                  <Details>
                    <DetailsText>pressure: </DetailsText>
                    <DetailsHeadline>
                      {context.today.pressure} hpa
                    </DetailsHeadline>
                  </Details>
                </Column>
                <Column>
                  <Details>
                    <DetailsText>wind speed: </DetailsText>
                    <DetailsHeadline>
                      {context.today.windSpeed} m/h
                    </DetailsHeadline>
                  </Details>
                  <Details>
                    <DetailsText>wind degree: </DetailsText>
                    <DetailsHeadline>
                      {Math.round(context.today.windDeg)}
                    </DetailsHeadline>
                  </Details>
                </Column>
              </Stats>
            </Column>
          </Wrapper>
        </React.Fragment>
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
  padding: 10px;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
`;

const Headline = styled.Text`
  color: white;
  font-size: 10px;
  text-transform: uppercase;
  padding: 20px 0 10px 15px;
  width: 100%;
`;

const Icon = styled.Image`
  width: 70px;
  height: 70px;
`;

const Column = styled.View`
  flex: ${props => (props.left ? "1" : "2")};
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
  padding: 5px 0 5px 8px;
  margin: 0 0 2px 0;
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
  font-size: 16px;
  font-weight: bold;
`;

export default CurrentWeatherDetails;
