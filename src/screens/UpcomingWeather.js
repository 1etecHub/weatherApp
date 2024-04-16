import React from "react";
import { Text, SafeAreaView, StyleSheet, FlatList, StatusBar, ImageBackground } from "react-native";
import { Feather } from '@expo/vector-icons'
import ListItem from "../components/ListItem";




// const DATA = [
//     {
//       dt_txt: "2024-04-13",
//       main: {
//         temp_min: 8.55,
//         temp_max: 7.55
//       },
//       weather: [ {
//         main: 'clear'
//       }
//       ]
//     },
  
//     {
//       dt_txt: "2024-04-14",
//       main: {
//         temp_min: 8.55,
//         temp_max: 7.55
//       },
//       weather: [
//         {
//           main: 'clear'
//         }
//       ]
//     },
    
//   ]



const UpcomingWeather = ({weatherData}) => {
    const renderSeparator = () => <View style={{backgroundColor:'red', height: 2}} />;
    const renderItem = ({item}) => (
        <ListItem 
        condition={item.weather[0].main}
        dt_txt={item.dt_txt}
        min={item.main.temp_min}
        max={item.main.temp_max}
        />
    )

    const {container, image} = styles
    
    return (
        <SafeAreaView style={container}>
            <ImageBackground 
            source={require('../../assets/thunderstorm.jpg')} style={image}>
              
                <FlatList
                data={weatherData}
                renderItem={renderItem}
                keyExtractor={(item) => item.dt_txt}
                ItemSeparatorComponent={renderSeparator}
                />
            </ImageBackground>
        </SafeAreaView>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        backgroundColor: 'royalblue'
    },
    image: {
        flex: 1
    }

})


export default UpcomingWeather