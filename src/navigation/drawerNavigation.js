import React from 'react'
import {View , Text , Dimensions} from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContant from './drawercontant'
import Home from '../screen/home'
import Myaccount from '../screen/myaccount'
import Groupdetail from '../screen/groupdetail'
import Groupaccount from '../screen/groupaccount'

const Drawer = createDrawerNavigator();
const width = Dimensions.get("screen").width
const DrawerNavigation = () =>{
    return(
        <Drawer.Navigator screenOptions={{headerShown:false , drawerStyle:{width:"65%"}}} drawerContent={() => <DrawerContant />} >
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Myaccount" component={Myaccount} />
        <Drawer.Screen name="Groupdetail" component={Groupdetail} />
        <Drawer.Screen name="Groupaccount" component={Groupaccount} />
      </Drawer.Navigator>
    );
}

export default DrawerNavigation