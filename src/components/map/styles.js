import { StyleSheet, Dimensions } from "react-native";
const { width } = Dimensions.get("window");
export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  map: {
    width: "100%",
    height: "100%"
  },
  touch: {
    position: "absolute",
    width: width - 20,
    bottom: 10,
    left: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#000"
  }
});
