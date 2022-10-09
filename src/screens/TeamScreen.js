import React, {useState} from "react";
import {View, Text, RefreshControl, TouchableOpacity, FlatList} from "react-native";
import {Checkbox, VStack, Input, Modal, FormControl, Button, Select, CheckIcon} from "native-base";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {
    faAngleRight, faAt,
    faEthernet, faKey,
    faMagnifyingGlass, faPeopleGroup, faPlus,
    faSocks, faUser, faUserAstronaut, faUserTie
} from "@fortawesome/free-solid-svg-icons";
import {useNavigation} from "@react-navigation/native";
import axios from "axios";
import Loader from "../components/Loader";
import {styles} from "../styles/styles";

export const AddUser = () => {

    const [modalVisible, setModalVisible] = React.useState(false);
    const [displayName, setDisplayName] = React.useState("");
    const [newUserEmail, setNewUserEmail] = React.useState("");
    const [newUserPassword, setNewUserPassword] = React.useState("");
    const [newUserRole, setNewUserRole] = React.useState("");

    function addNewUser(name, mail, password, role) {
        var axConf = {
            method: "post",
            url: "http://185.137.234.75:81/team/users",
            headers: {
                Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTY1Nzg1MywidXNlcm5hbWUiOiJjb21wYW5pb25AYXBwLmNvbSIsInJvbGUiOiJhZG1pbiIsInRlYW1JZCI6MTYwODM4MSwidG9rZW5DcmVhdGVkQXQiOjE2NjQ5MjI1ODV9.gmgWmryWsXZVljgnebrFIlFTfiKbMEJ56_TrO7AVqg4',
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            data: {
                username: mail,
                displayName: name,
                password: password,
                role: role
            }
        };
        axios(axConf)
            .then(({ data }) => {
                console.log(data);

            })
            .catch((err) => {
                console.log(err);
                alert("oshibka");
            })

    };

    // http://185.137.234.75:81/team/users | POST
    // {
    //     "username": "added@app.com",
    //     "displayName": "Companion added",
    //     "password": "123123",
    //     "role": "admin"
    // }


    return(
        <View>
            <TouchableOpacity onPress={() => setModalVisible(true)} >
                <FontAwesomeIcon
                    icon={faPlus}
                    size={24}
                    style={{
                        left: 20
                    }}
                />
            </TouchableOpacity>
                <Modal isOpen={modalVisible} onClose={() => setModalVisible(false)} avoidKeyboard  size="lg">
                    <Modal.Content rounded="3xl">
                        <Modal.CloseButton />
                        <Modal.Header>Create user</Modal.Header>
                        <Modal.Body>
                            <FormControl >
                                <Input value={displayName} onChangeText={setDisplayName} InputLeftElement={
                                    <FontAwesomeIcon icon={faUser} size={14} />
                                }/>
                            </FormControl>
                            <FormControl >
                                <Input value={newUserEmail} onChangeText={setNewUserEmail} mt={5} InputLeftElement={
                                    <FontAwesomeIcon icon={faAt} size={14} />
                                }/>
                            </FormControl>
                            <FormControl >
                                <Input value={newUserPassword} onChangeText={setNewUserPassword} fontSize={14} mt={5} InputLeftElement={
                                    <FontAwesomeIcon icon={faKey} size={14} />
                                } />
                            </FormControl>
                            <Select selectedValue={newUserRole} minWidth="200" accessibilityLabel="Choose Service" placeholder="Choose Service" _selectedItem={{
                                bg: "purple.400",
                                rounded: '2xl',
                                endIcon: <CheckIcon size="5" />
                            }} mt={1} onValueChange={itemValue => setNewUserRole(itemValue)}>
                                <Select.Item label="Admin" value="admin" />
                                <Select.Item label="User" value="user" />
                            </Select>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button backgroundColor="purple.600" rounded="2xl" flex="1" onPress={() => {
                                setModalVisible(false);
                                {console.log(displayName, newUserEmail, newUserPassword, newUserRole)};
                                addNewUser(displayName, newUserEmail, newUserPassword, newUserRole);
                            }}>
                                Proceed
                            </Button>
                        </Modal.Footer>
                    </Modal.Content>
                </Modal>
            </View>

        )
    }

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
                    <View style={styles.teamItem}>
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
