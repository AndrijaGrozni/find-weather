import React from "react";
import { Platform } from "react-native";
import styled from "styled-components";
import { Ionicons } from "@expo/vector-icons";
import Layout from "../constants/Layout";
import NavigationService from "../navigation/NavigationService";

const NoWeather = () => (
  <Wrapper>
    <Headline>There is no selected location</Headline>
    <Description>
      Go back on find screen and search for a city name. Weather will be shown
      here.
    </Description>
    <Button onPress={() => NavigationService.navigate("Home")}>
      <Ionicons
        size={23}
        color='white'
        name={Platform.OS === "ios" ? "ios-arrow-back" : "md-arrow-back"}
      />
    </Button>
  </Wrapper>
);

const { window } = Layout;

const Wrapper = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Headline = styled.Text`
  font-size: 18px;
  color: white;
  width: ${window.width - 120};
  text-align: center;
  margin-bottom: 20px;
  font-weight: bold;
`;

const Description = styled.Text`
  color: white;
  width: ${window.width - 120};
  text-align: center;
  margin-bottom: 40px;
  font-size: 13px;
  line-height: 19px;
`;

const Button = styled.TouchableOpacity`
  width: 43px;
  height: 43px;
  background-color: rgba(255, 255, 255, 0.2);
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 2px;
`;

export default NoWeather;
