import React from 'react';
import { 
    View, 
    Text,
    TouchableOpacity,
    Image,
    StyleSheet,
    ScrollView 
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from "react-native-vector-icons/Ionicons";
import { linearColor1, linearColor2 } from '../../Color/color';
import { NOTIFICATION } from '../../DummyData/Data';


export default function Notification({navigation}) {
    return (
        <View style={styles.container}>
            <LinearGradient
                style={{
                    paddingTop:40,
                    paddingBottom:10
                }}
                start={{x:0,y:0}}
                end={{x:1,y:0}}
                colors={[linearColor1,linearColor2]}
            >
                <View
                    style={{
                        position:"absolute",
                        bottom:4,
                        left:5,
                        zIndex:1
                    }}
                >
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={()=>navigation.goBack()}
                    >
                        <Ionicons 
                            name='chevron-back' 
                            color="#fff" 
                            size={28} 
                        />
                    </TouchableOpacity>
                </View>
                <Text style={{color:"#fff",fontWeight:"600",textAlign:"center"}}>NOTIFICATION</Text>
            </LinearGradient>
            <Text style={{
                color:"#9051f5",
                textAlign:"right",
                marginRight:20,
                marginTop:20,
                marginBottom:10,
                fontSize:12,
                fontWeight:"700"
                }}>
                    Clear All
                </Text>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingVertical:10,
                    paddingHorizontal:20
                }}
            >
                {
                    NOTIFICATION.map((item,index)=>(
                        <View style={styles.card} key={index}>
                            <View
                                style={{
                                    height:60,
                                    width:60,
                                    overflow:"hidden",
                                    borderRadius:5
                                }}
                            >
                                <Image 
                                    source={require('../../assets/img/user/user3.png')}
                                    style={{height:"100%",width:"100%"}}
                                    resizeMode="cover"
                                />
                            </View>
                            <View style={{marginTop:2,marginLeft:10}}>
                                <Text style={{color:"#000",fontSize:12,fontWeight:"600"}}>Title Here</Text>
                                <Text style={{color:"gray",fontSize:10,fontWeight:"600"}}>Lorem Ipsum</Text>
                            </View>
                        </View>
                    ))
                }
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    card: {
        backgroundColor:"#fff",
        paddingHorizontal:10,
        paddingVertical:10,
        borderRadius:5,
        elevation:2,
        flexDirection:"row",
        alignItems:"flex-start",
        marginBottom:10
    }
})