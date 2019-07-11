import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import { getWeekDay } from "services/week-day";

export default function ForecastContainer({ item }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {getWeekDay(new Date(item.date).getDay())}
      </Text>
      <Text style={styles.text}>{`${item.day.avgtemp_c}`}</Text>
    </View>
  );
}
