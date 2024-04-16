import React, {useState, useEffect} from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const Counter = () => {

    const {container, title} = styles
    const [count, setCount] = useState(0)
    const [newCount, setNewCount] = useState(0)

    useEffect(() => {

    }, [count])

    return (
        <View style={container}>
            <Text style={title}>{`count: ${count}`}</Text>
            <Button 
            color={'red'} 
            title={'increase the count'} 
            onPress={() => setCount(count + 1)} />

            <Button 
            color={'green'} 
            title={'decrease the count'} 
            onPress={() => setCount(count - 1)} />

            <Button 
            color={'green'} 
            title={'decrease the count'} 
            onPress={() => setNewCount(count - 1)} />

            <Button 
            color={'green'} 
            title={'decrease the count'} 
            onPress={() => setNewCount(count - 1)} />      
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'orange'
    },
    title: {
        alignSelf: 'center',
        fontSize: 25,
        marginTop: 25
    }
})

export default Counter