import React from "react";
import { ScrollView, StyleSheet } from "react-native";
//components
import Weather from "../components/Weather";
import Forecast from "../components/Forecast";
import WeatherContext from "../context/weather-context";

export default class WeatherScreen extends React.Component {
  static navigationOptions = {
    title: "Weather"
  };

  render() {
    return (
      <WeatherContext.Consumer>
        {context => (
          <React.Fragment>
            {context.success && (
              <ScrollView
                style={styles.container}
                contentContainerStyle={styles.contentContainer}
              >
                <Weather />
                {context.forecasts.map((forecast, index) => {
                  return <Forecast key={index} {...forecast} />;
                })}
              </ScrollView>
            )}
          </React.Fragment>
        )}
      </WeatherContext.Consumer>
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
