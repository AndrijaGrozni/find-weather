import React from "react";
import styled from "styled-components";
import Layout from "../constants/Layout";

const Background = props => {
  return (
    <BackgroundImage source={require("../assets/images/bbbb.jpg")}>
      {props.children}
    </BackgroundImage>
  );
};

const { window } = Layout;

const BackgroundImage = styled.ImageBackground`
  width: ${window.width};
  height: ${window.height};
  flex: 1;
`;

export default Background;
