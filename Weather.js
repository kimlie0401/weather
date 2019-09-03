import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
  Thunderstorm: {
    iconName: "weather-lightning",
    gradient: ["#373B44", "#4286f4"],
    title: "Thunderstorm in the house",
    subtitle: "Actually, outside of the house"
  },
  Drizzle: {
    iconName: "weather-hail",
    gradient: ["#89F7FE", "#66A6FF"],
    title: "Drizzle",
    subtitle: "Is like rain"
  },
  Rain: {
    iconName: "weather-rainy",
    gradient: ["#00C6FB", "#005BEA"],
    title: "Raining",
    subtitle: "For more info look outside"
  },
  Snow: {
    iconName: "weather-snowy",
    gradient: ["#7DE2FC", "#B9B6E5"],
    title: "Cold as balls",
    subtitle: "Do you want to build a snowman? Fuck no."
  },
  Atmosphere: {
    iconName: "weather-fog",
    gradient: ["#4da0b0", "#d39d38"],
    title: "",
    subtitle: ""
  },
  Haze: {
    iconName: "weather-fog",
    gradient: ["#4da0b0", "#d39d38"],
    title: "Haze",
    subtitle: "Just don't go outside"
  },
  Mist: {
    iconName: "weather-fog",
    gradient: ["#4da0b0", "#d39d38"],
    title: "Mist",
    subtitle: "Just don't go outside"
  },
  Smoke: {
    iconName: "weather-fog",
    gradient: ["#4da0b0", "#d39d38"],
    title: "Smoke",
    subtitle: "Just don't go outside"
  },
  Dust: {
    iconName: "weather-fog",
    gradient: ["#4da0b0", "#d39d38"],
    title: "Dust",
    subtitle: "Just don't go outside"
  },
  Fog: {
    iconName: "weather-fog",
    gradient: ["#4da0b0", "#d39d38"],
    title: "Fog",
    subtitle: "Just don't go outside"
  },
  Sand: {
    iconName: "weather-fog",
    gradient: ["#4da0b0", "#d39d38"],
    title: "Sand",
    subtitle: "Just don't go outside"
  },
  Dust: {
    iconName: "weather-fog",
    gradient: ["#4da0b0", "#d39d38"],
    title: "Dust",
    subtitle: "Just don't go outside"
  },
  Ash: {
    iconName: "weather-fog",
    gradient: ["#4da0b0", "#d39d38"],
    title: "Ash",
    subtitle: "Just don't go outside"
  },
  Squall: {
    iconName: "weather-fog",
    gradient: ["#4da0b0", "#d39d38"],
    title: "Squall",
    subtitle: "Just don't go outside"
  },
  Tornado: {
    iconName: "weather-fog",
    gradient: ["#4da0b0", "#d39d38"],
    title: "Tornado",
    subtitle: "Just don't go outside"
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#FF7300", "#FEF253"],
    title: "Sunny",
    subtitle: "It is beautiful"
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#D7D2CC", "#304352"],
    title: "Clouds",
    subtitle: "Boring....."
  }
};

export default function Weather({ temp, condition, name, temp_max, temp_min }) {
  return (
    <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
          name={weatherOptions[condition].iconName}
          size={180}
          color="white"
        ></MaterialCommunityIcons>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.condition}>{condition}</Text>
        <Text style={styles.temp}> {temp}º</Text>
        <Text style={styles.maxMin}>
          {temp_max} - {temp_min}
        </Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.subtitle}>
          {weatherOptions[condition].subtitle}
        </Text>
      </View>
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
  ]).isRequired,
  name: PropTypes.string.isRequired,
  temp_max: PropTypes.number.isRequired,
  temp_min: PropTypes.number.isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1
    // justifyContent: "center",
    // alignItems: "center"
  },
  temp: {
    color: "white",
    fontSize: 55
  },
  maxMin: {
    color: "white",
    fontSize: 20
  },

  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100
  },
  textContainer: {
    alignItems: "flex-start",
    paddingHorizontal: 40,
    justifyContent: "center",
    flex: 1
  },
  name: {
    color: "white",
    fontSize: 30
  },
  condition: {
    color: "white",
    fontSize: 20
  },
  title: {
    color: "white",
    fontSize: 44,
    fontWeight: "300",
    marginBottom: 10
  },
  subtitle: {
    color: "white",
    fontSize: 24,
    fontWeight: "600"
  }
});
