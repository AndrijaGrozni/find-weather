import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { AppLoading, Asset, Font, Icon } from "expo";

class Loader extends Component {
  render() {
    return (
      <View style={styles.loader}>
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this.props.onFinish}
        />
      </View>
    );
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require("./assets/images/logo.png"),
        require("./assets/images/search.png"),
        require("./assets/images/icons/01d.png"),
        require("./assets/images/icons/02d.png"),
        require("./assets/images/icons/01n.png"),
        require("./assets/images/icons/02n.png"),
        require("./assets/images/icons/03d.png"),
        require("./assets/images/icons/04n.png"),
        require("./assets/images/icons/04d.png"),
        require("./assets/images/icons/04n.png"),
        require("./assets/images/icons/09d.png"),
        require("./assets/images/icons/09n.png"),
        require("./assets/images/icons/10d.png"),
        require("./assets/images/icons/10n.png"),
        require("./assets/images/icons/11d.png"),
        require("./assets/images/icons/11n.png"),
        require("./assets/images/icons/13d.png"),
        require("./assets/images/icons/13n.png"),
        require("./assets/images/icons/50d.png"),
        require("./assets/images/icons/50n.png")
      ]),
      Font.loadAsync({
        ...Icon.Ionicons.font,
        "Galada-regular": require("./assets/fonts/Galada-Regular.ttf"),
        "Montserrat-regular": require("./assets/fonts/Montserrat-Regular.ttf"),
        "Montserrat-light": require("./assets/fonts/Montserrat-Light.ttf")
      })
    ]);
  };

  _handleLoadingError = error => {
    console.warn(error);
  };
}

const styles = StyleSheet.create({
  loader: {
    backgroundColor: "black"
  }
});

export default Loader;
