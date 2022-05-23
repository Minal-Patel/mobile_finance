import React, { useState } from 'react'
import { SafeAreaView } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { View, Text } from 'react-native'
import { Icon } from 'react-native-elements'
import { styles } from './style'
import { TEXT } from '../../../../components/Text'
import { BUTTON } from '../../../../components/Button'
import { icon, text, button } from '../../../../utility/color/color'
import { ScrollView } from 'react-native'
import { TextInput } from 'react-native'
import {loanadd} from '../../../../helper/loan'
import { useNavigation } from '@react-navigation/native';

const AddLoan = () => {
    const navigation = useNavigation();
    const [title, setTitle] = useState("")
    const [amount, setAmount] = useState("")
    const [intrest, setIntrest] = useState('')
    const [type, setType] = useState("")

    const handlesubmit = () =>{
        loanadd(title ,amount , intrest , type , navigation)
       
            navigation.navigate("loan")
       
    }

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
                    <View style={{flex:1, height:"100%",width:"100%"}}>

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
                                    value={amount}
                                    keyboardType="numeric"
                                    onChangeText={(text) => setAmount(text)} />
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
                                    value={intrest}
                                    onChangeText={(text) => setIntrest(text)} />
                            </View>

                        </View>

                    </View>

                    <View style={styles.feildview}>

                        <TEXT title="Loan Type: "
                            color={text.darkblue}
                            weight={"bold"}
                            size={20} />

                        <View style={styles.textinput}>

                            <TextInput placeholder="Loan type...."
                                style={{ fontSize: 15 }}
                                value={type}
                                onChangeText={(text) => setType(text)} />
                        </View>

                    </View>

                    <BUTTON width={"90%"}
                        height={60}
                        bradius={60 / 2}
                        title="Submit"
                        size={18}
                        color={text.white}
                        weight={"700"}
                        background={button.purple}
                        style={{marginTop:20, bottom : 0 , alignSelf:"center"}}
                      hadlebutton = {handlesubmit}
                    />
</View>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}

export default AddLoan