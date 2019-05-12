import React, { Component } from "react";
import WeatherContext from "./weather-context";
import NavigationService from "../navigation/NavigationService";

//api key
const API_KEY = "3b74f09e6dd1ebf2775a1b1f8774bddc";

class GlobalState extends Component {
  state = {
    cityName: "",
    success: false,
    today: {},
    forecasts: [],
    error: null
  };

  _onInput = e => {
    this.setState({
      cityName: e
    });
  };

  _getWeather = async () => {
    const { cityName } = this.state;
    //fetch weather api
    const current_api = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
    );
    const forecast_api = await fetch(
      `http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&mode=json&appid=${API_KEY}&units=metric`
    );
    const current = await current_api.json();
    const forecast = await forecast_api.json();

    //if city is not found
    if (current.cod === "404") {
      this.setState({
        error: "City not found"
      });
    }
    //if city is found
    else if (cityName) {
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
        forecasts: [
          {
            day: forecast.list[8].dt_txt,
            icon: forecast.list[8].weather[0].icon,
            temperature: forecast.list[8].main.temp,
            description: forecast.list[8].weather[0].description
          },
          {
            day: forecast.list[16].dt_txt,
            icon: forecast.list[16].weather[0].icon,
            temperature: forecast.list[16].main.temp,
            description: forecast.list[16].weather[0].description
          },
          {
            day: forecast.list[24].dt_txt,
            icon: forecast.list[24].weather[0].icon,
            temperature: forecast.list[24].main.temp,
            description: forecast.list[24].weather[0].description
          },
          {
            day: forecast.list[32].dt_txt,
            icon: forecast.list[32].weather[0].icon,
            temperature: forecast.list[32].main.temp,
            description: forecast.list[32].weather[0].description
          }
        ],
        error: null
      });
      NavigationService.navigate("Weather");
    }
    //if imput is empty
    else {
      this.setState({
        error: "Please enter City name"
      });
    }
  };
  render() {
    return (
      <WeatherContext.Provider
        value={{
          success: this.state.success,
          cityName: this.state.cityName,
          today: this.state.today,
          forecasts: this.state.forecasts,
          _getWeather: this._getWeather,
          _onInput: this._onInput,
          error: this.state.error
        }}
      >
        {this.props.children}
      </WeatherContext.Provider>
    );
  }
}

export default GlobalState;
