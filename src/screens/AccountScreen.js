import React, {useState} from "react";
import {View, Text, RefreshControl, TouchableOpacity, Image} from "react-native";
import {Checkbox, VStack, Input, Badge, Avatar, Progress, Box, Heading} from "native-base";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {useNavigation} from "@react-navigation/native";
import axios from "axios";
import Loader from "../components/Loader";
import {styles} from "../styles/styles";
import CircularProgress from "react-native-circular-progress-indicator";

const AccountScreen = ({navigation}) => {

    const navigate = useNavigation();
    const [isLoading, setIsLoading] = useState(false);
    const [items, setItems] = useState();

    const Example = () => {
        return <Box>
            <Box alignSelf="center" bg="yellow.500" width={48} height={32} shadow={1} br={20} p={5} rounded={'xl'}_text={{
                fontSize: "md",
                fontWeight: "medium",
                color: "green.600",
                letterSpacing: "lg"
            }}>
                <Heading size="sm" color={'blueGray.400'} >
                    Your plan
                </Heading>
                Base
                <Heading size="sm">
                    Profiles count
                </Heading>
                63 of 100
            </Box>
        </Box>;
    };


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
                <Text style={styles.displayNameText}>Hi, username! 👋</Text>
                <Image style={styles.accountAvatar} source={require('../img/bg.png')}/>
            </View>
            <View style={styles.profilesCountChartContainer}>
                <CircularProgress style={styles.profilesCountChartCircular}
                    value={63}
                    radius={75}
                    inActiveStrokeOpacity={0.3}
                    activeStrokeWidth={20}
                    inActiveStrokeWidth={20}
                    activeStrokeColor={'#8A32CF'}
                    inActiveStrokeColor={'#9655FFD6'}
                    progressValueColor={'#9655FFD6'}
                />
            <View style={styles.profilesCountChartInfo}>
                <Example  />
            </View>
            </View>
        </View>
    );
}
export default AccountScreen;
