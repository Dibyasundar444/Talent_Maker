import React from 'react';
import {
  View
} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Index from './src/screens/Login';
import PhoneLogin from './src/screens/Login/PhoneLogin/PhoneLogin';
import UserDetailsPhoneLogin from './src/screens/Login/PhoneLogin/UserDetailsPhoneLogin';
import UserDetailsFbLogin from './src/screens/Login/FbLogin/UserDetailsFbLogin';
import OTP_Verify from './src/screens/Login/PhoneLogin/OTP_verify';
import SelectCelebs from './src/screens/Login/PhoneLogin/SelectCelebs';
import BottomTabs from './src/screens/MainApp/BottomTab';

const Stack = createNativeStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='LoginIndex' component={Index} />
        <Stack.Screen name='PhoneLogin' component={PhoneLogin} />
        <Stack.Screen name='UserDetailsPhoneLogin' component={UserDetailsPhoneLogin} />
        <Stack.Screen name='UserDetailsFbLogin' component={UserDetailsFbLogin} />
        <Stack.Screen name='VerifyOTP' component={OTP_Verify} />
        <Stack.Screen name='SelectCelebs' component={SelectCelebs} />
        <Stack.Screen name='MainApp' component={BottomTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}