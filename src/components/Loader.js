import { View, ActivityIndicator, Text } from "react-native"

function Loader() {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <ActivityIndicator size="small" />
            <Text style={{ marginTop: 15 }}>Loading...</Text>
        </View>
    );
}

export default Loader;
