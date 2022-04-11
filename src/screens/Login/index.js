import React from 'react';
import { 
    View, 
    Text,
    StyleSheet,
    SafeAreaView,
    Image,
    TouchableOpacity,
    ScrollView 
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import St_line from '../../utils/St_line';

export default function Index({navigation}) {

  const text = `Lorem Ipsum is simply dummy text of \n the printing and typesetting industry`;
  return (
    <SafeAreaView style={styles.container}>
      <View style={{alignItems:"flex-end"}}>
        <TouchableOpacity 
          style={{
            alignItems:"center",
            marginBottom:40,
            flexDirection:"row",
            marginRight:10,
            marginTop:20
          }}
        >
          <Text style={{color:"blue",fontSize:12}}>Guest Login</Text>
          <Feather name="chevrons-right" color="blue" size={26} style={{bottom:-1}} />
        </TouchableOpacity>
      </View>
      <View style={{alignItems:"center"}}>
        <Image 
          source={require('../../assets/img/login-index-header.jpg')}
        />
        <View style={{marginTop:30}}>
          <Text
            style={{
              color:"#000",
              fontSize:12,
              textAlign:"center",
              marginBottom:30
            }}
          >{text}
          </Text>
          <TouchableOpacity
            style={styles.btns}
            activeOpacity={0.9}
            onPress={()=>navigation.navigate('PhoneLogin')}
          >
            <Image 
              source={require('../../assets/icon/phone.png')}
              style={{marginRight:20}}
            />
            <Text style={{color:"#000",fontSize:13}}>Login With Phone</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btns}
            activeOpacity={0.9}
            onPress={()=>navigation.navigate('UserDetailsFbLogin')}
          >
            <Image 
              source={require('../../assets/icon/fb.png')}
              style={{marginRight:20}}
            />
            <Text style={{color:"#000",fontSize:13}}>Login With Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btns}
            activeOpacity={0.9}
          >
            <Image 
              source={require('../../assets/icon/google.png')}
              style={{marginRight:20,height:20,width:20,left:-5}}
            />
            <Text style={{color:"#000",fontSize:13,left:-10}}>Login With Google</Text>
          </TouchableOpacity>
          <St_line 
            borderWidth={0.2}
            marginVertical={25}
            marginHorizontal={20}
            borderColor="gray"
          />
        </View>
      </View>
      <View>
      <View 
        style={{
          position:"absolute",left:0,right:0
        }}
      >
        <Text 
          style={{
            color:"#000",
            fontSize:12,
            textAlign:"center"
          }}
        >Login means you agree to
        </Text>
        <Text 
          style={{
            color:"#000",
            fontWeight:"500",
            textAlign:"center",
            fontSize:13
          }}
        >Terms of Use , Privacy Policy
        </Text>
      </View>
        <View style={{width:"100%",height:250}}>
          <Image 
            source={require('../../assets/img/login-Index.png')}
            style={{resizeMode:"contain",height:"100%",width:"100%",bottom:-2}}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "#fff"
  },
  btns: {
    flexDirection:"row",
    alignItems:"center",
    paddingVertical:10,
    backgroundColor:"#fff",
    borderRadius:30,
    elevation:5,
    paddingHorizontal:50,
    marginTop:10
  }
});