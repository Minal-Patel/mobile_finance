import React from 'react'
import {View , Text , TouchableOpacity} from 'react-native'
import { useNavigation } from '@react-navigation/native';

const list = [
    {
        title : "Add Loan"
    },
    {
        title : "Active Loan"
    },
    {
        title : "All loans"
    },
]
const Loan = () =>{
    const navigation = useNavigation();
    return (
        <View style={{flex:1 , alignItems:"center",justifyContent:"center"}}>
            <TouchableOpacity onPress={()=>navigation.navigate("Addloan")}>
                <Text>Add Loan</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate("UserLoan")}>
                <Text>User loan</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Loan