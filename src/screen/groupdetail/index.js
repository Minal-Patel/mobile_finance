import React, { useState } from 'react'
import { SafeAreaView } from 'react-native'
import { TouchableOpacity } from 'react-native';
import { View, Text, Image, TextInput } from 'react-native'
import { Icon } from 'react-native-elements';
import { TEXT } from '../../components/Text';
import { styles } from './style'
import { border, colors, icon, text } from '../../utility/color/color'
import { useNavigation } from '@react-navigation/native';

import { Leader } from './Leader'
import { Member } from './Member'

const group = [
    {
        title: "member 1",
        address: "address",
        image: require("../../../assets/images/user.jpeg"),
        type: "member"
    },
    {
        title: "member 2",
        address: "address",
        image: require("../../../assets/images/user.jpeg"),
        type: "Leader1"
    },
    {
        title: "member 3",
        address: "address",
        image: require("../../../assets/images/user.jpeg"),
        type: "Leader2"
    },
    {
        title: "member 4",
        address: "address",
        image: require("../../../assets/images/user.jpeg"),
        type: "Leader3"
    },
    {
        title: "member 5",
        address: "address",
        image: require("../../../assets/images/user.jpeg"),
        type: "member"
    },
    {
        title: "member 6",
        address: "address",
        image: require("../../../assets/images/user.jpeg"),
        type: "member"
    },
    {
        title: "member 7",
        address: "address",
        image: require("../../../assets/images/user.jpeg"),
        type: "member"
    },
    {
        title: "member 8",
        address: "address",
        image: require("../../../assets/images/user.jpeg"),
        type: "member"
    },
]

const Groupdetail = () => {
    const [selected, setSelected] = useState("1")
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Image source={require("../../../assets/images/back.jpeg")}
                style={styles.backimage} />

            <SafeAreaView style={styles.safeview}>
                <View style={{ flex: 1, alignItems: "center" }}>


                    <View style={styles.menuview}>
                        <TouchableOpacity onPress={() => navigation.openDrawer()}>
                            <Icon name="menu"
                                type="entypo"
                                size={30}
                                color={icon.black} />
                        </TouchableOpacity>
                    </View>

                    <View style={{ width: 85, height: 85, borderRadius: 85 / 2, borderWidth: 0.5, borderColor: "black", alignItems: "center", justifyContent: "center" }}>
                        <Image source={require("../../../assets/images/user.jpeg")}
                            style={styles.image} />
                    </View>

                    <TEXT title="Group Name"
                        size={17}
                        weight={"bold"}
                        style={{ marginTop: 10 }} />

                    <TEXT title="Goverment Helper name"
                        size={16}
                        weight={"600"}
                        style={{ marginTop: 5 }} />

                    <View style={styles.bottomview}>
                        <View style={styles.headercontain}>
                            <View style={{
                                ...styles.headerview,
                                borderBottomWidth: selected == 1 ? 3 : null,

                            }}>
                                <TouchableOpacity onPress={() => setSelected("1")}>
                                    <TEXT title="Group Leader"
                                        size={16}
                                        color={selected == 1 ? text.primary : text.black}
                                        weight={"bold"} />
                                </TouchableOpacity>
                            </View>
                            <View style={{
                                ...styles.headerview,
                                borderBottomWidth: selected == 2 ? 3 : null,
                            }}>
                                <TouchableOpacity onPress={() => setSelected("2")}>
                                    <TEXT title="Group Members"
                                        size={16}
                                        color={selected == 2 ? text.primary : text.black}
                                        weight={"bold"} />
                                </TouchableOpacity>
                            </View>
                        </View>


                        <View style={{ flex: 1 }}>
                            {selected == 1 ?
                                <Leader data={group} />
                                :
                                <Member data={group} />
                            }
                        </View>
                    </View>

                </View>

            </SafeAreaView>
        </View>
    );
}

export default Groupdetail