import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, Text } from "react-native";
//styles
import styles from "./styles";
import { mapStyle } from "./mapStyle";
import MapView, { Marker } from "react-native-maps";
import { getWeather } from "services/weather";
import { setAddress } from "reducers/address";
import { connect } from "react-redux";
import { setTab } from "reducers/navigation";

const initialLocation = { latitude: 0, longitude: 0 };

function Map({ dispatch }) {
  const [current, setCurrent] = useState(initialLocation);
  const [marker, setMarker] = useState(initialLocation);
  const [now, setNow] = useState({ city: "", temperature: 0 });
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        setCurrent({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        });
      },
      error => {
        console.log(error, "error");
      },
      {
        enableHighAccuracy: false,
        timeout: 20000,
        maximumAge: 1000
      }
    );
  }, []);

  const getCoordinatesAndWeather = coor => {
    setMarker(coor);
    getWeather(coor.latitude, coor.longitude).then(
      result => {
        dispatch(setAddress(result));
        setNow({ city: result.city, temperature: result.temperature });
      },
      error => console.log(error, "ERROR")
    );
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        customMapStyle={mapStyle}
        region={{
          ...current,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
        onLongPress={item =>
          getCoordinatesAndWeather(item.nativeEvent.coordinate)
        }
      >
        {marker.latitude !== 0 && <Marker coordinate={marker} />}
      </MapView>
      {now.city !== "" && (
        <TouchableOpacity
          onPress={() => dispatch(setTab(1))}
          style={styles.touch}
        >
          <Text>{`${now.city}`}</Text>
          <Text>{`${now.temperature}°`}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
const mapStateToProps = state => {
  return {
    address: state.address
  };
};

export default connect(mapStateToProps)(Map);
