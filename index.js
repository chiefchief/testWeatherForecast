import React from "react";
import { AppRegistry } from "react-native";
import { Provider } from "react-redux";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Wrapper from "containers/wrapper";
import store from "./src/store";
import route from "services/route";

console.disableYellowBox = true;
console.ignoredYellowBox = [
  "Warning: ReactNative.createElement",
  "Require cycle: node_modules/rn-fetch-blob/index.js"
];

const Navigator = createStackNavigator(
  {
    Map: { screen: require("components/map").default },
    Search: { screen: require("components/search").default }
  },
  {
    initialRouteName: "Map",
    defaultNavigationOptions: {
      header: null
    },
    navigationOptions: {
      gesturesEnabled: false
    }
  }
);

const Weather = createAppContainer(Navigator);

const App = () => (
  //   <Weather ref={navigatorRef => NavigationService.setRoot(navigatorRef)} />
  <Provider store={store}>
    <Wrapper>
      <Weather ref={navigatorRef => route.setRoot(navigatorRef)} />
    </Wrapper>
  </Provider>
);

AppRegistry.registerComponent("weather", () => App);
