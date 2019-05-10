import React from "react";
import { Platform, StatusBar, StyleSheet, View } from "react-native";
import AppNavigator from "./navigation/AppNavigator";
import Loader from "./Loader";

//api key
const API_KEY = "3b74f09e6dd1ebf2775a1b1f8774bddc";

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
    cityName: "",
    success: false,
    today: {},
    forecast: [],
    error: null,
    test: "kurac"
  };

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return <Loader onFinish={this._handleFinishLoading} />;
    } else {
      return (
        <View style={styles.container}>
          {Platform.OS === "ios" && <StatusBar barStyle='default' />}
          <AppNavigator
            screenProps={{
              test: this.state.test
            }}
          />
        </View>
      );
    }
  }

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };

  _getWeather = async () => {
    //get form inputs
    const city = this.state.cityName;
    //fetch api
    const current_api = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    const forecast_api = await fetch(
      `http://api.openweathermap.org/data/2.5/forecast?q=${city}&mode=json&appid=${API_KEY}&units=metric`
    );
    const current = await current_api.json();
    const forecast = await forecast_api.json();
    console.log(current);
    console.log(forecast);

    //if city is not found
    if (current.cod === "404") {
      this.setState({
        error: "City not found"
      });
    }
    //if city is found
    else if (city) {
      this.setState({
        success: true,
        today: {
          display: current.cod,
          city: current.name,
          country: current.sys.country,
          temperature: current.main.temp,
          description: current.weather[0].description,
          humidity: current.main.humidity,
          pressure: current.main.pressure,
          icon: current.weather[0].icon,
          windSpeed: current.wind.speed,
          windDeg: current.wind.deg
        },
        dayOne: {
          day: forecast.list[8].dt_txt,
          icon: forecast.list[8].weather[0].icon,
          temperature: forecast.list[8].main.temp,
          description: forecast.list[8].weather[0].description
        },
        dayTwoo: {
          day: forecast.list[16].dt_txt,
          icon: forecast.list[16].weather[0].icon,
          temperature: forecast.list[16].main.temp,
          description: forecast.list[16].weather[0].description
        },
        dayThree: {
          day: forecast.list[24].dt_txt,
          icon: forecast.list[24].weather[0].icon,
          temperature: forecast.list[24].main.temp,
          description: forecast.list[24].weather[0].description
        },
        dayFour: {
          day: forecast.list[32].dt_txt,
          icon: forecast.list[32].weather[0].icon,
          temperature: forecast.list[32].main.temp,
          description: forecast.list[32].weather[0].description
        },
        error: undefined
      });
    }
    //if imput is empty
    else {
      this.setState({
        error: "Please enter City name"
      });
    }
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
