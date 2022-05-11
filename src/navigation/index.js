import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useDispatch, useSelector } from 'react-redux'
import AsyncStorage from '@react-native-community/async-storage'

//screens
import LoginScreen from '../screen/auth'
import Admin from '../screen/admin/admin'
import DrawerNavigation from './drawerNavigation'
import Signup from '../screen/auth/Signup/signup'
import Switchaccount from '../screen/admin/switchaccount'
import Adminhome from '../screen/admin/adminhome'
import Admintack from './adminStack'
import Testing from '../../src/tesing'

//helper
import { colors } from '../utility/color/color'
import History from '../screen/history'


const Stack = createNativeStackNavigator();

const Postauth = (props) => {


    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Drawer" component={DrawerNavigation} />
            <Stack.Screen name="History" component={History}
                options={{
                    headerShown: true,
                    headerTitle: "Payment History",
                    headerStyle: { backgroundColor: colors.white },
                    headerTitleStyle: { fontSize: 20, color: colors.dark_magenta, fontWeight: "bold" },
                    headerTransparent: true,
                    headerBackTitleVisible: false,
                    headerTintColor: colors.dark_magenta,

                }} />
            <Stack.Screen name="SwitchScreen" component={Switchaccount} />
            <Stack.Screen name="Adminhome" component={Admintack} />
            <Stack.Screen name="Signup" component={Signup} />
                
            
        </Stack.Navigator>
    )
}

const Navigation = () => {
    const dispatch = useDispatch()

    const usertoken = useSelector(state => state.tokenReducer.token)
    const users = useSelector(state => state.userReducer?.user);
    const type = users?.Member_type ?? ""

    const type1 = type
    const auth = usertoken
    const asynctoken = async () => {

        // if (auth == "") {
        //     try {
        //         const data = await AsyncStorage.getItem("@token")
        //         alert(data)

        //         if (data !== null) {
        //             dispatch({
        //                 type: "SET_TOKEN",
        //                 payload: data
        //             })
        //             //setAuth(false)
        //         }

        //     } catch (e) {
        //         alert('Failed to fetch the data from storage')
        //     }
        // } else {

        //     // setAuth(false)
        //     const res = await getUserdataBytoken(usertoken)

        //     dispatch(Adduser(res))

        // }

    }


    useEffect(() => {
        asynctoken()
    }, [usertoken])
   
    return (

        <NavigationContainer>
            {auth == "" ?
                <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Login">
                    <Stack.Screen name="Login" component={LoginScreen} />
                    <Stack.Screen name="Admin" component={Admin} />
                    <Stack.Screen name="Test" component={Testing} />
                </Stack.Navigator>
                :    
                 <Postauth />
            }
        </NavigationContainer>
    );

}

export default Navigation
