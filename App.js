import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import CurrentWeather from "./src/screens/CurrentWeather";
import UpcomingWeather from "./src/screens/UpcomingWeather";
import City from "./src/screens/City";



const App = () => {
  return (
    <View style={styles.container}>
      <CurrentWeather />
      <UpcomingWeather />
    </View>

  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default App