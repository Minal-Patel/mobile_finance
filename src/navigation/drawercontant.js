import React, { useState } from 'react'
import { Image } from 'react-native'
import { View, Text, Dimensions } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import { Icon } from 'react-native-elements';
import AsyncStorage from '@react-native-community/async-storage'
import { background, colors, icon, text } from '../utility/color/color'
import { TEXT } from '../components/Text'
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux'
import { ScrollView } from 'react-native';


const drawer = [
    {
        title: "Home",
        iname: "home-variant",
        itype: "material-community",
        nav: "Home",

    },
    {
        title: "My Account",
        iname: "piggy-bank",
        itype: "material-community",
        nav: "Myaccount"
    },
    {
        title: "group account",
        iname: "bank",
        itype: "material-community",
        nav: "Groupaccount"
    },
    {
        title: "Notification",
        iname: "notifications",
        itype: "material",
        nav: "Home"
    },

    {
        title: "Group detail",
        iname: "group",
        itype: "font-awesome",
        nav: "Groupdetail"
    },

    {
        title: "About us",
        iname: "info",
        itype: "fontisto",
        nav: "Home"
    },
    {
        title: "Logout",
        iname: "sign-out",
        itype: "font-awesome",
        nav: "Logout"
    },

]

const width = Dimensions.get("screen").width



export default DrawerContant = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const [open, setOpen] = useState("Home")

    const users = useSelector(state => state.userReducer?.user)

    const logout = async () => {
        try {
            const data = await AsyncStorage.clear()
            alert('Storage successfully cleared!')
            dispatch({
                type: "REMOVE_TOKEN",
                payload: ""
            })
           navigation.navigate("Login")

           

        } catch (e) {
            alert('Failed to clear the async storage.')
        }

       
    }

    const handlenav = (nav) => {

        if (nav == "Logout") {
            logout()
        } else {
            navigation.navigate(nav)
        }


    }

    return (
        <View style={{ flex: 1, backgroundColor: background.white, }}>
            <View style={{ width: "100%", height: "100%" }}>
                <View style={{ paddingTop: "30%", padding: "10%", }}>
                    <View style={{
                        width: 80,
                        height: 80,
                        borderRadius: 100 / 2,
                        shadowOffset: { width: 0, height: 0 },
                        shadowColor: "#A9A9A9",
                        shadowOpacity: 0.3,
                        shadowRadius: 15,
                        elevation: 10
                    }}>
                        <Image source={require("../../assets/images/user.jpeg")}
                            style={{ width: 80, height: 80, borderRadius: 100 / 2 }} />
                    </View>
                    {/* <View style={{ marginLeft: 20, flex: 1, }}> */}
                    <TEXT title={users.User_name}
                        size={20}
                        weight={"bold"}
                        color={text.black}
                        style={{ marginTop: 20 }} />
                    <TEXT title={users.Group_name}
                        size={15}
                        color={text.lightgray}
                        style={{ marginTop: 5 }} />
                    {/* </View> */}
                </View>

                <ScrollView style={{ width: "100%", marginTop: 10, }}>
                    {drawer.map((item, i) => {
                
                        const nav = item.nav
                        return (
                            <TouchableOpacity
                                style={{
                                    width: "100%",
                                    flexDirection: "row",
                                    backgroundColor: background.white,
                                    marginTop: 10,
                                    paddingVertical: 15,
                                    borderTopLeftRadius: 15,
                                    borderBottomLeftRadius: 15,
                                    marginLeft: item.title == open ? "10%" : "10%",
                                    paddingHorizontal: item.title == open ? 15 : 0,
                                    shadowOffset: item.title == open ? { width: 0, height: 0 } : null,
                                    shadowRadius: item.title == open ? 8 : null,
                                    shadowOpacity: item.title == open ? 0.5 : null,
                                    shadowColor: item.title == open ? background.purple : null,
                                    elevation: 10

                                }}
                                onPress={() => { setOpen(item.title),handlenav(nav)}}>
                                <View style={{ width: "15%", alignItems: "flex-start", justifyContent: "center" }}>
                                    <Icon name={item.iname}
                                        type={item.itype}
                                        color={open == item.title ? icon.primary : "#B8B8B8"}
                                        size={open == item.title ? 22 : 20} />
                                </View>
                                <TEXT title={item.title}
                                    size={open == item.title ? 18 : 15}
                                    color={open == item.title ? icon.primary : text.black}
                                    weight={open == item.title ? "bold" : "400"}
                                    style={{ marginTop: 5 }} />

                            </TouchableOpacity>
                        );
                    })}
                </ScrollView>
            </View>
        </View>
    );
}