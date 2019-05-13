import React from "react";
import { StyleSheet, View } from "react-native";
import styled from "styled-components";
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
        <Wrapper>
          <Header />
          <Search />
        </Wrapper>
      </Background>
    );
  }
}

const Wrapper = styled.View`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
