import React from 'react';
import {View, Text, StyleSheet, Animated, TouchableOpacity} from "react-native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import Home from '../../screens/MainApp/Home/Discover/Home-Discover';
import LinearGradient from 'react-native-linear-gradient';
import { linearColor1, linearColor2 } from '../../Color/color';
import LiveScreen from '../../screens/MainApp/Home/Live/LiveScreen';
import Hot from '../../screens/MainApp/Home/Live/Hot';
import All from '../../screens/MainApp/Home/Live/All';
import Singer from '../../screens/MainApp/Home/Live/Singer';
import Dancer from '../../screens/MainApp/Home/Live/Dancer';
import Fun from '../../screens/MainApp/Home/Live/Fun';
import Others from '../../screens/MainApp/Home/Live/Others';
import St_line from '../St_line';
import FollowingScreen from '../../screens/MainApp/Home/Following/FollowingScreen';
import Dancer_Following from '../../screens/MainApp/Home/Following/Dancer';
import Singer_Following from '../../screens/MainApp/Home/Following/Singer';
import Fun_Following from '../../screens/MainApp/Home/Following/Fun';
import Others_Following from '../../screens/MainApp/Home/Following/Others';

const Tab = createMaterialTopTabNavigator();

export const HomeTopTabs=()=>{

    function HomeTabBar({ state, descriptors, navigation }) {
        return (
            <LinearGradient 
                style={styles.header}
                start={{x:0,y:0}}
                end={{x:1,y:0}}
                colors={[linearColor1,linearColor2]}
            >
                {state.routes.map((route, index) => {
                    const { options } = descriptors[route.key];
                    const label =
                        options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                        ? options.title
                        : route.name;
            
                    const isFocused = state.index === index;
            
                    const onPress = () => {
                        const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                        });
            
                        if (!isFocused && !event.defaultPrevented) {
                        // The `merge: true` option makes sure that the params inside the tab screen are preserved
                        navigation.navigate({ name: route.name, merge: true });
                        }
                    };
            
                    const onLongPress = () => {
                        navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                        });
                    };
            
                    return (
                        <TouchableOpacity
                            key={route.name}
                            accessibilityRole="button"
                            accessibilityState={isFocused ? { selected: true } : {}}
                            accessibilityLabel={options.tabBarAccessibilityLabel}
                            testID={options.tabBarTestID}
                            onPress={onPress}
                            onLongPress={onLongPress}
                        >
                            <Text style={{color:"#fff",fontWeight:isFocused ? "700":"400"}}>{label}</Text>
                        </TouchableOpacity>
                    );
                })}
                <View
                    style={{
                        position:"absolute",
                        right:20,
                        top:15
                    }}
                >
                    <FontAwesome 
                        name='bell' 
                        color="#fff" 
                        size={24} 
                        onPress={()=>navigation.navigate("Notification")}
                    />
                </View>
            </LinearGradient>
        );
    };
    return(
        <Tab.Navigator
            tabBar={props => <HomeTabBar {...props} />}
            initialRouteName="Discover"
        >
            <Tab.Screen name="Discover" component={Home} options={{tabBarLabel:"DISCOVER"}} />
            <Tab.Screen name="Live" component={LiveScreen} options={{tabBarLabel:"Live"}} />
            <Tab.Screen name="Following" component={FollowingScreen} options={{tabBarLabel:"FOLLOWING"}} />
        </Tab.Navigator>
    );
};

export const LiveTopTabs=()=>{

    function LiveTabBar({ state, descriptors, navigation }) {
        return (
            <View 
                style={styles.liveTabHeader}
            >
                {state.routes.map((route, index) => {
                    const { options } = descriptors[route.key];
                    const label =
                        options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                        ? options.title
                        : route.name;
            
                    const isFocused = state.index === index;
            
                    const onPress = () => {
                        const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                        });
            
                        if (!isFocused && !event.defaultPrevented) {
                        // The `merge: true` option makes sure that the params inside the tab screen are preserved
                        navigation.navigate({ name: route.name, merge: true });
                        }
                    };
            
                    const onLongPress = () => {
                        navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                        });
                    };
            
                    return (
                        <TouchableOpacity
                            key={route.name}
                            accessibilityRole="button"
                            accessibilityState={isFocused ? { selected: true } : {}}
                            accessibilityLabel={options.tabBarAccessibilityLabel}
                            testID={options.tabBarTestID}
                            onPress={onPress}
                            onLongPress={onLongPress}
                        >
                            <Text 
                                style={{
                                    color:isFocused ? linearColor2 : "gray",
                                    fontWeight:isFocused ? "800":"500",
                                    fontSize:12,
                                    marginBottom:5
                                }}
                            >
                                {label}
                            </Text>
                            {
                                isFocused && 
                                <LinearGradient
                                    style={{ borderRadius:5,overflow:"hidden"}}
                                    start={{x:0,y:0}}
                                    end={{x:1,y:0}}
                                    colors={[linearColor1,linearColor2]}
                                >
                                    <View 
                                        style={{
                                            height:3.5
                                        }}
                                    />
                                </LinearGradient>
                            }
                        </TouchableOpacity>
                    );
                })}
            </View>
        );
    };
    return(
        <Tab.Navigator
            tabBar={props => <LiveTabBar {...props} />}
            initialRouteName="Hot"
        >
            <Tab.Screen name="Hot" component={Hot} options={{tabBarLabel:"Hot"}} />
            <Tab.Screen name="All" component={All} options={{tabBarLabel:"All"}} />
            <Tab.Screen name="Singer" component={Singer} options={{tabBarLabel:"Singer"}} />
            <Tab.Screen name="Dancer" component={Dancer} options={{tabBarLabel:"Dancer"}} />
            <Tab.Screen name="Fun" component={Fun} options={{tabBarLabel:"Fun"}} />
            <Tab.Screen name="Others" component={Others} options={{tabBarLabel:"Others"}} />
        </Tab.Navigator>
    );
};

export const FollowingTopTabs=()=>{

    function FollowingTabBar({ state, descriptors, navigation }) {
        return (
            <View 
                style={styles.liveTabHeader}
            >
                {state.routes.map((route, index) => {
                    const { options } = descriptors[route.key];
                    const label =
                        options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                        ? options.title
                        : route.name;
            
                    const isFocused = state.index === index;
            
                    const onPress = () => {
                        const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                        });
            
                        if (!isFocused && !event.defaultPrevented) {
                        // The `merge: true` option makes sure that the params inside the tab screen are preserved
                        navigation.navigate({ name: route.name, merge: true });
                        }
                    };
            
                    const onLongPress = () => {
                        navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                        });
                    };
            
                    return (
                        <TouchableOpacity
                            key={route.name}
                            accessibilityRole="button"
                            accessibilityState={isFocused ? { selected: true } : {}}
                            accessibilityLabel={options.tabBarAccessibilityLabel}
                            testID={options.tabBarTestID}
                            onPress={onPress}
                            onLongPress={onLongPress}
                        >
                            <Text 
                                style={{
                                    color:isFocused ? linearColor2 : "gray",
                                    fontWeight:isFocused ? "800":"500",
                                    fontSize:12,
                                    marginBottom:5
                                }}
                            >
                                {label}
                            </Text>
                            {
                                isFocused && 
                                <LinearGradient
                                    style={{ borderRadius:5,overflow:"hidden"}}
                                    start={{x:0,y:0}}
                                    end={{x:1,y:0}}
                                    colors={[linearColor1,linearColor2]}
                                >
                                    <View 
                                        style={{
                                            height:3.5
                                        }}
                                    />
                                </LinearGradient>
                            }
                        </TouchableOpacity>
                    );
                })}
            </View>
        );
    };
    return(
        <Tab.Navigator
            tabBar={props => <FollowingTabBar {...props} />}
            initialRouteName="Dancer"
        >
            <Tab.Screen name="Dancer" component={Dancer_Following} options={{tabBarLabel:"Dancer"}} />
            <Tab.Screen name="Singer" component={Singer_Following} options={{tabBarLabel:"Singer"}} />
            <Tab.Screen name="Fun" component={Fun_Following} options={{tabBarLabel:"Fun"}} />
            <Tab.Screen name="Others" component={Others_Following} options={{tabBarLabel:"Others"}} />
        </Tab.Navigator>
    );
};
const styles = StyleSheet.create({
    header: {
        paddingTop: 50,
        paddingBottom:10,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        paddingHorizontal:20,
    },
    liveTabHeader: {
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        marginHorizontal:30,
        marginTop:20,
        paddingBottom:20
    }
})