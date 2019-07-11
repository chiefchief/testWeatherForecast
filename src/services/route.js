import { StackActions, NavigationActions } from "react-navigation";

let navigation;

function setRoot(navigatorRef) {
  navigation = navigatorRef;
}

function navigate(url, params = undefined) {
  navigation.dispatch(
    StackActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ key: url, routeName: url, params })
      ]
    })
  );
}

export default {
  navigate,
  setRoot
};
