import * as React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import AccountScreen from "../screens/AccountScreen";
import ProfilesScreen, {ProfileDropdown} from "../screens/ProfilesScreen";
import TeamScreen from "../screens/TeamScreen";
import {ActionSheetIOS, Text, TouchableOpacity, View} from "react-native";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {
    faCirclePlus, faEllipsis,
    faFilter,
    faGear,
    faLink, faPersonHarassing, faPlus,
    faUser,
    faWindowRestore
} from "@fortawesome/free-solid-svg-icons";
import ProxyScreen, {ProxyDropdown} from "../screens/ProxyScreen";
import {styles} from "../styles/styles";
import AddAnything from "../components/AddAnything";
import {AddUser} from "../screens/TeamScreen";

const filtersOpen = () =>
    ActionSheetIOS.showActionSheetWithOptions(
        {
            options: ['Cancel', 'Remove'],
            destructiveButtonIndex: 1,
            cancelButtonIndex: 0
        },
        (buttonIndex) => {
            if (buttonIndex === 1) {
                /* destructive action */
            }
        })

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
                        <ProfileDropdown />
                    </View>
                ),
                headerLeft: () => (
                    <View>
                        <TouchableOpacity onPress={filtersOpen}>
                        <FontAwesomeIcon
                            icon={faFilter}
                            size={24}
                            style={{
                                left: 20
                            }}
                        />
                        </TouchableOpacity>
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
                            icon={faPersonHarassing}
                            color={focused ? '#B645EE' : 'white'}
                            size={25}
                        />
                        <Text style={{
                            ...styles.tabBarText
                        }}>Team</Text>
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
                    <AddUser />
                )
            }}/>
            <Tab.Screen name={'Add'} component={AddAnything} options={{
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
                        <ProxyDropdown />
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
            <Tab.Screen name={'Account'} component={AccountScreen} options={{
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
                        }}>Account</Text>
                    </View>
                ),
                headerRight: () => (
                    <View>
                        <FontAwesomeIcon
                            icon={faGear}
                            size={24}
                            style={{
                                right: 20,
                            }}
                        />
                    </View>
                )
            }}/>
        </Tab.Navigator>
    );
}



export default Tabs;
