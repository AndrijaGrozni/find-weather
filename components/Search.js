import React from "react";
import {
  Image,
  Dimensions,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity
} from "react-native";
//components
import { SecondaryText } from "../components/StyledText";

const { width: WIDTH } = Dimensions.get("window");

const Search = props => {
  return (
    <View style={styles.container}>
      <SecondaryText>Find weather for:</SecondaryText>
      <TextInput
        style={styles.input}
        onChangeText={props.onChange}
        placeholder='City name'
      />
      <TouchableOpacity style={styles.button} onPress={props.onPress}>
        <Image
          source={require("../assets/images/search.png")}
          style={styles.image}
        />
      </TouchableOpacity>
      {props.error && <SecondaryText>{props.error}</SecondaryText>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  input: {
    height: 50,
    backgroundColor: "white",
    width: WIDTH - 90,
    borderRadius: 50,
    paddingLeft: 20,
    paddingRight: 68,
    marginTop: 15
  },
  button: {
    position: "absolute",
    left: WIDTH - 93,
    top: 36,
    height: 40,
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 12,
    backgroundColor: "#00afbe",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    width: 18,
    height: 18
  }
});

export default Search;
