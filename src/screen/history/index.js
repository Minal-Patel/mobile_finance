import React from 'react'
import { ScrollView } from 'react-native'
import { View, Text, SafeAreaView } from 'react-native'
import { TEXT } from '../../components/Text'
import { colors } from '../../utility/color/color'
import { styles } from './style'
import LinearGradient from 'react-native-linear-gradient';

const palyment = [
    {
        title: "Regular installment",
        ammount: "300",
        leader: "Leader Name",
        date: "04/05/2022"

    },
    {
        title: "Regular installment",
        ammount: "300",
        leader: "Leader Name",
        date: "04/06/2022"

    },
    {
        title: "Regular installment",
        ammount: "300",
        leader: "Leader Name",
        date: "04/03/2022"

    },
    {
        title: "Regular installment",
        ammount: "300",
        leader: "Leader Name",
        date: "04/02/2022"

    },
]


const History = () => {
    return (
        <SafeAreaView style={styles.safecontainer}>
            <ScrollView style={styles.scrollcontain}>
                <View style={styles.container}>
                    {palyment.map((detail, i) => {
                        return (
                            <LinearGradient
                                colors={["#f4f4f4", "white"]}
                                start={{ x: 0.36, y: 0.02 }}
                                end={{ x: 1, y: -1 }}
                                //  locations={0,5}
                                style={{ marginBottom: 15,borderRadius:5 }}

                            >
                                <View style={{ ...styles.cardcontainer, borderColor: i % 2 == 0 ? "#b2d089" : colors.primarycolor }}>
                                    <View style={styles.datecard}>
                                        <TEXT title="5"
                                            size={18}
                                            weight={"bold"}
                                            color={"#2e3e4a"} />
                                        <TEXT title="May"
                                            size={13}
                                            weight={"600"}
                                            color={"#979ea4"} />
                                    </View>
                                    <View style={styles.rightview}>
                                        <View style={{ flex: 1, minHeight: 40, justifyContent: "space-between" }}>
                                            <TEXT title={detail.title}
                                                size={16}
                                                weight={"bold"}
                                                color={"#2e3e4a"} />
                                            <TEXT title={detail.leader}
                                                size={12}
                                                weight={"600"}
                                                color={"#979ea4"}
                                                style={{ marginTop: 3 }} />
                                        </View>
                                        <TEXT title={`${detail.ammount} /-`}
                                            size={20}
                                            weight={"bold"}
                                            color={"#b2d089"}
                                            style={{}} />

                                    </View>
                                </View>
                            </LinearGradient>
                        );
                    })}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default History