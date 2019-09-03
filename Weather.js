import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
  Thunderstorm: {
    iconName: "weather-lightning",
    gradient: ["#373B44", "#4286f4"]
  },
  Drizzle: {
    iconName: "weather-hail",
    gradient: ["#89F7FE", "#66A6FF"]
  },
  Rain: {
    iconName: "weather-rainy",
    gradient: ["#00C6FB", "#005BEA"]
  },
  Snow: {
    iconName: "weather-snowy",
    gradient: ["#7DE2FC", "#B9B6E5"]
  },
  Atmosphere: {
    iconName: "weather-fog",
    gradient: ["#4da0b0", "#d39d38"]
  },
  Haze: {
    iconName: "weather-fog",
    gradient: ["#4da0b0", "#d39d38"]
  },
  Mist: {
    iconName: "weather-fog",
    gradient: ["#4da0b0", "#d39d38"]
  },
  Smoke: {
    iconName: "weather-fog",
    gradient: ["#4da0b0", "#d39d38"]
  },
  Dust: {
    iconName: "weather-fog",
    gradient: ["#4da0b0", "#d39d38"]
  },
  Fog: {
    iconName: "weather-fog",
    gradient: ["#4da0b0", "#d39d38"]
  },
  Sand: {
    iconName: "weather-fog",
    gradient: ["#4da0b0", "#d39d38"]
  },
  Dust: {
    iconName: "weather-fog",
    gradient: ["#4da0b0", "#d39d38"]
  },
  Ash: {
    iconName: "weather-fog",
    gradient: ["#4da0b0", "#d39d38"]
  },
  Squall: {
    iconName: "weather-fog",
    gradient: ["#4da0b0", "#d39d38"]
  },
  Tornado: {
    iconName: "weather-fog",
    gradient: ["#4da0b0", "#d39d38"]
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#FF7300", "#FEF253"]
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#D7D2CC", "#304352"]
  }
};

export default function Weather({ temp, condition }) {
  return (
    <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
          name={weatherOptions[condition].iconName}
          size={96}
          color="white"
        ></MaterialCommunityIcons>
        <Text style={styles.temp}>{temp}</Text>
      </View>
      <View style={styles.halfContainer} />
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Mist",
    "Smoke",
    "Haze",
    "Dust",
    "Fog",
    "Sand",
    "Dust",
    "Ash",
    "Squall",
    "Tornado",
    "Clear",
    "Clouds"
  ]).isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  temp: {
    color: "white",
    fontSize: 34
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
