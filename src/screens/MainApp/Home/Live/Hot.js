import React from 'react';
import { 
    View, 
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    ScrollView 
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons';

import { user } from '../../../../DummyData/Data';
import { linearColor2 } from '../../../../Color/color';


export default function Hot() {
    return (
        <View style={styles.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{paddingTop:10}}
            >
                <View style={{
                    flexDirection:"row",
                    flexWrap:"wrap",
                    justifyContent:"space-between",
                    marginHorizontal:20
                }}>
                    {user.map((item,index)=>(
                        <TouchableOpacity
                            style={{
                                height:180,
                                width:"49%",
                                elevation:5,
                                borderRadius:10,
                                backgroundColor:"#fff",
                                overflow:"hidden",
                                marginBottom:10
                            }}
                            key={index}
                            activeOpacity={0.9}
                        >
                            <View
                                style={{
                                    position:"absolute",
                                    top:0,
                                    left:0,
                                    right:0,
                                    flexDirection:"row",
                                    justifyContent:"space-between",
                                    alignItems:"center",
                                    zIndex:1
                                }}
                            >
                                <View
                                    style={{
                                        flexDirection:"row",
                                        alignItems:"center",
                                        paddingHorizontal:8,
                                        backgroundColor:"#fff",
                                        marginLeft:5,
                                        marginTop:5,
                                        borderRadius:10,
                                        paddingVertical:1,
                                        elevation:1,
                                    }}
                                >
                                    <AntDesign name='staro' color={linearColor2} />
                                    <Text style={{fontSize:8,color:linearColor2,marginLeft:5,fontWeight:"500"}}>Super Star</Text>
                                </View>
                                <View
                                    style={{
                                        alignItems:"center",
                                        paddingHorizontal:5,
                                        backgroundColor:"rgba(0,0,0,0.7)",
                                        marginRight:5,
                                        marginTop:5,
                                        borderRadius:8,
                                        paddingVertical:1,
                                        flexDirection:"row"
                                    }}
                                >
                                    <Octicons name='dot-fill' color={linearColor2} />
                                    <Text style={{color:"#fff",fontSize:7,marginLeft:3}}>{item.followers}</Text>
                                </View>
                            </View>
                            <Image 
                                source={item.img}
                                style={{height:"100%",width:"100%"}}
                                resizeMode="cover"
                            />
                            <View
                                style={{
                                    position:"absolute",
                                    bottom:0,
                                    left:0,
                                    right:0,
                                    backgroundColor:"rgba(0,0,0,0.7)"
                                }}
                            >
                                <Text style={{marginLeft:10,marginVertical:5,fontSize:9,color:"#fff"}}>Join them and have fun now!</Text>
                            </View>
                        </TouchableOpacity>
                        ))}
                </View>
            </ScrollView>
        </View>
    );
};

const styles=StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"#fff"
    }
})