import React from "react";
import styled from "styled-components";
import { Platform } from "react-native";
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
        <Wrapper behavior={Platform.OS === "ios" ? "padding" : undefined}>
          <Header />
          <Search />
        </Wrapper>
      </Background>
    );
  }
}

const Wrapper = styled.KeyboardAvoidingView`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
