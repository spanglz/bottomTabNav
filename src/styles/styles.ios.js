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
        zIndex: 2
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
    proxyType: {
        flex: 2,
        maxWidth: 25,
        marginRight: 8,
        zIndex: 2
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
    userName: {
        fontSize: 14,
        justifyContent: "center"
    },
    // profileCreatedAt: {
    //     fontSize: 12,
    //     marginTop: 2,
    //     color: "grey"
    // },
    profileMoreInfo: {
        flex: 5,
        maxWidth: 10,
    },
    proxyMoreInfo: {
        flex: 5,
        maxWidth: 25,
    },
    accountContainer: {
        backgroundColor: '#1B2A3A',
        flex: 1,
        alignItems: 'center',
        flexDirection: "column",
    },
    accountAvatar: {
        padding: 5,
        backgroundColor: '#1B2A3A'
    },
    avatarContainer: {
        flex: 1,
        alignItems: 'center',
    },
    displayNameText: {
        marginTop: 10,
        fontSize: 24,
        fontWeight: "bold",
        color: 'white'
    },
    userEmailText: {
      color: 'white'
    },
    mainAccountInfo: {
        backgroundColor: '#ECEEF4',
        flex: 2,
        alignSelf: "stretch",
        borderRadius: 30,
        alignItems: "center"
    },
    mainAccountInfoCard: {
        backgroundColor: 'white',
        width: 350,
        // height: 80,
        borderRadius: 20,
        shadowColor: 'gray',
        shadowOffset: {
            width: 0,
            height: 0
        },
        shadowOpacity: 3.5,
        shadowRadius: 7,
        elevation: 0,
        marginTop: 20,
        padding: 20,
    },
    mainAccountInfoCardTitle: {
        fontSize: 16,
        // fontWeight: "bold"
    }
    // searchForm: {
    //     height: 40,
    //     marginTop: 5
    // }
});
