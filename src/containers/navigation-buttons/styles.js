import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    width,
    height: 40,
    flexDirection: "row"
  },
  button: {
    width: width * 0.5,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    backgroundColor: "lightblue"
  },
  active: {
    backgroundColor: "blue"
  }
});
