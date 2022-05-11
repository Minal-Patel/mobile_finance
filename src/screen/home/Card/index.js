import React from 'react'
import {View , Text} from 'react-native'
import {TEXT} from '../../../components/Text'
import {styles} from './style'
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../../../utility/color/color'

export const Card = () =>{
    return(
        <LinearGradient 
        colors={["rgba(101,78,163, 0.4)", "rgba(234,175,200, 0.4)"]}
        start={{x: 0.3, y: 0.25}}
         style={styles.cardView}>
        <View style={{flex:1}}>
            <View>
                <TEXT title="Account balance"
                    //color={colors.white}
                    size={15}
                    weight={"500"} />

                <TEXT title="33000 /-"
                    //color={colors.white}
                    size={12}
                    weight={"500"}
                    style={{ marginTop: 5 }} />
            </View>

            <View style={{ flexDirection: "row", marginTop: 10, justifyContent: "space-between" }}>
                <View>
                    <TEXT title="Next Installment"
                        //color={colors.white}
                        size={15}
                        weight={"500"} />
                    <TEXT title="300/-"
                        //color={colors.white}
                        size={12}
                        weight={"500"}
                        style={{ marginTop: 5 }} />
                </View>
                <View>
                    <TEXT title="Due to..."
                        //color={colors.white}
                        size={15}
                        weight={"500"} />
                    <TEXT title="15/02/2022"
                        //color={colors.white}
                        size={12}
                        weight={"500"}
                        style={{ marginTop: 5 }} />
                </View>
            </View>
        </View>
        </LinearGradient>
    );
}