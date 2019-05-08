import React from "react";
import { StyleSheet, View } from "react-native";
//components
import Header from "../components/Header";

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={styles.container}>
        <Header />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4C86A8",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
});
