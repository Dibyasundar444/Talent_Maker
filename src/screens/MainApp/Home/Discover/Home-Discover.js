import React from 'react';
import { 
    View, 
    Text, 
    StyleSheet,
    ScrollView,
    TextInput,
    TouchableOpacity,
    Image 
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons';
import { linearColor1, linearColor2 } from '../../../../Color/color';
import { user } from '../../../../DummyData/Data';

const dummyText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the Industry's.";
const hastag = "#Lorem #Ipsum #simply #dummy";

export default function Home() {
  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal:20,paddingVertical:20}}
      >
        <View style={styles.searchInputField}>
            <TextInput 
                placeholder='Show Your Talent Here'
                placeholderTextColor="gray"
                style={styles.searchInput}
            />
            <View style={{flexDirection:"row",alignItems:"center"}}>
                <FontAwesome5 name="camera" color={linearColor2} size={22} style={{marginHorizontal:20}} />
                <Feather name="upload" color={linearColor2} size={20} style={{marginRight:10}} />
            </View>
        </View>
        <>
            <ScrollView 
                style={{marginLeft:-10,marginRight:-10}}
                contentContainerStyle={{paddingVertical:20,paddingRight:10}}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
            >
                <TouchableOpacity 
                    style={{
                        alignItems:"center",
                        justifyContent:"center",
                        height:130,
                        width:100,
                        borderRadius:10,
                        elevation:5,
                        backgroundColor:"#fff",
                        marginLeft:10
                    }}
                    activeOpacity={0.9}
                >
                    <Entypo name='video-camera' color="#000" size={26} />
                </TouchableOpacity>
                {
                    user.map((item,index)=>(
                        <TouchableOpacity
                            style={{
                                height:130,
                                width:100,
                                elevation:5,
                                borderRadius:10,
                                backgroundColor:"#fff",
                                overflow:"hidden",
                                marginLeft:10
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
                                        alignItems:"center",
                                        justifyContent:"center",
                                        paddingHorizontal:5,
                                        backgroundColor:"#fff",
                                        marginLeft:5,
                                        marginTop:5,
                                        borderRadius:8,
                                        paddingVertical:1,
                                    }}
                                >
                                    <AntDesign name='staro' color={linearColor2} />
                                </View>
                                <View
                                    style={{
                                        alignItems:"center",
                                        paddingHorizontal:2,
                                        backgroundColor:"rgba(0,0,0,0.7)",
                                        marginRight:5,
                                        marginTop:5,
                                        borderRadius:8,
                                        paddingVertical:1,
                                        flexDirection:"row"
                                    }}
                                >
                                    <Octicons name='dot-fill' color={linearColor2} />
                                    <Text style={{color:"#fff",fontSize:7,marginHorizontal:2}}>{item.followers}</Text>
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
                                <Text style={{marginLeft:10,marginVertical:5,fontSize:9,color:"#fff"}}>join them</Text>
                            </View>
                        </TouchableOpacity>
                    ))
                }
            </ScrollView>
        </>
        <>
            <View style={{marginBottom:20}}>
                <View style={{flexDirection:"row",alignItems:"center"}}>
                    <View
                        style={{
                            height:40,
                            width:40,
                            borderRadius:20,
                            backgroundColor:"gray",
                            overflow:"hidden"
                        }}
                    >
                        <Image 
                            source={require('../../../../assets/img/user/user3.png')}
                            resizeMode="cover"
                            style={{height:"100%",width:"100%"}}
                        />
                    </View>
                    <View style={{marginLeft:20}}>
                        <Text style={{color:"#000",fontSize:12,fontWeight:"600"}}>User Name</Text>
                        <Text style={{color:"#000",fontSize:10}}>Location</Text>
                    </View>
                </View>
                <View style={{marginTop:10}}>
                    <Text style={{color:"#000",fontSize:10,}}>{dummyText}</Text>
                    <Text style={{color:"blue",fontSize:10,fontWeight:"500"}}>{hastag}</Text>
                </View>
                <View
                    style={{
                        borderRadius:10,
                        overflow:"hidden",
                        height:120,
                        marginTop:10
                    }}
                >
                    <Image 
                        source={require('../../../../assets/img/banner.png')}
                        style={{height:"100%",width:"100%"}}
                        resizeMode="cover"
                    />
                </View>
                <View
                    style={{
                        flexDirection:"row",
                        alignItems:"center",
                        justifyContent:"space-between",
                        marginHorizontal:20,
                        marginTop:8
                    }}
                >
                    <View style={{flexDirection:"row",alignItems:"center"}}>
                        <Image source={require('../../../../assets/icon/like-fill.png')} />
                        <Text style={{color:"#000",fontSize:10,marginLeft:5,fontWeight:"500"}}>1K</Text>
                    </View>
                    <View style={{flexDirection:"row",alignItems:"center"}}>
                        <Image source={require('../../../../assets/icon/chat.png')} />
                        <Text style={{color:"#000",fontSize:10,marginLeft:5,fontWeight:"500"}}>120</Text>
                    </View>
                    <View style={{flexDirection:"row",alignItems:"center"}}>
                        <Image source={require('../../../../assets/icon/share.png')} />
                        <Text style={{color:"#000",fontSize:10,marginLeft:5,fontWeight:"500"}}>70</Text>
                    </View>
                    <View>
                        <Image source={require('../../../../assets/icon/gift.png')} />
                    </View>
                </View>
            </View>
        </>
        <>
            <View style={{marginBottom:20}}>
                <View style={{flexDirection:"row",alignItems:"center"}}>
                    <View
                        style={{
                            height:40,
                            width:40,
                            borderRadius:20,
                            backgroundColor:"gray",
                            overflow:"hidden"
                        }}
                    >
                        <Image 
                            source={require('../../../../assets/img/user/user3.png')}
                            resizeMode="cover"
                            style={{height:"100%",width:"100%"}}
                        />
                    </View>
                    <View style={{marginLeft:20}}>
                        <Text style={{color:"#000",fontSize:12,fontWeight:"600"}}>User Name</Text>
                        <Text style={{color:"#000",fontSize:10}}>Location</Text>
                    </View>
                </View>
                <View style={{marginTop:10}}>
                    <Text style={{color:"#000",fontSize:10,}}>{dummyText}</Text>
                    <Text style={{color:"blue",fontSize:10,fontWeight:"500"}}>{hastag}</Text>
                </View>
                <View
                    style={{
                        borderRadius:10,
                        overflow:"hidden",
                        height:120,
                        marginTop:10
                    }}
                >
                    <Image 
                        source={require('../../../../assets/img/banner.png')}
                        style={{height:"100%",width:"100%"}}
                        resizeMode="cover"
                    />
                </View>
                <View
                    style={{
                        flexDirection:"row",
                        alignItems:"center",
                        justifyContent:"space-between",
                        marginHorizontal:20,
                        marginTop:8
                    }}
                >
                    <View style={{flexDirection:"row",alignItems:"center"}}>
                        <Image source={require('../../../../assets/icon/like-fill.png')} />
                        <Text style={{color:"#000",fontSize:10,marginLeft:5,fontWeight:"500"}}>1K</Text>
                    </View>
                    <View style={{flexDirection:"row",alignItems:"center"}}>
                        <Image source={require('../../../../assets/icon/chat.png')} />
                        <Text style={{color:"#000",fontSize:10,marginLeft:5,fontWeight:"500"}}>120</Text>
                    </View>
                    <View style={{flexDirection:"row",alignItems:"center"}}>
                        <Image source={require('../../../../assets/icon/share.png')} />
                        <Text style={{color:"#000",fontSize:10,marginLeft:5,fontWeight:"500"}}>70</Text>
                    </View>
                    <View>
                        <Image source={require('../../../../assets/icon/gift.png')} />
                    </View>
                </View>
            </View>
        </>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:"#fff"
    },
    header: {
        paddingTop: 50,
        paddingBottom:10,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        paddingHorizontal:20
    },
    searchInput: {
        paddingLeft:20,
        borderRadius:10,
        fontSize:12,
        color:"#000",
        maxWidth:"70%"
    },
    searchInputField: {
        elevation:9,
        backgroundColor:"#fff",
        height:40,
        borderRadius:10,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between"
    }
})