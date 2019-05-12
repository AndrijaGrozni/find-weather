import React from "react";
import {
  Image,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity
} from "react-native";
//components
import WeatherContext from "../context/weather-context";
import { SecondaryText } from "../components/StyledText";
import Layout from "../constants/Layout";

const Search = () => {
  return (
    <WeatherContext.Consumer>
      {context => (
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            onChangeText={context._onInput}
            placeholder='City name'
          />
          <TouchableOpacity style={styles.button} onPress={context._getWeather}>
            <Image
              source={require("../assets/images/search.png")}
              style={styles.image}
            />
          </TouchableOpacity>
          {context.error && <SecondaryText>{context.error}</SecondaryText>}
        </View>
      )}
    </WeatherContext.Consumer>
  );
};

const { window } = Layout;

const styles = StyleSheet.create({
  container: {
    position: "relative",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  input: {
    height: 50,
    backgroundColor: "white",
    width: window.width - 90,
    borderRadius: 50,
    paddingLeft: 20,
    paddingRight: 68,
    marginTop: 15
  },
  button: {
    position: "absolute",
    left: window.width - 93,
    top: 20,
    height: 40,
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 12,
    backgroundColor: "#00afbe",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    width: 18,
    height: 18
  }
});

export default Search;
