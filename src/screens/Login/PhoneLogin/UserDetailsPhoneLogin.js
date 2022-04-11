import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    ScrollView,
    SafeAreaView,
    TextInput
} from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { linearColor1, linearColor2 } from "../../../Color/color";
import NextBtn from "../../../utils/NextBtn";
import St_line from "../../../utils/St_line";


export default function UserDetailsPhoneLogin({navigation}){

    const [index, setIndex] = useState('0');

    return(
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={{marginHorizontal:20,paddingTop:40}}>
                <Text style={{color:"#000",fontSize:20,fontWeight:"600"}}>Welcome User</Text>
                <Text style={{color:"gray",fontSize:13}}>Improve the profile win more attention</Text>
                <TouchableOpacity
                    style={[styles.circle,{marginVertical:30}]}
                    activeOpacity={0.8}
                >
                    <LinearGradient
                        start={{x:0,y:0}}
                        end={{x:1,y:0}}
                        colors={[linearColor1,linearColor2]}
                        style={[styles.circle,{alignItems:"center",justifyContent:"center"}]}
                    >
                        <FontAwesome5 name="camera" color="#fff" size={22} />
                    </LinearGradient>
                </TouchableOpacity>
                <View
                    style={{
                        flexDirection:"row",
                        alignItems:"center"
                    }}
                >
                    <TouchableOpacity
                        style={{
                            flexDirection:"row",
                            alignItems:"center"
                        }}
                        onPress={()=>setIndex("0")}
                        activeOpacity={0.8}
                    >
                        <FontAwesome5 name={index === "0" ? "dot-circle" : "circle"} color="#000" size={18} />
                        <Text style={{color:"#000",marginLeft:10}}>Male</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            flexDirection:"row",
                            alignItems:"center",
                            marginLeft:50
                        }}
                        onPress={()=>setIndex("1")}
                        activeOpacity={0.8}
                    >
                        <FontAwesome5 name={index === "1" ? "dot-circle" : "circle"} color="#000" size={18} />
                        <Text style={{color:"#000",marginLeft:10}}>Female</Text>
                    </TouchableOpacity>
                </View>
                <Text style={{color:"gray",fontSize:13,marginTop:30}}>Name</Text>
                <TextInput 
                    placeholder='Name'
                    placeholderTextColor="gray"
                    style={{
                        width:"92.5%",
                        paddingLeft:2,
                        paddingBottom:0,
                        color:"#000"
                    }}
                />
                <St_line 
                    borderWidth={0.5}
                />
                <Text style={{color:"gray",fontSize:13,marginTop:30}}>Home Country</Text>
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
                <Text style={{color:"gray",fontSize:13,marginTop:30}}>Home Town</Text>
                <TextInput 
                    placeholder='Delhi'
                    placeholderTextColor="gray"
                    style={{
                        width:"92.5%",
                        paddingLeft:2,
                        paddingBottom:0,
                        color:"#000"
                    }}
                />
                <St_line 
                    borderWidth={0.5}
                />
                <Text style={{color:"gray",fontSize:13,marginTop:30}}>DOB</Text>
                <TextInput 
                    placeholder='12/04/2000'
                    placeholderTextColor="gray"
                    style={{
                        width:"92.5%",
                        paddingLeft:2,
                        paddingBottom:0,
                        color:"#000"
                    }}
                />
                <St_line 
                    borderWidth={0.5}
                />
                <NextBtn 
                    text="Next"
                    borderRadius={30}
                    marginTop={30}
                    paddingVertical={15}
                    marginBottom={10}
                    click={()=>navigation.navigate("SelectCelebs")}
                />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:"#fff"
    },
    circle: {
        height:80,
        width:80,
        borderRadius:40
    },
})