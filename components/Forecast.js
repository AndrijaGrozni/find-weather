import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
//shared
import IMAGES from "../constants/WeatherIcons";

const Forecast = ({ day, description, icon, temperature }) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.left}>
        <Text style={styles.day}>{day}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      <View style={styles.right}>
        <Image style={styles.icon} source={IMAGES[icon]} />
        <Text style={styles.temperature}>{Math.round(temperature)}°</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "rgba(255, 255, 255, 0.35)",
    color: "white",
    paddingVertical: 35,
    paddingHorizontal: 10,
    borderRadius: 30,
    marginTop: 15
  },
  left: {
    display: "flex",
    flex: 2,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexDirection: "column"
  },
  day: {
    display: "flex",
    flex: 2,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexDirection: "column"
  },
  description: {
    margin: 0,
    fontSize: 13,
    color: "white"
  },
  right: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    flexDirection: "row",
    flex: 1,
    paddingLeft: 40
  },
  icon: {
    width: 40,
    height: 40
  },
  temperature: {
    fontSize: 32,
    color: "white",
    marginLeft: 10
  }
});

export default Forecast;
