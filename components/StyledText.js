import React from "react";
import { Text, StyleSheet } from "react-native";

export const LogoText = props => (
  <Text {...props} style={[props.style, styles.logoText]} />
);

export const PrimaryText = props => (
  <Text {...props} style={[props.style, styles.primary]} />
);

export const SecondaryText = props => (
  <Text {...props} style={[props.style, styles.secondary]} />
);

const styles = StyleSheet.create({
  logoText: {
    fontFamily: "Galada-regular",
    color: "black",
    fontSize: 32,
    textAlign: "center"
  },
  primary: {
    fontFamily: "Montserrat-regular",
    color: "black",
    fontSize: 22,
    textAlign: "center"
  },
  secondary: {
    fontFamily: "Montserrat-light",
    color: "black",
    fontSize: 12,
    textAlign: "center"
  }
});
