import React from "react";
import { Text, View, StyleSheet } from "react-native";
//components
import { PrimaryText, SecondaryText } from "./StyledText";
import IMAGES from "../constants/WeatherIcons";

const Weather = props => {
  const {
    icon,
    city,
    country,
    temperature,
    description,
    humidity,
    pressure,
    windSpeed,
    windDeg
  } = props;

  return (
    <View style={styles.wrapper}>
      <View style={styles.header}>
        <PrimaryText style={styles.city}>
          {city}, {country}
        </PrimaryText>
      </View>
      <View style={styles.content}>
        <View style={styles.column}>
          <PrimaryText style={styles.temperature}>
            {Math.round(temperature)}°
          </PrimaryText>
        </View>
        <View style={styles.column}>
          {icon && <Image style={styles.icon} source={IMAGES[icon]} />}
          <SecondaryText>{description}</SecondaryText>
        </View>
      </View>
      <View style={styles.stats}>
        <View style={styles.column}>
          <SecondaryText style={styles.details}>
            Humidity: <Text>{humidity}%</Text>
          </SecondaryText>
          <SecondaryText style={styles.details}>
            Pressure: <Text>{pressure} hpa</Text>
          </SecondaryText>
        </View>
        <View style={styles.column}>
          <SecondaryText style={styles.details}>
            Wind speed: <Text>{windSpeed} m/h</Text>
          </SecondaryText>
          <SecondaryText style={styles.details}>
            Wind degree: <Text>{Math.round(windDeg)}</Text>
          </SecondaryText>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    color: "white",
    width: "100%",
    textAlign: "center",
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 30,
    display: "flex",
    height: 320
  },
  header: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    width: "100%",
    height: 100,
    flexDirection: "column",
    borderBottomColor: "white",
    borderBottomWidth: 1
  },
  city: {
    fontSize: 34,
    color: "white"
  },
  content: {
    paddingTop: 10,
    paddingBottom: 15,
    display: "flex",
    flexDirection: "row",
    height: 120,
    borderBottomColor: "white",
    borderBottomWidth: 1,
    marginBottom: 10
  },
  column: {
    flex: 1,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  temperature: {
    fontSize: 85,
    flex: 1,
    color: "white"
  },
  image: {
    width: 60,
    height: 60,
    marginBottom: 5
  },
  stats: {
    flex: 1,
    textAlign: "left",
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start"
  },
  details: {
    paddingTop: 5,
    paddingBottom: 5,
    marginBottom: 5,
    color: "white",
    textAlign: "left"
  },
  description: {
    fontSize: 14,
    textAlign: "left",
    color: "white"
  }
});

export default Weather;
