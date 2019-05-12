import React from "react";

export default React.createContext({
  success: false,
  isLoadingComplete: false,
  cityName: "",
  success: false,
  today: {},
  forecasts: [],
  error: null,
  _getWeather: () => {},
  _onInput: e => {}
});
