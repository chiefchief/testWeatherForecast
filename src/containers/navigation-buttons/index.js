import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { setTab } from "reducers/navigation";
import styles from "./styles";

function NavButtons({ navigation, dispatch }) {
  const goTo = index => {
    dispatch(setTab(index));
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => goTo(0)}
        disabled={navigation === 0}
        style={[styles.button, navigation === 0 && styles.active]}
      >
        <Text>{"MAP"}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => goTo(1)}
        disabled={navigation === 1}
        style={[styles.button, navigation === 1 && styles.active]}
      >
        <Text>{"SEARCH"}</Text>
      </TouchableOpacity>
    </View>
  );
}
const mapStateToProps = state => {
  return {
    navigation: state.navigation
  };
};

export default connect(mapStateToProps)(NavButtons);
