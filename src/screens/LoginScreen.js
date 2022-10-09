import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons";

const LoginScreen = () => {
    return(
        /* здесь открываем компонент view, который импортировали из react-native.
        это что-то типа базового контейнера в реакт нейтив,
        поэтому почти все компоненты должны быть во view обёрнуты */
        <View style={{flex: 1, alignContent: 'center'}}>
            // здесь используем компонент текст, который импортировали оттуда же
            // мы можем добавить компонент из других модулей, например иконки FontAwesomeIcon
            <Text>Hello, Forkers!</Text>
            <FontAwesomeIcon icon={faUser} />
            // нам достаточно начать вводить название компонента - импорт автоматический

            // результатом этого кода будет текст посередине экрана, который написали выше
        </View>
    )
}