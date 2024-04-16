import React, {useState, useEffect} from "react";
import { ActivityIndicator, View } from "react-native";
import { useState } from "react";
import { WEATHER_API_KEY } from '@env'

//api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

export const UseGetWeather = () => {
    const {container} = styles
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [location, setLocation] = useState(null)
    const [weather, setWeather] = useState([])
    const [lat, setLat] = useState(null)
    const [long, setLong] = useState([])

    const fetchWeatherData = async () => {
        try{
          const res = await fetch (`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${location.coords.long}&appid=${WEATHER_API_KEY}&units=metric`)
          const data = await res.json(setWeather(data))
          
    
        }catch (error) {
          setError('could not fetch weather')
        } finally {
          setLoading(false)
        }
    
      }
      
      useEffect(() => {
        (async() => {
          let { status } = await Location.requestForGroundPermissionsAsync
          if(status !== 'graned'){
            setError('permission to access location was denied')
            return
          }
          let location = await Location.getCurrentPositionAsync({})
          setLat(location.coords.latitude)
          setLong(location.coords.longitude)
          await fetchWeatherData()
        })()
      }, [lat, long])

      return [loading, error, weather]
} 