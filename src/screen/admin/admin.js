import React from 'react'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { View, Text } from 'react-native'
import {creategroup} from '../../helper/group'

const Admin = () => {
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <TouchableOpacity onPress={() =>{creategroup() , navigation.navigate("Login")}}>
                <Text>AddGroup </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() =>navigation.navigate("Login")}>
                <Text>Login </Text>
            </TouchableOpacity>

        </View>
    );
}

export default Admin