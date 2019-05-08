import React from "react";
import { ScrollView, Text, StyleSheet } from "react-native";

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: "Weather"
  };

  render() {
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <Text>Weather</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  },
  contentContainer: {
    paddingTop: 30
  }
});
