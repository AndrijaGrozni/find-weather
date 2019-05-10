import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import WeatherScreen from "../screens/WeatherScreen";
import Weather from "../components/Weather";

//home page
const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Weather: Weather
});
HomeStack.navigationOptions = {
  tabBarLabel: "Find",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? `ios-search` : "md-search"}
    />
  )
};

//weather page
const WeatherStack = createStackNavigator({
  Weather: WeatherScreen
});
WeatherStack.navigationOptions = {
  tabBarLabel: "Weather",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-cloud" : "md-cloud"}
    />
  )
};

export default createBottomTabNavigator({
  HomeStack,
  WeatherStack
});
