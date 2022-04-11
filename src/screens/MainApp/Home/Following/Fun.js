import React from 'react';
import { 
    View, 
    Text,
    StyleSheet 
} from 'react-native';


export default function Fun_Following() {
    return (
        <View style={styles.container}>
            <Text style={{color:"#000"}}>Fun</Text>
        </View>
    );
};

const styles=StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"#fff"
    }
})