import React from "react";
import styled from "styled-components";
//components
import WeatherContext from "../context/weather-context";
import Layout from "../constants/Layout";

const Search = () => {
  return (
    <WeatherContext.Consumer>
      {context => (
        <Container>
          <Input onChangeText={context._onInput} placeholder='City name' />
          <SearchButton onPress={context._getWeather}>
            <Icon source={require("../assets/images/search.png")} />
          </SearchButton>
          {context.error && <Error>{context.error}</Error>}
        </Container>
      )}
    </WeatherContext.Consumer>
  );
};

const { window } = Layout;

const Container = styled.View`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Input = styled.TextInput`
  height: 50px;
  background-color: rgba(255, 255, 255, 0.95);
  width: ${window.width - 90};
  border-radius: 50;
  padding-left: 20px;
  padding-right: 68px;
  margin-top: 15px;
`;

const SearchButton = styled.TouchableOpacity`
  position: absolute;
  left: ${window.width - 93};
  top: 20;
  height: 40px;
  border-radius: 50;
  padding: 12px 10px;
  background-color: #00afbe;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Icon = styled.Image`
  width: 18px;
  height: 18px;
`;

const Error = styled.Text`
  font-size: 13px;
  color: white;
`;

export default Search;
