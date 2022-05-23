import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Adminhome from '../screen/admin/adminhome'
import Loan from '../screen/admin/Loan'
import AddLoan from '../screen/admin/Loan/addLoan'
import UserLoan from '../screen/admin/Loan/userLoan'

const Stack = createNativeStackNavigator();


const Admintack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false, drawerStyle: { width: "65%" } }} drawerContent={() => <DrawerContant />} >
       <Stack.Screen name="adhome" component={Adminhome} /> 
       <Stack.Screen name="loan" component={Loan} /> 
       <Stack.Screen name="Addloan" component={AddLoan} /> 
       <Stack.Screen name="UserLoan" component={UserLoan} /> 
    </Stack.Navigator>
  );
}

export default Admintack