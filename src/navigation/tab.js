import * as React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import SettingsScreen from "../screens/SettingsScreen";
import ProfilesScreen from "../screens/ProfilesScreen";
import TeamScreen from "../screens/TeamScreen";
import LibraryScreen from "../screens/LibraryScreen";
import {StyleSheet, Text, View} from "react-native";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {
    faCirclePlus, faEllipsis,
    faEllipsisVertical, faFilter,
    faGear,
    faLink,
    faUser,
    faWindowRestore
} from "@fortawesome/free-solid-svg-icons";
import ProxyScreen from "../screens/ProxyScreen";
import {styles} from "../styles/styles";


const Tab = createBottomTabNavigator();

const Tabs = () => {
    return(
        <Tab.Navigator
        screenOptions={{
            tabBarShowLabel: false,
            tabBarStyle: {
                ...styles.tabBarMain,
                ...styles.shadow
            }
        }}
        >
            <Tab.Screen name={'Profiles'} component={ProfilesScreen} options={{
                tabBarIcon: ({focused}) => (
                    <View style={{
                        ...styles.tabBarView
                    }}>
                        <FontAwesomeIcon
                            icon={faWindowRestore}
                            color={focused ? '#B645EE' : 'white'}
                            size={25}
                        />
                        <Text style={{
                            ...styles.tabBarText
                        }}>Profiles</Text>
                    </View>
                ),
                headerRight: () => (
                    <View>
                        <FontAwesomeIcon
                            icon={faEllipsis}
                            size={24}
                            style={{
                                right: 20,
                            }}
                        />
                    </View>
                ),
                headerLeft: () => (
                    <View>
                        <FontAwesomeIcon
                            icon={faFilter}
                            size={24}
                            style={{
                                left: 20
                            }}
                        />
                    </View>
                )
            }}
            />
            <Tab.Screen name={'Users'} component={TeamScreen} options={{
                tabBarIcon: ({focused}) => (
                    <View style={{
                        ...styles.tabBarView
                    }}>
                        <FontAwesomeIcon
                            icon={faUser}
                            color={focused ? '#B645EE' : 'white'}
                            size={25}
                        />
                        <Text style={{
                            ...styles.tabBarText
                        }}>Users</Text>
                    </View>
                ),
                headerRight: () => (
                    <View>
                        <FontAwesomeIcon
                            icon={faEllipsis}
                            size={24}
                            style={{
                                right: 20,
                            }}
                        />
                    </View>
                )
            }}/>
            <Tab.Screen name={'Add'} component={LibraryScreen} options={{
                tabBarIcon: ({focused}) => (
                    <View style={{
                        ...styles.tabBarView
                    }}>
                        <FontAwesomeIcon
                            icon={faCirclePlus}
                            color={focused ? '#B645EE' : 'white'}
                            size={25}
                        />
                        <Text style={{
                            ...styles.tabBarText
                        }}>Add</Text>
                    </View>
                )
            }}/>
            <Tab.Screen name={'Proxy'} component={ProxyScreen} options={{
                tabBarIcon: ({focused}) => (
                    <View style={{
                        ...styles.tabBarView
                    }}>
                        <FontAwesomeIcon
                            icon={faLink}
                            color={focused ? '#B645EE' : 'white'}
                            size={25}
                        />
                        <Text style={{
                            ...styles.tabBarText
                        }}>Proxy</Text>
                    </View>
                ),
                headerRight: () => (
                    <View>
                        <FontAwesomeIcon
                            icon={faEllipsis}
                            size={24}
                            style={{
                                right: 20,
                            }}
                        />
                    </View>
                ),
                headerLeft: () => (
                    <View>
                        <FontAwesomeIcon
                            icon={faFilter}
                            size={24}
                            style={{
                                left: 20
                            }}
                        />
                    </View>
                )
            }}/>
            <Tab.Screen name={'Settings'} component={SettingsScreen} options={{
                tabBarIcon: ({focused}) => (
                    <View style={{
                        ...styles.tabBarView
                    }}>
                        <FontAwesomeIcon
                            icon={faGear}
                            color={focused ? '#B645EE' : 'white'}
                            size={25}
                        />
                        <Text style={{
                            ...styles.tabBarText
                        }}>Settings</Text>
                    </View>
                )
            }}/>
        </Tab.Navigator>
    );
}



export default Tabs;
