import React from "react";
import { Text, SafeAreaView, StyleSheet } from "react-native";
import CurrentWeather from "./src/screens/CurrentWeather";
import UpcomingWeather from "./src/screens/UpcomingWeather";
import City from "./src/screens/City";
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { Feather } from '@expo/vector-icons'


const Tab = createBottomTabNavigator()

const Tabs = () => {
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
            <Tab.Screen name={'current'} component={CurrentWeather} options={{
            tabBarIcon: ({focused}) => {<Feather name={'droplet'} size={25} color={focused ? 'tomato' : 'black'} />}
            }}/>
            <Tab.Screen name={'upcoming'} component={UpcomingWeather} optoins={{
            tabBarIcon: ({focused}) => {<Feather name={'clockgit'} size={25} color={focused ? 'tomato' : 'black'} />}
            }}/>
            <Tab.Screen name={'city'} component={City} optoins={{
            tabBarIcon: ({focused}) => {<Feather name={'droplet'} size={25} color={focused ? 'tomato' : 'black'} />}
            }}
            />
        </Tab.Navigator>
    )
}

export default Tabs