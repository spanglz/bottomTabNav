import React from "react";
import axios from "axios";
import {View, Text, FlatList, RefreshControl, TouchableOpacity, SafeAreaView, ActionSheetIOS} from "react-native";
import {Box, Checkbox, Input, Menu, Pressable, VStack} from "native-base";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faApple, faFacebook, faGoogle, faLinux, faTiktok, faWindows} from "@fortawesome/free-brands-svg-icons";
import {
    faAngleRight,
    faBitcoinSign,
    faEllipsisH,
    faGlobe,
    faMagnifyingGlass,
    faShareNodes, faSquare, faSquareCheck, faTrash
} from "@fortawesome/free-solid-svg-icons";
import {useNavigation} from "@react-navigation/native";
import {styles} from "../styles/styles";
import Loader from "../components/Loader";

export const ProfileDropdown = () => {
    return <Box w="90%" alignItems="flex-end">
        <Menu w="190" rounded={'xl'} marginTop={1} marginRight={3} trigger={triggerProps => {
            return <Pressable accessibilityLabel="More options menu"
                              hitSlop={{ top: 15, right: 15, bottom: 15, left: 15 }}
                              {...triggerProps}>
                <Box>
                    <FontAwesomeIcon
                        icon={faEllipsisH}
                        size={24}
                        style={{
                            right: 20,
                        }}
                    />
                </Box>
            </Pressable>;
        }}>
            <Menu.Item>
                <FontAwesomeIcon icon={faSquareCheck} />
                Select all
            </Menu.Item>
            <Menu.Item>
                <FontAwesomeIcon icon={faSquare} />
                Deselect all
            </Menu.Item>
            <Menu.Item>
                <FontAwesomeIcon icon={faShareNodes} />
                Share
            </Menu.Item>
            <Menu.Item>
                <FontAwesomeIcon icon={faTrash} />
                Delete
            </Menu.Item>
        </Menu>
    </Box>;
}

const ProfilesScreen = ({}) => {

    const navigate = useNavigation();
    const [isLoading, setIsLoading] = React.useState(false);
    const [items, setItems] = React.useState();

    // get profile list without pagination
    const fetchProfiles = () => {
        setIsLoading(true);
        let config = {
            method: "get",
            url: 'http://185.137.234.75:81/browser_profiles',
            headers: {
                Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTY1Nzg1MywidXNlcm5hbWUiOiJjb21wYW5pb25AYXBwLmNvbSIsInJvbGUiOiJhZG1pbiIsInRlYW1JZCI6MTYwODM4MSwidG9rZW5DcmVhdGVkQXQiOjE2NjQ5MjI1ODV9.gmgWmryWsXZVljgnebrFIlFTfiKbMEJ56_TrO7AVqg4',
            },
        };
        axios(config)
            .then(({ data }) => {
                setItems(data.data);
            })
            .catch((err) => {
                console.log(err);
                alert("Unable to get profiles list");
            })
            .finally(() => {
                setIsLoading(false);
            });
    };
    React.useEffect(fetchProfiles, []);
    if (isLoading) {
        return <Loader />;
    }

    return (
        <View style={{...styles.container}}>
            <VStack w="100%" space={5} alignSelf="center" alignItems="center">
                <Input style={styles.searchForm} placeholder="Search"
                       variant="filled"
                       width="92%"
                       borderWidth='2'
                       borderColor='#414452'
                       borderRadius="10"
                       marginTop="5"
                       fontSize="14"
                       fontWeight="600"
                       py="2"
                       px="3"
                       InputLeftElement={
                           <FontAwesomeIcon icon={faMagnifyingGlass}
                                            style={{
                                                marginLeft: 5,
                                                color: '#B645EE'
                                            }}
                           />
                       } />
            </VStack>
            <FlatList
                refreshControl={<RefreshControl refreshing={isLoading} onRefresh={fetchProfiles} />}
                data={items}
                renderItem={({ item }) => (
                    <View style={styles.profileItem}>
                        <View style={styles.checkbox}>
                            <Checkbox colorScheme="purple" accessibilityLabel={toString(item.id)}  />
                        </View>
                        <View style={styles.profilePlatform}>
                            {item.platform == 'windows' ? <FontAwesomeIcon icon={faWindows} style={styles.icon} size={24} /> : null}
                            {item.platform == 'macos' ? <FontAwesomeIcon icon={faApple} style={styles.icon} size={24} /> : null}
                            {item.platform == 'linux' ? <FontAwesomeIcon icon={faLinux} style={styles.icon} size={24} /> : null}
                        </View>
                        <View style={styles.profileMainWebsite}>
                            {item.mainWebsite == 'facebook' ? <FontAwesomeIcon icon={faFacebook} style={styles.icon} size={24} /> : null}
                            {item.mainWebsite == 'crypto' ? <FontAwesomeIcon icon={faBitcoinSign} style={styles.icon} size={24} /> : null}
                            {item.mainWebsite == 'tiktok' ? <FontAwesomeIcon icon={faTiktok} style={styles.icon} size={24} /> : null}
                            {item.mainWebsite == 'google' ? <FontAwesomeIcon icon={faGoogle} style={styles.icon} size={24} /> : null}
                            {item.mainWebsite == '' ? <FontAwesomeIcon icon={faGlobe} style={styles.icon} size={24} /> : null}
                        </View>
                        <View style={styles.profileDetails}>
                            <Text numberOfLines={1} ellipsizeMode={"tail"} style={styles.profileName}>{item.name}</Text>
                        </View>
                        <View style={styles.profileMoreInfo}>
                            <TouchableOpacity>
                                <FontAwesomeIcon icon={faAngleRight} style={styles.icon} />
                            </TouchableOpacity>
                        </View>
                    </View>
                )} />
        </View>
    );
}
export default ProfilesScreen;

