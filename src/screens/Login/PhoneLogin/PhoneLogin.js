import React from 'react';
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
import Ionicons from "react-native-vector-icons/Ionicons";
import LinearGradient from 'react-native-linear-gradient';
import St_line from '../../../utils/St_line';
import { linearColor1, linearColor2 } from '../../../Color/color';
import NextBtn from '../../../utils/NextBtn';


export default function PhoneLogin({navigation}){
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
                        <Text style={{color:"#000",marginLeft:10}}>Phone Number</Text>
                    </TouchableOpacity>
                </View>
                <Text style={{color:"gray",fontSize:14,marginTop:50}}>Country</Text>
                <View
                    style={{
                        flexDirection:"row",
                        alignItems:"center"
                    }}
                >
                    <TextInput 
                        placeholder='India'
                        placeholderTextColor="gray"
                        style={{
                            width:"92.5%",
                            paddingLeft:2,
                            paddingBottom:0,
                            color:"#000"
                        }}
                    />
                    <Image
                        source={require('../../../assets/icon/flag.png')}
                        style={{height:20,width:25,bottom:-5}}
                    />
                </View>
                <St_line 
                    borderWidth={0.5}
                />
                <Text style={{color:"gray",fontSize:14,marginTop:20}}>Phone Number</Text>
                <View
                    style={{
                        flexDirection:"row",
                        alignItems:"center",
                        justifyContent:"space-between"
                    }}
                >
                    <Text style={{color:"#000",bottom:-5}}>+91</Text>
                    <TextInput 
                        placeholder='Enter your phone number'
                        placeholderTextColor="gray"
                        style={{
                            width:"80%",
                            paddingLeft:20,
                            paddingBottom:0,
                            color:"#000"
                        }}
                        keyboardType="number-pad"
                        maxLength={10}
                    />
                    <Ionicons name='ios-checkmark-circle' color="blue" size={22} />
                </View>
                <St_line 
                    borderWidth={0.5}
                />
                <NextBtn 
                    text="Login with Phone"
                    borderRadius={20}
                    marginTop={40}
                    marginBottom={0}
                    paddingVertical={10}
                    click={()=>navigation.navigate("VerifyOTP")}
                />
                <View style={{alignItems:"center"}}>
                    <View
                        style={{
                            flexDirection:"row",
                            alignItems:"center",
                            marginVertical:20
                        }}
                    >
                        <St_line 
                            borderBottomWidth={0.2}
                            width={"20%"}
                        />
                        <Text style={{color:"#000",fontSize:13,marginHorizontal:5,top:-2}}>or</Text>
                        <St_line 
                            borderBottomWidth={0.2}
                            width={"20%"}
                        />
                    </View>
                    <Text style={{color:"#000",fontSize:13,top:-5,fontWeight:"500"}}>Other login methods</Text>
                    <View
                        style={{
                            flexDirection:"row",
                            alignItems:"center",
                            marginTop:10
                        }}
                    >
                        <TouchableOpacity
                            style={styles.circle}
                        >
                            <Image source={require('../../../assets/icon/fb.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.circle,{marginLeft:15}]}
                        >
                            <Image source={require('../../../assets/icon/google.png')} 
                                style={{height:25,width:25}}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View
                style={{alignItems:"center",flex:1,justifyContent:"flex-end"}}
            >
                <Image 
                    source={require('../../../assets/img/PhLogin.png')}
                    style={{width:"100%",height:"100%",resizeMode:"contain"}}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:"#fff"
    },
    btn: {
        borderRadius:20,
        alignItems:"center",
        justifyContent:"center",
        marginTop:40,
        paddingVertical:10
    },
    circle: {
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#fff",
        elevation:1,
        height:40,
        width:40,
        borderRadius:20
    }
})