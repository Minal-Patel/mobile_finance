import React, { useState } from 'react'
import { SafeAreaView } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { View, Text } from 'react-native'
import { Icon } from 'react-native-elements'
import { styles } from './style'
import { TEXT } from '../../../../components/Text'
import { icon, text } from '../../../../utility/color/color'
import { ScrollView } from 'react-native'
import { TextInput } from 'react-native'

const AddLoan = () => {
    const [title, setTitle] = useState("")
    return (
        <SafeAreaView style={styles.safecontainer}>
            <View style={styles.maincontain}>
                <View style={styles.headerview}>
                    <TouchableOpacity style={{ width: "15%" }}>
                        <Icon name="ios-chevron-back"
                            type="ionicon"
                            size={35}
                            color={icon.primary} />
                    </TouchableOpacity>
                    <View style={styles.headertitleview}>
                        <TEXT title="Add Loan"
                            color={text.primary}
                            weight={"bold"}
                            size={20} />
                    </View>
                </View>

                <ScrollView style={styles.formview}>

                    <View style={styles.feildview}>

                        <TEXT title="Loan Title : "
                            color={text.darkblue}
                            weight={"bold"}
                            size={20} />

                        <View style={styles.textinput}>

                            <TextInput placeholder="Type loan title"
                                style={{ fontSize: 15 }}
                                value={title}
                                onChangeText={(text) => setTitle(text)} />
                        </View>

                    </View>


                    <View style={{ flexDirection: "row", width: "100%" }}>
                        <View style={{ ...styles.feildview, width: "50%" }}>

                            <TEXT title="Loan Amount : "
                                color={text.darkblue}
                                weight={"bold"}
                                size={20} />

                            <View style={styles.textinput}>

                                <TextInput placeholder="Type loan title"
                                    style={{ fontSize: 15 }}
                                    value={title}
                                    onChangeText={(text) => setTitle(text)} />
                            </View>

                        </View>

                        <View style={{ ...styles.feildview, width: "50%" }}>

                            <TEXT title="Intrest Rate :  "
                                color={text.darkblue}
                                weight={"bold"}
                                size={20} />

                            <View style={styles.textinput}>

                                <TextInput placeholder="Amount"
                                    style={{ fontSize: 15 }}
                                    value={title}
                                    onChangeText={(text) => setTitle(text)} />
                            </View>

                        </View>

                    </View>

                </ScrollView>
            </View>
        </SafeAreaView>
    );
}

export default AddLoan