import React from 'react';
import { 
    View, 
    Text,
    StyleSheet 
} from 'react-native';


export default function All() {
    return (
        <View style={styles.container}>
            <Text>Hot</Text>
        </View>
    );
};

const styles=StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"#fff"
    }
})