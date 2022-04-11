import React from 'react';
import { 
    View, 
    Text,
    StyleSheet 
} from 'react-native';


export default function Singer_Following() {
    return (
        <View style={styles.container}>
            <Text style={{color:"#000"}}>Singer</Text>
        </View>
    );
};

const styles=StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"#fff"
    }
})