import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeStack } from "../../utils/StackNavigators/StackNavigators";
import LinearGradient from "react-native-linear-gradient";
import { linearColor1, linearColor2 } from "../../Color/color";

const Tab = createBottomTabNavigator();

export default function MainApp(){
    return(
        <Tab.Navigator 
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: styles.bottomTab,
                tabBarHideOnKeyboard: true
            }}
        >
            <Tab.Screen name="HomeStack" component={HomeStack} 
                options={{
                    tabBarIcon: ({focused}) => (
                        <Image source={require('../../assets/icon/tab1.png')} />
                    )
                }}
            />
            <Tab.Screen name="HomeStack1" component={HomeStack} 
                options={{
                    tabBarIcon: ({focused}) => (
                        <Image source={require('../../assets/icon/tab2.png')} />
                    )
                }}
            />
            <Tab.Screen name="HomeStack2" component={HomeStack} 
                options={{
                    tabBarIcon: ({focused}) => (
                        <LinearGradient
                            start={{x:0,y:0}}
                            end={{x:1,y:0}}
                            colors={[linearColor1,linearColor2]}
                            style={styles.gradient}
                        >
                            <Image source={require('../../assets/icon/tab3.png')} />
                        </LinearGradient>
                    )
                }}
            />
            <Tab.Screen name="HomeStack3" component={HomeStack} 
                options={{
                    tabBarIcon: ({focused}) => (
                        <Image source={require('../../assets/icon/tab4.png')} />
                    )
                }}
            />
            <Tab.Screen name="HomeStack4" component={HomeStack} 
                options={{
                    tabBarIcon: ({focused}) => (
                        <Image source={require('../../assets/icon/tab5.png')} />
                    )
                }}
            />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    bottomTab: {
        height:60
    },
    gradient: {
        height:45,
        width:45,
        borderRadius:45/2,
        alignItems:"center",
        justifyContent:"center"
    }
})