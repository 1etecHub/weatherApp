import React, {useState, useEffect} from "react";
import { ActivityIndicator, View } from "react-native";

import {NavigationContainer} from '@react-navigation/native'

import Tabs from "./src/components/Tabs";
import { useState } from "react";
import { WEATHER_API_KEY } from '@env'
import { UseGetWeather } from "./src/hooks/UseGetWeather";
import ErrorItem from "./src/components/ErrorItem";

//api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

const App = () => {
  const [loading, error, weather] = UseGetWeather

  

  if(weather && weather.list && !loading) {
    return (
      <NavigationContainer>
          <Tabs weather={weather} />
      </NavigationContainer>
  
    )
  }

  return (
    <View style={container}>
      {error ? (
      <ErrorItem />
      ) : (<ActivityIndicator size={'large'} color={'blue'} />) }
    
    </View>
  )

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  }
})

export default App