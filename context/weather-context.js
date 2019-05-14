import React from "react";

export default React.createContext({
  success: false,
  isLoadingComplete: false,
  cityName: "",
  success: false,
  today: {},
  hourly: [],
  forecasts: [],
  _getWeather: () => {},
  _onInput: e => {},
  weatherClick: () => {}
});
