import React from "react";
import { StyleSheet, View, Image, Dimensions } from "react-native";
//components
import { LogoText, SecondaryText } from "../components/StyledText";

const { width: WIDTH } = Dimensions.get("window");

const Header = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/logo.png")}
        style={styles.logo}
      />
      <LogoText>FindWeatherApp</LogoText>
      <SecondaryText style={styles.description}>
        Find your local temperature, five day forecast, conditions and more
        information, fast, simple and easy!
      </SecondaryText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 20,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "white",
    backgroundColor: "transparent",
    width: WIDTH,
    marginBottom: 20
  },
  logo: {
    width: 100,
    height: 100
  },
  description: {
    width: WIDTH - 90
  }
});

export default Header;
