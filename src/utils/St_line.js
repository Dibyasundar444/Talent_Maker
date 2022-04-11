import React from "react";
import {
    View
} from "react-native";

export default function St_line({borderWidth,marginVertical,marginHorizontal,borderColor,width,borderBottomWidth}){
    return(
        <View 
            style={{
              borderWidth:borderWidth,
              marginVertical:marginVertical,
              marginHorizontal:marginHorizontal,
              borderColor:borderColor,
              width:width,
              borderBottomWidth:borderBottomWidth
            }}
        />
    );
};