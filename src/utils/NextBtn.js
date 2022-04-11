import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { linearColor1, linearColor2 } from "../Color/color";



export default function NextBtn({click,marginTop,marginBottom,paddingVertical,borderRadius,text}) {
  return (
    <>
        <TouchableOpacity
            onPress={click}
            activeOpacity={0.8}
        >
            <LinearGradient 
                start={{x:0,y:0}} 
                end={{x:1,y:0}} 
                colors={[linearColor1,linearColor2]}
                style={{
                    borderRadius:borderRadius,
                    alignItems:"center",
                    justifyContent:"center",
                    marginTop:marginTop,
                    paddingVertical:paddingVertical,
                    marginBottom:marginBottom
                }}
            >
                <Text style={{color:"#fff",fontWeight:"600"}}>{text}</Text>
            </LinearGradient>
        </TouchableOpacity>
    </>
  );
};