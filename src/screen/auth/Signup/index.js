import React, { isValidElement, useSetState, useState } from 'react'
import { View, Image, TextInput, Text, TouchableOpacity, KeyboardAvoidingView, ScrollView } from 'react-native'
import { Icon } from 'react-native-elements';

//components
import { styles } from './style'
import { TEXT } from '../../../components/Text'
import { BUTTON } from '../../../components/Button'
import { colors  , text , background , icon, button} from '../../../utility/color/color';

export const Signup = (props) => {
    const { username, password ,groupname , number , address} = props
    return (
        <View style={styles.inputcontainer}>
            <View style={styles.inputbox}>
                <TEXT title="Group"
                    color={text.gray}
                    size={15}
                    weight={"500"} />
                <View style={styles.inputview}>
                    <Icon
                        name='account-group'
                        type='material-community'
                        color={icon.gray}
                        size={13}
                    />
                    <TextInput placeholder="User name......"
                        style={styles.input}
                        value={groupname}
                        onChangeText={value => props.setgroupname(value)} />

                </View>

            </View>

            <View style={styles.inputbox}>
                <TEXT title="User Name"
                    color={text.gray}
                    size={15}
                    weight={"500"} />
                <View style={styles.inputview}>
                    <Icon
                        name='user-alt'
                        type='font-awesome-5'
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
                <TEXT title="Phone number"
                    color={text.gray}
                    size={15}
                    weight={"500"} />
                <View style={styles.inputview}>
                    <Icon
                        name='phone-alt'
                        type='font-awesome-5'
                        color={icon.gray}
                        size={13}
                    />
                    <TextInput placeholder="Phone number"
                        style={styles.input}
                        value={number}
                        onChangeText={value => props.setnumber(value)} 
                        keyboardType="name-phone-pad"/>

                </View>

            </View>


            <View style={styles.inputbox}>
                <TEXT title="Address"
                    color={text.gray}
                    size={15}
                    weight={"500"} />
                <View style={styles.inputview}>
                    <Icon
                        name='address'
                        type='entypo'
                        color={icon.gray}
                        size={13}
                    />
                    <TextInput placeholder="Address ......"
                        style={styles.input}
                        value={address}
                        onChangeText={value => props.setaddress(value)} 
                        keyboardType="name-phone-pad"/>

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
                title="Sign Up"
                size={18}
                color={text.white}
                weight={"700"}
                background={button.purple}
                hadlebutton = {props.handlesignup} />

            <View style={styles.bottomview}>
                <TouchableOpacity onPress={() => props.changelogin("login")}>
                    <TEXT title="Login"
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
