import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

const OurButton = () => {
    const {container, buttonText} = styles
    const onPress = () => {
        console.log('pressed')
    }
    return (
        <TouchableOpacity style={container} onPress={onPress}>
            <Text style={buttonText}></Text>
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    container: {
        elevation: 8,
        backgroundColor: 'blue',
        borderRadius: 10,
        padding: 5


    },
    buttonText: {
        fontSize: 15,
        color: 'white',
        alignSelf: 'center'

    }

})

export default OurButton