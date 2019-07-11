import React from "react";
import { View } from "react-native";
import styles from "./styles";
import NavButtons from "../navigation-buttons";

export default function Wrapper({ children }) {
  return (
    <View style={styles.layout}>
      {children}
      <NavButtons />
    </View>
  );
}
