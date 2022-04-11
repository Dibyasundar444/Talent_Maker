import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    TextInput,
    Image
} from 'react-native';
import AntDesign from "react-native-vector-icons/AntDesign";
import OTPInputView from '@twotalltotems/react-native-otp-input';
import NextBtn from '../../../utils/NextBtn';


export default function OTP_Verify({navigation}){

    const [num, setNum] = useState('');
    const [counter, setCounter] = useState(59);
    useEffect(() => {
        const timer = counter > 0 && setInterval(() => {
            let newTime =('0' + (counter - 1).toString()).slice(-2);
            setCounter(newTime);
        }, 1000);
        return () => clearInterval(timer);
    }, [counter]);  

    return(
        <View style={styles.container}>
            <View style={{marginHorizontal:20}}>
                <View style={{alignItems:"flex-start"}}>
                    <TouchableOpacity
                        style={{
                            flexDirection:"row",
                            marginTop:20,
                            alignItems:"center",
                            left:-5
                        }}
                        activeOpacity={1}
                        onPress={()=>navigation.goBack()}
                    >
                        <AntDesign name='arrowleft' color="#000" size={20} />
                        <Text style={{color:"#000",marginLeft:10}}>OTP</Text>
                    </TouchableOpacity>
                </View>
                <View style={{alignItems:"center",marginTop:60}}>
                    <OTPInputView
                        style={styles.input}
                        pinCount={4}
                        code={num}
                        onCodeChanged={(code)=>setNum(code)}
                        autoFocusOnLoad={false}
                        codeInputFieldStyle={styles.underlineStyleBase}
                        codeInputHighlightStyle={styles.underlineStyleHighLighted}
                        onCodeFilled = {(code) => setNum(code)}
                    />
                </View>
                <NextBtn 
                    text="Verification Code"
                    borderRadius={30}
                    marginTop={40}
                    marginBottom={30}
                    paddingVertical={15}
                    click={()=>navigation.navigate("UserDetailsPhoneLogin")}
                />
                <Text style={{color:"#000",fontWeight:"600",textAlign:"center"}}>00:{counter}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:"#fff"
    },
    underlineStyleBase: {
        width: 57,
        height: 50,
        color: "#000",
        borderBottomColor:"#000",
        borderWidth:0,
        borderBottomWidth:1

    },
    input: {
        width: "80%",
        height: 50,
    }
})