import React from "react";
import { ScrollView, StyleSheet } from "react-native";
//components
import { LogoText, PrimaryText, SecondaryText } from "../components/StyledText";

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
        <LogoText>Logo Text</LogoText>
        <PrimaryText>Primary Text</PrimaryText>
        <SecondaryText>Secondary Text</SecondaryText>
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
