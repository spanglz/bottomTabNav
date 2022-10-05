import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    shadow: {
        shadowColor: 'gray',
        shadowOffset: {
            width: 0,
            height: 0
        },
        shadowOpacity: 3.5,
        shadowRadius: 7,
        elevation: 0
    },
    tabBarMain: {
        position: 'absolute',
        bottom: 25,
        left: 15,
        right: 15,
        elevation: 0,
        backgroundColor: '#1B2A3A',
        borderRadius: 30,
        height: 80
    },
    tabBarView: {
        alignItems: 'center',
        justifyContent: 'center',
        top: 15
    },
    tabBarText: {
        color: 'white',
        fontSize: 12,
        marginTop: 5
    },
    container: {
        backgroundColor: '#ECEEF4',
        flex: 1,
    },
    profileItem: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        alignContent: "center",
        padding: 15,
        border: "1 solid black",
        height: 70,
        backgroundColor: '##ECEEF4'
    },
    icon: {
        color: '#414452',
        // justifyContent: 'center'
    },
    checkbox: {
        flex: 1,
        maxWidth: 30,
        marginLeft: 5
    },
    profilePlatform: {
        flex: 2,
        maxWidth: 25,
        marginRight: 3
    },
    profileMainWebsite: {
        flex: 3,
        maxWidth: 30,
    },
    profileDetails: {
        justifyContent: "center",
        flex: 4
    },
    profileName: {
        fontSize: 16,
        fontWeight: "bold",
        justifyContent: "center"
    },
    profileCreatedAt: {
        fontSize: 12,
        marginTop: 2,
        color: "grey"
    },
    profileMoreInfo: {
        flex: 5,
        maxWidth: 5,
    }
});
