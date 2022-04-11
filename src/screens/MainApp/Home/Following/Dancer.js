import React from 'react';
import { 
    View, 
    Text,
    StyleSheet,
    Image,
    ScrollView 
} from 'react-native';


export default function Dancer_Following() {

    const dummyText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the Industry's.";
    const hastag = "#Lorem #Ipsum #simply #dummy";
    return (
        <View style={styles.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{paddingTop:10,paddingHorizontal:20}}
            >
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
};

const styles=StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"#fff"
    }
})