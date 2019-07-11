import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList
} from "react-native";
import { getLatLng } from "services/weather";
import { connect } from "react-redux";
import { setAddress } from "reducers/address";
import { resetForecast } from "reducers/forecast";
import ForecastContainer from "containers/forecast-container";
//styles
import styles from "./styles";

function Search({ address, forecast, dispatch }) {
  const [city, setCity] = useState(address.city);
  const getCoords = async city => {
    await getLatLng(city).then(result => {
      dispatch(setAddress({ city, ...result }));
    });
  };

  const renderItem = ({ item }) => {
    return <ForecastContainer key={item.data} item={item} />;
  };

  const keyExtractor = item => {
    return item.date;
  };

  const changeCity = text => {
    setCity(text);
    if (!text) {
      dispatch(resetForecast());
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.input_field}>
        <TextInput
          placeholder={"Type city name ..."}
          style={styles.text_input}
          value={city}
          onChangeText={changeCity}
        />
        <TouchableOpacity
          style={styles.search_button}
          onPress={() => getCoords(city)}
        >
          <Text> {"search"} </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        style={styles.flat}
        data={forecast.data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </View>
  );
}

const mapStateToProps = state => {
  return {
    address: state.address,
    forecast: state.forecast
  };
};

export default connect(mapStateToProps)(Search);
