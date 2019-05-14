import React from "react";
import { Animated } from "react-native";

class FadeIn extends React.Component {
  state = {
    fadeAnim: new Animated.Value(0)
  };

  componentDidMount() {
    Animated.timing(this.state.fadeAnim, {
      toValue: 1,
      duration: this.props.duration
    }).start();
  }

  render() {
    let { fadeAnim } = this.state;

    return (
      <Animated.View
        style={{
          flex: 1,
          opacity: fadeAnim
        }}
      >
        {this.props.children}
      </Animated.View>
    );
  }
}

export default FadeIn;
