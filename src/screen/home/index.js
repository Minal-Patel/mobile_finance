import React from 'react'
import { TouchableOpacity } from 'react-native'
import { View, Text, StatusBar, SafeAreaView } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage'
import { useSelector, useDispatch } from 'react-redux';
import { Icon } from 'react-native-elements';
import { colors , background, icon, text} from '../../utility/color/color'
import { Image } from 'react-native';
import { styles } from './style';
import { TEXT } from '../../components/Text'
import { Card } from './Card'
import { ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { BUTTON } from '../../components/Button';

const detail = [
    {
        title: "History",
        name: "timer-sand-full",
        type: "material-community",
        color: icon.primary,
        nav: "History"

    },
    {
        title: "My AC",
        name: "piggy-bank",
        type: "material-community",
        color: icon.primary,
        nav: "Myaccount"

    },
    {
        title: "Group detail",
        name: "group",
        type: "font-awesome",
        color: icon.primary,
        nav: "Groupdetail"

    },
    {
        title: "Group AC",
        name: "bank",
        type: "font-awesome",
        color: icon.primary,
        nav: "Groupaccount"

    },
    {
        title: "Loan",
        name: "monetization-on",
        type: "material",
        color: icon.primary,
        nav: "History"

    },

]

const nextpayment = [
    {
        payment: "300",
        type: "Regular installment",
    },
    {
        payment: "300",
        type: "Regular installment",
    },
]
const Home = () => {

    const navigation = useNavigation();

    const users = useSelector(state => state.userReducer?.user)
    const group = useSelector(state => state.groupReducer?.gropudata)

    const leader = group?.Current_leader

    console.log("$$$$$$$$$$$$",group)
    return (
        <LinearGradient colors={[background.purple, "#e7d1e8", "#efdaf0"]} style={{ flex: 1 }}>

            <SafeAreaView style={styles.safearea}>

                <View style={styles.container}>

                    <View style={styles.headerview}>
                        <View style={styles.topview}>
                            <TouchableOpacity onPress={() => navigation.openDrawer()}>
                                <Icon name="menu"
                                    type="feather"
                                    size={30}
                                    color={icon.white} />
                            </TouchableOpacity>
                            <View style={styles.userview}>
                                <Icon name="bell"
                                    type="octicon"
                                    size={20}
                                    color={icon.white}
                                    style={styles.notifyicon} />
                                <Image source={require("../../../assets/images/user.jpeg")}
                                    style={styles.image} />
                            </View>
                        </View>


                        <TEXT title={users.Group_name}
                            color={text.white}
                            size={15}
                            style={{ marginTop: 10 }}
                        />
                        <TEXT title={users.User_name}
                            color={text.white}
                            size={25}
                            weight={"bold"}
                            style={{ marginTop: 10 }}
                        />

                        <TEXT title={leader}
                            color={text.white}
                            size={18}
                            weight={"bold"}
                            style={{ marginTop: 10, width: "100%", textAlign: "center" }}
                        />
                    </View>

                    <View style={styles.bottomview}>
                        <ScrollView>
                            <Card />

                            <View style={{ width: "100%", justifyContent: "space-between", flexDirection: "row", marginTop: "10%" }}>
                                <TEXT title="My detail"
                                    size={18}
                                    weight={"bold"}
                                    style={{ width: "100%", }}
                                />
                                <TouchableOpacity>
                                    <TEXT title="Other >>"
                                        size={15}
                                        weight={"bold"}
                                        color={text.darkblue}
                                        style={{ width: "100%", }}
                                    />
                                </TouchableOpacity>
                            </View>


                            <View style={{ flexDirection: "row", width: "100%", marginTop: 15, justifyContent: "space-between" }}>
                                {detail.map((detail, i) => {
                                    if (i < 4)
                                        return (
                                            <TouchableOpacity style={{ alignItems: "center" }} onPress={() => navigation.navigate(detail.nav)}>
                                                <View style={styles.detailcard}>
                                                    <Icon name={detail.name}
                                                        type={detail.type}
                                                        color={detail.color} />

                                                </View>
                                                <TEXT title={detail.title}
                                                    size={12}
                                                    style={{ marginTop: 5 }} />
                                            </TouchableOpacity>
                                        );
                                })}
                            </View>

                            <TEXT title="Next Payment"
                                size={18}
                                weight={"bold"}
                                style={{ width: "100%", marginTop: 25 }}
                            />

                            <View >
                                {nextpayment.map((payment, i) => {
                                    return (
                                        <View style={{ width: "100%", justifyContent: "space-between", alignItems: "center", backgroundColor: background.lightblue, marginTop: 15, padding: 15, alignSelf: "center", borderRadius: 25, flexDirection: "row" }}>
                                            <View >
                                                <TEXT title={payment.type}
                                                    size={15}
                                                    weight={"600"}
                                                    color={text.darkblue}
                                                />
                                                <TEXT title={"15/0/2022"}
                                                    size={12}
                                                    color={text.lightgray}
                                                    style={{ marginTop: 5 }}
                                                />
                                            </View>
                                            <TEXT title={`${payment.payment} /-`}
                                                size={18}
                                                weight={"bold"}
                                                style={{ width: "100%", }}
                                                color={text.green}
                                            />
                                        </View>
                                    );
                                })}
                            </View>

                            <BUTTON
                                // width={"100%"}
                                height={40}
                                bradius={40 / 2}
                                title="Pay Rs. 300"
                                size={18}
                                color={text.white}
                                weight={"700"}
                                background={background.purple}
                                hadlebutton="underr production"
                                style={{ marginTop: 15, }} />

                        </ScrollView>
                    </View>


                </View>
            </SafeAreaView>
        </LinearGradient>

    );
}

export default Home 