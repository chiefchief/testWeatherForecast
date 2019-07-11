import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16
  },
  input_field: {
    marginTop: 50,
    flexDirection: "row"
  },
  text_input: {
    flex: 1,
    height: 50,
    borderWidth: 1,
    borderColor: "blue"
  },
  search_button: {
    height: 50,
    paddingHorizontal: 10,
    marginLeft: 20,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "blue",
    borderRadius: 25
  },
  flat: {
    flex: 1,
    marginVertical: 20
  }
});
