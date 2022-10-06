import React, {useState} from "react";
import {View, Text, RefreshControl, TouchableOpacity} from "react-native";
import {Checkbox, VStack, Input, Badge, Avatar, Progress} from "native-base";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {
    faAngleRight,
    faEthernet,
    faMagnifyingGlass,
    faSocks,
    faTerminal
} from "@fortawesome/free-solid-svg-icons";
import {useNavigation} from "@react-navigation/native";
import axios from "axios";
import Loader from "../components/Loader";
import {styles} from "../styles/styles";

const AccountScreen = ({navigation}) => {

    const navigate = useNavigation();
    const [isLoading, setIsLoading] = useState(false);
    const [items, setItems] = useState();
    const [search, setSearch] = useState('');


    // get proxy list without pagination
    const fetchAccountData = () => {
        setIsLoading(true);
        let config = {
            method: "get",
            url: 'https://anty-api.com/subscription',
            headers: {
                Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTY1Nzg1MywidXNlcm5hbWUiOiJjb21wYW5pb25AYXBwLmNvbSIsInJvbGUiOiJhZG1pbiIsInRlYW1JZCI6MTYwODM4MSwidG9rZW5DcmVhdGVkQXQiOjE2NjQ5MjI1ODV9.gmgWmryWsXZVljgnebrFIlFTfiKbMEJ56_TrO7AVqg4',
            },
        };
        axios(config)
            .then(({ data }) => {
                setItems(data.data);
                console.log(data.data);
            })
            .catch((err) => {
                console.log(err);
                alert("Unable to get profiles list");
            })
            .finally(() => {
                setIsLoading(false);
            })
    };


    React.useEffect(fetchAccountData, []);

    if (isLoading) {
        return <Loader />;
    }

    return (
        <View style={styles.accountContainer}>
            <View style={styles.avatarContainer}>
                <Avatar size="2xl" borderWidth="2" borderColor="#B645EE" style={styles.accountAvatar} mt="10" source={{
                    uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                }}></Avatar>
                <Text style={styles.displayNameText}>Main User</Text>
                <Text style={styles.userEmailText}>companion@app.com</Text>
            </View>
            <View style={styles.mainAccountInfo}>
                <View style={styles.mainAccountInfoCard}>
                    <Text style={styles.mainAccountInfoCardTitle}>Your plan: Base</Text>
                    <Text style={styles.mainAccountInfoCardTitle}>Expires: 2022-11-04 09:48:06</Text>
                </View>
                <View style={styles.mainAccountInfoCard}>
                    <Text style={styles.mainAccountInfoCardTitle}>Profiles count: Base</Text>
                    <Progress value={100} mx="5" />
                </View>
                <View style={styles.mainAccountInfoCard}>
                    <Text>Тариф Base</Text>
                </View>
                <View style={styles.mainAccountInfoCard}>
                    <Text>Тариф Base</Text>
                </View>
            </View>
        </View>
    );
}
export default AccountScreen;
