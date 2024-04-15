import React from "react";

import {NavigationContainer} from '@react-navigation/native'

import Tabs from "./src/components/Tabs";



const Tab = createBottomTabNavigator()
const App = () => {
  return (
    <NavigationContainer>
        <Tabs />
    </NavigationContainer>

  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default App