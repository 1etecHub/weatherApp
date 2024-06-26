import React from "react";
import { Text, SafeAreaView, StyleSheet } from "react-native";
import CurrentWeather from "./src/screens/CurrentWeather";
import UpcomingWeather from "./src/screens/UpcomingWeather";
import City from "./src/screens/City";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { Feather } from '@expo/vector-icons'


const Tab = createBottomTabNavigator()

const Tabs = ({weather}) => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'grey',
                tabBarStyle: {
                    backgroundColor: 'lightblue',
                },
                headerStyle: {
                    backgroundColor: 'lightblue',
                },
                headerTitleStyle: {
                    fontWeight: 'bold',
                    fontSize: 25,
                    color: 'tomato'
                }
            }}>
            <Tab.Screen name={'current'} options={{
            tabBarIcon: ({focused}) => {<Feather name={'droplet'} size={25} color={focused ? 'tomato' : 'black'} />}
            }}>
                {() => <CurrentWeather weatherData ={weather.list[0]} />}
            </Tab.Screen>
            <Tab.Screen name={'upcoming'} options={{
            tabBarIcon: ({focused}) => {<Feather name={'clockgit'} size={25} color={focused ? 'tomato' : 'black'} />}
            }}>
                {() => <UpcomingWeather weatherData ={weather.list} />}
            </Tab.Screen>
            <Tab.Screen name={'city'} options={{
            tabBarIcon: ({focused}) => {<Feather name={'droplet'} size={25} color={focused ? 'tomato' : 'black'} />}
            }}
            >
                {() => <CurrentWeather weatherData ={weather.list[0]} />}
            </Tab.Screen>
        </Tab.Navigator>
    )
}

export default Tabs