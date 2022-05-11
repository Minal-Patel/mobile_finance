import React from 'react'
import { View, Text } from 'react-native'
import { styles } from './style';
import { Icon } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';


const Switchaccount = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.mainview} onPress={() =>navigation.navigate("Drawer")}>
                <View style={styles.outcircle}>
                    <View style={styles.incircle}>
                        <Icon name="account"
                            type="material-community"
                            size={60}
                            color={"white"} />
                    </View>
                </View>
                <Text style={styles.text}>My account</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{...styles.mainview , marginTop:"10%"}} onPress={() =>navigation.navigate("Adminhome")}>
                <View style={styles.outcircle}>
                    <View style={styles.incircle}>
                        <Icon name="account"
                            type="material-community"
                            size={60}
                            color={"white"} />
                    </View>
                </View>
                <Text style={styles.text}>Group account</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Switchaccount
