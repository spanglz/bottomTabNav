import React, {useState} from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons";
import {Input, Box, Button} from "native-base";
import axios from "axios";
import Loader from "../components/Loader";
import {async} from "@babel/runtime/regenerator";

const LoginScreen = () => {

    const [userName, setUsername] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [bearerToken, setToken] = useState();
    const [isLoading, setIsLoading] = React.useState(false);

    if (isLoading) {
        return <Loader />;
    }

    const fetchToken = () => {
        setIsLoading(true);
        let config = {
            method: "post",
            url: 'https://anty-api.com/auth/login',
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                username: userName,
                password: userPassword
            }
        };
        axios(config)
            .then(({ data }) => {
                setToken(data.token);
            })
            .catch((err) => {
                console.log(err);
                alert('Request error');
            })
            .finally( () => {
                setIsLoading(false);
            });
    }

    return(
        <View style={{flex: 1, alignContent: 'center', alignItems: 'center', justifyContent: 'center'}}>
            <Image
                resizeMode={"contain"}
                source={require('../img/logo.png')}
                style={{ height: 70 }}/>
            <Box alignItems="center">
                <Input value={userName} size="xl" onChangeText={setUsername} autoCapitalize='none' mx="3" placeholder="Login" w="70%" variant="rounded" maxLength={30}/>
                <Input value={userPassword} size="xl" type="password" onChangeText={setUserPassword} mx="3" placeholder="Password" w="70%" variant="rounded" maxLength={30} mt="2"/>
                <Button mt="4" backgroundColor="purple.600" w="150" h="10"
                onPress={() => {fetchToken()}}
                >SIGN IN</Button>
                <Button variant="outline" w="150" borderColor="purple.600" colorScheme="purple" mt="2" h="10">Forgot password</Button>
            </Box>
        </View>
    )
}

export default LoginScreen;