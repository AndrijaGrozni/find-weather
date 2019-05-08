import React from "react";
import { StyleSheet, View } from "react-native";

import { LogoText, PrimaryText, SecondaryText } from "../components/StyledText";

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={styles.container}>
        <LogoText>Logo Text</LogoText>
        <PrimaryText>Primary Text</PrimaryText>
        <SecondaryText>Secondary Text</SecondaryText>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
});
