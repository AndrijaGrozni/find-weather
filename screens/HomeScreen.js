import React from "react";
import { StyleSheet, View } from "react-native";
//components
import Header from "../components/Header";
import Search from "../components/Search";
import Background from "../components/Background";

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <Background>
        <View style={styles.container}>
          <Header />
          <Search />
        </View>
      </Background>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
});
