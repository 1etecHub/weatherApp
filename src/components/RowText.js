import React from "react";
import { View, Text } from "react-native";

const RowText = (props) => {
    const {} = props
    const { containerStyles, messageOne, messageTwo, messageOneStyles, messageTwoStyles } = props
    return (
        <view style={containerStyles}>
          <Text style={message2Styles}>{messageOne}</Text>
          <Text style={message2Styles}>{messageTwo}</Text>
        </view>
    )
}


export default RowText


