import { combineReducers } from "redux";

export default combineReducers({
  navigation: require("./navigation").default,
  address: require("./address").default,
  forecast: require("./forecast").default
});
