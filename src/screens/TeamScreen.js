import React, {useState} from "react";
import {View, Text, RefreshControl, TouchableOpacity, FlatList} from "react-native";
import {Checkbox, VStack, Input} from "native-base";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {
    faAngleRight,
    faEthernet,
    faMagnifyingGlass, faPeopleGroup,
    faSocks, faUser, faUserAstronaut, faUserTie
} from "@fortawesome/free-solid-svg-icons";
import {useNavigation} from "@react-navigation/native";
import axios from "axios";
import Loader from "../components/Loader";
import {styles} from "../styles/styles";

const TeamScreen = ({navigation}) => {

    const navigate = useNavigation();
    const [isLoading, setIsLoading] = useState(false);
    const [items, setItems] = useState();
    const [search, setSearch] = useState('');


    // get proxy list without pagination
    const fetchProfiles = () => {
        setIsLoading(true);
        let config = {
            method: "get",
            url: 'https://anty-api.com/team/users',
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
        <View style={styles.container}>
            <VStack w="100%" space={5} alignSelf="center" alignItems="center">
                <Input placeholder="Search"
                       variant="filled"
                       width="92%"
                       borderWidth='2'
                       borderColor='#414452'
                       borderRadius="10"
                       marginTop="5"
                       py="2"
                       px="3"
                       fontSize="14"
                       fontWeight="600"
                       value={search}
                       onChangeText={setSearch}
                       InputLeftElement={<FontAwesomeIcon icon={faMagnifyingGlass}
                                                          style={{
                                                              marginLeft: 5
                                                          }}
                       />} />
            </VStack>
            <FlatList
                refreshControl={<RefreshControl refreshing={isLoading} onRefresh={fetchProfiles} />}
                data={items}
                renderItem={({ item }) => (
                    <View style={styles.profileItem}>
                        <View style={styles.checkbox}>
                            <Checkbox colorScheme="purple" value={toString(item.id)} accessibilityLabel={toString(item.id)}  />
                        </View>
                        <View style={styles.proxyType}>
                            {item.role == 'admin' ? <FontAwesomeIcon icon={faUserAstronaut} style={styles.icon} size={24} /> : null}
                            {item.role == 'teamlead' ? <FontAwesomeIcon icon={faPeopleGroup} style={styles.icon} size={24} /> : null}
                            {item.role == 'user' ? <FontAwesomeIcon icon={faUser} style={styles.icon} size={24} /> : null}
                        </View>
                        <View style={styles.profileDetails}>
                            <Text style={styles.profileName}>{item.displayName}</Text>
                            <Text style={styles.userName}>{item.username}</Text>
                        </View>
                        <View style={styles.proxyMoreInfo}>
                            <TouchableOpacity>
                                <FontAwesomeIcon icon={faAngleRight} style={styles.icon} />
                            </TouchableOpacity>
                        </View>
                    </View>
                )} />
        </View>
    );
}
export default TeamScreen;
