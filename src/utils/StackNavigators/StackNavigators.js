import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeTopTabs } from './TopTabNav';
import Notification from '../../screens/MainApp/Notification';

const Stack = createNativeStackNavigator();

export const HomeStack=()=>{
    return(
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name='Home' component={HomeTopTabs} />
            <Stack.Screen name='Notification' component={Notification} />
        </Stack.Navigator>
    )
};