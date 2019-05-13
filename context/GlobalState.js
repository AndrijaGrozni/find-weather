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
    hourly: [],
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
    const hourly_api = await fetch(
      `http://api.openweathermap.org/data/2.5/forecast/hourly?q=${cityName}&appid=${API_KEY}&units=metric`
    );
    const forecast_api = await fetch(
      `http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&mode=json&appid=${API_KEY}&units=metric`
    );
    const current = await current_api.json();
    const hourly = await hourly_api.json();
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
        hourly: [
          {
            time: hourly.list[0].dt_txt,
            icon: hourly.list[0].weather[0].icon,
            temperature: hourly.list[0].main.temp
          },
          {
            time: hourly.list[1].dt_txt,
            icon: hourly.list[1].weather[0].icon,
            temperature: hourly.list[1].main.temp
          },
          {
            time: hourly.list[2].dt_txt,
            icon: hourly.list[2].weather[0].icon,
            temperature: hourly.list[2].main.temp
          },
          {
            time: hourly.list[3].dt_txt,
            icon: hourly.list[3].weather[0].icon,
            temperature: hourly.list[3].main.temp
          },
          {
            time: hourly.list[4].dt_txt,
            icon: hourly.list[4].weather[0].icon,
            temperature: hourly.list[4].main.temp
          },
          {
            time: hourly.list[5].dt_txt,
            icon: hourly.list[5].weather[0].icon,
            temperature: hourly.list[5].main.temp
          },
          {
            time: hourly.list[6].dt_txt,
            icon: hourly.list[6].weather[0].icon,
            temperature: hourly.list[6].main.temp
          },
          {
            time: hourly.list[7].dt_txt,
            icon: hourly.list[7].weather[0].icon,
            temperature: hourly.list[7].main.temp
          },
          {
            time: hourly.list[8].dt_txt,
            icon: hourly.list[8].weather[0].icon,
            temperature: hourly.list[8].main.temp
          },
          {
            time: hourly.list[9].dt_txt,
            icon: hourly.list[9].weather[0].icon,
            temperature: hourly.list[9].main.temp
          },
          {
            time: hourly.list[10].dt_txt,
            icon: hourly.list[10].weather[0].icon,
            temperature: hourly.list[10].main.temp
          },
          {
            time: hourly.list[12].dt_txt,
            icon: hourly.list[12].weather[0].icon,
            temperature: hourly.list[12].main.temp
          },
          {
            time: hourly.list[13].dt_txt,
            icon: hourly.list[13].weather[0].icon,
            temperature: hourly.list[13].main.temp
          },
          {
            time: hourly.list[14].dt_txt,
            icon: hourly.list[14].weather[0].icon,
            temperature: hourly.list[14].main.temp
          }
        ],
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
      // navigate to weather screen
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
          hourly: this.state.hourly,
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
