import React from "react";
import {View, Text, Button, StyleSheet} from "react-native";

const ProxyScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>Proxy Screen</Text>
            <Button title={'Hello ebana Homescreen'}
                    onPress={() => alert('Button Clicked on proxy')}
            />
        </View>
    );
}
export default ProxyScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ECEEF4'
    }
})
