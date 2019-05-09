import React from "react";
import { ScrollView, StyleSheet } from "react-native";
//components
import Weather from "../components/Weather";
import Forecast from "../components/Forecast";

export default class WeatherScreen extends React.Component {
  static navigationOptions = {
    title: "Weather"
  };

  render() {
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <Weather />
        <Forecast />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#4C86A8"
  },
  contentContainer: {
    paddingTop: 30
  }
});
