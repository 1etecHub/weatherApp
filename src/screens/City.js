import React from "react";
import { Text, SafeAreaView, StyleSheet } from "react-native";


const City = () => {
    const {container} = styles
    return (
        <SafeAreaView style={container}>
            <Text></Text>
        </SafeAreaView>
    )

}


const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default City