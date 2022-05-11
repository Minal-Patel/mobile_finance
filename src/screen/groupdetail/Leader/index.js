import React from 'react'
import { TouchableOpacity } from 'react-native';
import { View, Text, Image } from 'react-native'
import { TEXT } from '../../../components/Text';
import { text } from '../../../utility/color/color';
import { styles } from './style';

export const Leader = (props) => {
    const { data } = props
    return (
        <View style={styles.container}>
            {data?.map((item) => {
                if (item.type == "Leader1")
                    return (
                        <View style={styles.leadercon}>
                            <TouchableOpacity style={{ alignItems: "center" }}>
                                <View style={{
                                    width: 75,
                                    height: 75,
                                    backgroundColor: "pink",
                                    alignItems: "center",
                                    borderRadius: 75,
                                    shadowColor: "#cccccc",
                                    shadowOpacity: 0.5,
                                    shadowRadius: 5,
                                    shadowOffset: { width: 5, height: 10 },
                                    elevation: 5,
                                }}>
                                    <Image source={item.image}
                                        style={styles.image} />
                                </View>
                                <TEXT title={item.type}
                                    size={25}
                                    weight={"600"}
                                    color={text.primary} />
                                <TEXT title={item.title}
                                    size={15}
                                    weight={"600"}
                                    color={text.darkblue}
                                    style={{ marginTop: 5 }} />
                            </TouchableOpacity>

                        </View>
                    );


            })}
            <View style={{ flexDirection: "row", marginTop: 15, justifyContent: "space-around", width: "100%" }}>
                {data?.map((item) => {


                    if (item.type == "Leader2" || item.type == "Leader3")
                        return (
                            <View style={styles.leadercon}>
                                <TouchableOpacity style={{ alignItems: "center" }}>
                                <View style={{
                                    width: 75,
                                    height: 75,
                                    backgroundColor: "pink",
                                    alignItems: "center",
                                    borderRadius: 75,
                                    shadowColor: "#cccccc",
                                    shadowOpacity: 0.5,
                                    shadowRadius: 5,
                                    shadowOffset: { width: 5, height: 10 },
                                    elevation: 5,
                                }}>
                                    <Image source={item.image}
                                        style={styles.image} />
                                        </View>
                                    <TEXT title={item.type}
                                        size={25}
                                        weight={"600"}
                                        color={text.primary} />
                                    <TEXT title={item.title}
                                        size={15}
                                        weight={"600"}
                                        color={text.darkblue}
                                        style={{ marginTop: 5 }} />
                                </TouchableOpacity>

                            </View>
                        );
                })}
            </View>



        </View>
    );
}