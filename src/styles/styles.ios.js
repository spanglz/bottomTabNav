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
        backgroundColor: '#ECEEF4'
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
        backgroundColor: '#ECEEF4',
        flex: 1,
        flexDirection: "column"
    },
    accountAvatar: {
        padding: 5,
        backgroundColor: '#1B2A3A',
        width: 70,
        height: 70,
        borderRadius: 15,
        alignContent: "center"
    },
    avatarContainer: {
        marginTop: 20,
        flexDirection: "row",
        padding: 20,
        alignItems: "center"
    },
    displayNameText: {
        marginTop: 10,
        fontSize: 32,
        fontWeight: "bold",
        color: 'black',
        flex: 1,
        alignContent: "center"
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
    },
    profilesCountChartContainer: {
        flexDirection: "row",
        padding: 20,
        alignItems: 'center',
        justifyContent: "space-between"

    },
    profilesCountChartCircular: {
        flex: 1,
    },
    profilesCountChartInfo: {
        // marginLeft: 30,
        // // backgroundColor: 'rgba(52, 52, 52, 0.8)',
        // // backgroundColor: 'transparent',
        // borderRadius: 20,
        // height: 150,
        // width: 170
    },

    // profileCountChartTextPlan: {
    //     fontSize: 20,
    //     color: 'green',
    // },
    // profileCountChartTextProfiles: {
    //     fontSize: 20,
    //     color: '#28334A'
    // },


    // searchForm: {
    //     height: 40,
    //     marginTop: 5
    // }
});
