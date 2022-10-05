import React from "react";
import {View, Text, Button, StyleSheet, Platform} from "react-native";

const LibraryScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>Library Screen</Text>
            <Button title={'Hello ebana Library screen'}
                    onPress={() => alert('Button Clicked on library screen')}
            />
        </View>
    );
}
export default LibraryScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ECEEF4'
    }
})
