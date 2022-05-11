import React, { useEffect, useState } from 'react'
import { View, Text, Image, TextInput, TouchableOpacity  , Alert} from 'react-native'
import { Icon } from 'react-native-elements';
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { get, findIndex, find } from 'lodash'


//component
import { TEXT } from '../../../components/Text'
import { BUTTON } from '../../../components/Button'

//Helper
import { styles } from './style'
import { colors, text, background, icon, button } from '../../../utility/color/color';
import { registerUser } from '../../../helper/authentication'
import { getGroupdata } from '../../../helper/group'
import { getUserdataBygroup } from '../../../utility/Firebase/user'
import {str} from '../../../utility/string'


const Typejson = [
    {
        name: "President"
    },
    {
        name: "Minister"
    },
    {
        name: "Treasurer"
    },
    {
        name: "member"
    }
]
const Signup = () => {
    const navigation = useNavigation();

    const [groupdata, setGroupdata] = useState("")
    const [groupname, setGroupname] = useState(str.GROUP_INPUT)
    const [groupid , setGroupid] = useState("")
    const [userdata, setUserdata] = useState()
    const [username, setUsername] = useState("")
    const [number, setNumber] = useState("")
    const [address, setAddress] = useState("")
    const [password, setPassword] = useState("")
    const [type, setType] = useState(str.MEMBER_INPUT)
    const [opengroup, setOpengroup] = useState(false)
    const [opentype, setOpentype] = useState(false)

    const getGroupdat = async () => {
        const data = await getGroupdata()
     
        setGroupdata(data)
    }

    useEffect(() => { getGroupdat() }, [])

    useEffect(() => { }, [groupdata])

    const handleclick = () => {
        registerUser(groupname,groupid, username, number, address, password, navigation, type)
    }


    const groupclick = async (full, grouptitle , groupid) => {

        if (full) {
            Alert.alert(str.GROUP_FULL)
        } else {
            setGroupname(grouptitle)
            setGroupid(groupid)
            setOpengroup(false)
            const alluser = await getUserdataBygroup(grouptitle)
            console.log("All user", alluser)
            setUserdata(alluser)
        }
    }

    const typeclick = () =>{
        if (groupname == str.GROUP_INPUT) {
            Alert.alert(str.GROUP_FIRST)
        } else {
            setOpentype(!opentype)
        }
    }

    const typehandle = (index , title) =>{
        if (index !== -1 && title !== "member") {
            Alert.alert(`${title}  ${str.ALREADY_ASSIGN}`)
        } else {
            setType(title)
        }

        setOpentype(false)

    }

    return (

        <View style={styles.container}>
            <Image source={require("../../../../assets/images/logo.jpeg")}
                style={styles.image} />
            <ScrollView style={{ flex: 1, width: "100%", height: "100%", marginTop: 40 }}>
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
                            <TouchableOpacity onPress={() => setOpengroup(!opengroup)} style={{ flex: 1, justifyContent: "space-between", flexDirection: "row" }}>
                                <View style={{ flex: 1, marginLeft: 10, justifyContent: "center" }}>
                                    <TEXT title={groupname}
                                        color={groupname == str.GROUP_INPUT ? text.lightgray : null}
                                        size={13}
                                        weight={"500"}

                                    />
                                </View>

                                <Icon name="chevron-down"
                                    type="octicon"
                                    size={20}
                                    color={icon.primary}

                                />
                            </TouchableOpacity>

                        </View>
                        {opengroup &&
                            <View style={styles.dropcontainer}>
                                {groupdata.map((name, i) => {
                           
                                    const full = name.member > 10 ? true : false
                                    let grouptitle = name.Group_name
                                    let groupid = name.id
                                    return (
                                        <TouchableOpacity style={styles.droupView}
                                            onPress={() => { groupclick(full, grouptitle , groupid) }}>
                                            <Text style={{ color: full ? text.lightgray : null }}>{name.Group_name}</Text>
                                        </TouchableOpacity>
                                    );
                                })}

                            </View>
                        }
                    </View>


                    <View style={{ ...styles.inputbox, zIndex: opengroup ? -99 : 9 }}>
                        <TEXT title="User Type"
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
                            <TouchableOpacity onPress={() =>  typeclick() } style={{ flex: 1, justifyContent: "space-between", flexDirection: "row" }}>
                                <View style={{ flex: 1, marginLeft: 10, justifyContent: "center" }}>
                                    <TEXT title={type}
                                        color={type == str.MEMBER_INPUT ? text.lightgray : null}
                                        size={13}
                                        weight={"500"}

                                    />
                                </View>

                                <Icon name="chevron-down"
                                    type="octicon"
                                    size={20}
                                    color={icon.primary}

                                />
                            </TouchableOpacity>

                        </View>
                        {opentype &&
                            <View style={styles.dropcontainer}>
                                {Typejson.map((name, i) => {
                                    const title = name.name
                                    const index = findIndex(userdata, { "Member_type": title })

                    
                                    //  const full = name.member > 10 ? true : false
                                    return (
                                        <TouchableOpacity style={styles.droupView}  onPress = {() => typehandle(index , title)} >
                                            <Text>{name.name}</Text>
                                        </TouchableOpacity>
                                    );
                                })}

                            </View>
                        }
                    </View>
                    <View style={{ ...styles.inputbox, zIndex: -99 }}>
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
                            <TextInput placeholder={str.USER_INPUT}
                                style={styles.input}
                                value={username}
                                onChangeText={value => setUsername(value)} />

                        </View>

                    </View>

                    <View style={{ ...styles.inputbox, zIndex: -99 }}>
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
                            <TextInput placeholder={str.NUMBER_INPUT}
                                style={styles.input}
                                value={number}
                                onChangeText={value => setNumber(value)}
                                keyboardType="name-phone-pad" />

                        </View>

                    </View>


                    <View style={{ ...styles.inputbox, zIndex: -99 }}>
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
                            <TextInput placeholder={str.ADDRESS_INPUT}
                                style={styles.input}
                                value={address}
                                onChangeText={value => setAddress(value)}
                                keyboardType="name-phone-pad" />

                        </View>

                    </View>


                    <View style={{ ...styles.inputbox, zIndex: -99 }}>
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
                            <TextInput placeholder={str.PASSWORD_INPUT}
                                style={styles.input}
                                value={password}
                                onChangeText={value => setPassword(value)}
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
                        hadlebutton={handleclick}
                    />

                </View>
            </ScrollView>
        </View>
    );
}

export default Signup