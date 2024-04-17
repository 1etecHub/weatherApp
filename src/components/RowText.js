import React from "react";
import { View, Text } from "react-native";

const RowText = (props) => {
    
    const { containerStyles, messageOne, messageTwo, messageOneStyles, messageTwoStyles } = props
    return (
        <view style={containerStyles}>
          <Text style={messageOneStyles}>{messageOne}</Text>
          <Text style={messageTwoStyles}>{messageTwo}</Text>
        </view>
    )
}


export default RowText


