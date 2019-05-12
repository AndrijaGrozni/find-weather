import React from "react";
import { Platform, StatusBar, StyleSheet, View } from "react-native";
import NavigationService from "./navigation/NavigationService";
import AppNavigator from "./navigation/AppNavigator";
import Loader from "./Loader";
import GlobalState from "./context/GlobalState";

export default class App extends React.Component {
  state = {
    isLoadingComplete: false
  };

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return <Loader onFinish={this._handleFinishLoading} />;
    } else {
      return (
        <GlobalState>
          <View style={styles.container}>
            {Platform.OS === "ios" && <StatusBar barStyle='default' />}
            <AppNavigator
              ref={navigatorRef => {
                NavigationService.setTopLevelNavigator(navigatorRef);
              }}
            />
          </View>
        </GlobalState>
      );
    }
  }

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
