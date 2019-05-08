import React from "react";
import { StyleSheet, View, Image } from "react-native";
//components
import { LogoText, SecondaryText } from "../components/StyledText";

const Header = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/logo.png")}
        style={styles.logo}
      />
      <LogoText>FindWeatherApp</LogoText>
      <SecondaryText>
        Find your local temperature, five day forecast, conditions and more
        information, fast, simple and easy!
      </SecondaryText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingBottom: 20,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "white",
    backgroundColor: "transparent",
    width: "100%",
    marginBottom: 40
  },
  logo: {
    width: 100,
    height: 100
  }
});

export default Header;
