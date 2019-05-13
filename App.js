import React from "react";
import { Platform, StatusBar } from "react-native";
import styled from "styled-components";

//components
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
          <Wrapper>
            {Platform.OS === "ios" && <StatusBar barStyle='default' />}
            <AppNavigator
              ref={navigatorRef => {
                NavigationService.setTopLevelNavigator(navigatorRef);
              }}
            />
          </Wrapper>
        </GlobalState>
      );
    }
  }

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

const Wrapper = styled.View`
  flex: 1;
  background-color: #4c86a8;
`;
