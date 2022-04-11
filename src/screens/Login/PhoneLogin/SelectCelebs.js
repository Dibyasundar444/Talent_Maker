import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    ScrollView,
    SafeAreaView,
} from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import NextBtn from "../../../utils/NextBtn";
import { user } from "../../../DummyData/Data";

export default function SelectCelebs({navigation}){

    const [selects, setSelects] = useState([]);

    const clickToSelect=(index)=>{
        !selects.includes(`${index}`) 
        ?
        setSelects([...selects,`${index}`]) 
        :
        setSelects(
            selects.filter(
                item => item !== `${index}`
            )
        )

    };

    return(
        <SafeAreaView style={styles.container}>
            <View style={{marginHorizontal:20,marginTop:20,flex:1}}>
                <View 
                    style={{
                        flexDirection:"row",
                        alignItems:"center",
                        justifyContent:"space-between",
                        marginBottom:10
                    }}
                >
                    <Text style={{color:"#000",fontWeight:"500"}}>Top Trending Celebrity</Text>
                    <TouchableOpacity
                        style={{
                            flexDirection:"row",
                            alignItems:"center"
                        }}
                        activeOpacity={0.8}
                        onPress={()=>navigation.navigate("MainApp")}
                    >
                        <Text style={{color:"blue",fontWeight:"500",fontSize:13}}>Skip</Text>
                        <Feather name="chevrons-right" color="blue" size={26} style={{bottom:-1}} />
                    </TouchableOpacity>
                </View>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{paddingVertical:10,alignItems:"flex-start"}}
                    style={{marginBottom:80}}
                >
                    <View 
                        style={{
                            flexDirection:"row",
                            flexWrap:"wrap",
                            justifyContent:"space-between"
                        }}
                    >
                    {
                        user.map((item,index)=>(
                            <View style={{alignItems:"center",marginHorizontal:5,marginBottom:15}} key={index}>
                                <TouchableOpacity
                                    style={styles.circle}
                                    activeOpacity={0.8}
                                    onPress={()=>clickToSelect(index)}
                                >
                                    <Image 
                                        source={item.img}
                                        resizeMode="cover"
                                        style={{height:"100%",width:"100%"}}
                                    />
                                </TouchableOpacity>
                                {
                                    selects.includes(`${index}`) &&
                                    <View
                                        style={{
                                            position:"absolute",
                                            bottom:39,
                                            right:0
                                        }}
                                    >
                                        <Ionicons name='ios-checkmark-circle' style={{marginLeft:-25}} color="blue" size={22} />
                                    </View>
                                }
                                <Text style={{color:"#000",fontSize:13,fontWeight:"500"}}>{item.name}</Text>
                                <Text style={{color:"gray",fontSize:10}}>{item.followers}</Text>
                            </View>
                        ))
                    }
                    </View>
                </ScrollView>
                <View
                    style={{
                        position:"absolute",
                        bottom:0,
                        left:0,
                        right:0
                    }}
                >
                    <NextBtn 
                        text="Done"
                        borderRadius={30}
                        marginBottom={20}
                        paddingVertical={15}
                        marginTop={10}
                        click={()=>navigation.navigate("MainApp")}
                    />
                </View>
            </View>
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
        borderRadius:40,
        overflow:"hidden",
        marginBottom:5
    }
})