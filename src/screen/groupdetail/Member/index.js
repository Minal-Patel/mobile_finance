import React from 'react'
import { TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native';
import { View, Text, Image } from 'react-native'
import { Icon } from 'react-native-elements';
import { TEXT } from '../../../components/Text';
import { icon, text } from '../../../utility/color/color';
import { styles } from './style';

export const Member = (props) => {
    const { data } = props
    return (
        <ScrollView >
            <View style={styles.container}>
                {data.map((item, i) => {
                    return (
                        <View style={styles.card}>
                            <Image source={item.image}
                                style={styles.image} />
                            <View style={styles.textview}>

                                <TEXT title={item.title}
                                    size={16}
                                    weight={"600"}
                                    color={text.darkblue}
                                    style={{ marginTop: 5 }} />
                                <TEXT title={item.address}
                                    size={13} />
                            </View>

                            <TouchableOpacity style={{alignItems:"center",alignSelf:"center",paddingRight:15}}>
                                <Icon type="material-community"
                                    name="account-arrow-right"
                                    color={icon.darkblue} />
                            </TouchableOpacity>
                        </View>
                    );
                })}
            </View>
        </ScrollView>
    );
}