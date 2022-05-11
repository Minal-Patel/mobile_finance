import React, { useSetState, useState } from 'react'
import { View, Image, TextInput, Text, TouchableOpacity, KeyboardAvoidingView, ScrollView } from 'react-native'
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

//components
import { styles } from './style'
import { TEXT } from '../../../components/Text'
import { BUTTON } from '../../../components/Button'
import { colors , text , icon , button } from '../../../utility/color/color';

export const Login = (props) => {
    const { username, password } = props
    const navigation = useNavigation();
    return (
        <View style={styles.inputcontainer}>
            <View style={styles.inputbox}>
                <TEXT title="User Name"
                    color={text.gray}
                    size={15}
                    weight={"500"} />
                <View style={styles.inputview}>
                    <Icon
                        name='email'
                        type='zocial'
                        color='#BEBEBE'
                        size={13}
                    />
                    <TextInput placeholder="User name......"
                        style={styles.input}
                        value={username}
                        onChangeText={value => props.setusername(value)} />

                </View>

            </View>


            <View style={styles.inputbox}>
                <TEXT title="Password"
                    color={text.gray}
                    size={15}
                    weight={"500"} />
                <View style={styles.inputview}>
                    <Icon
                        name='lock'
                        type='entypo'
                        color={icon.gray}
                        size={13}
                    />
                    <TextInput placeholder="password......"
                        style={styles.input}
                        value={password}
                        onChangeText={value => props.setpassword(value)}
                        textContentType="password"
                        secureTextEntry={true} />

                </View>

            </View>

            <BUTTON width={"80%"}
                height={60}
                bradius={60 / 2}
                title="Login"
                size={18}
                color={text.white}
                weight={"700"}
                background={button.purple} 
                hadlebutton = {props.handlelogin}/>

            <View style={styles.bottomview}>
                <TouchableOpacity onPress={() =>props.changelogin("signup")}>
                    <TEXT title="Signup"
                        color={text.gray}
                        size={15} />
                </TouchableOpacity>

                <TouchableOpacity>
                    <TEXT title="Forgot Password?"
                        color={text.gray}
                        size={15} />
                </TouchableOpacity>
            </View>
        </View>
    );
}
