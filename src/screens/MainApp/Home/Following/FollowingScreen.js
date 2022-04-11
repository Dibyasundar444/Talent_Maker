import React from 'react';
import { 
  View, 
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity 
} from 'react-native';
import AntDesign from "react-native-vector-icons/AntDesign";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { linearColor2 } from '../../../../Color/color';
import { FollowingTopTabs } from '../../../../utils/StackNavigators/TopTabNav';


export default function FollowingScreen() {
  return (
    <View style={styles.container}>
      <View
        style={styles.inputFieldView}
      >
        <AntDesign name='search1' color={linearColor2} size={18} />
        <TextInput 
          style={styles.input}
          placeholder="Search Here"
          placeholderTextColor="gray"
        />
      </View>
      <FollowingTopTabs />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:"#fff"
  },
  inputFieldView: {
    backgroundColor:"#fff",
    flexDirection:"row",
    alignItems:"center",
    elevation:9,
    marginHorizontal:20,
    borderRadius:12,
    marginTop:20,
    height:40,
    overflow:"hidden",
    paddingLeft:15
  },
  input: {
    width:"100%",
    paddingLeft:15,
    color:"#000",
    fontSize:13
  }
})