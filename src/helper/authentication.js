//Firebase 
import { Alert } from 'react-native'

import { loginfirebase, signup, test } from '../utility/Firebase/auth'
import { getUserdataBytoken } from '../utility/Firebase/user'
import { getdataBygroupname, getdataBytoken, putpresident , putminister , puttreasurer } from '../utility/Firebase/group'
import { createaccount } from '../utility/Firebase/useraccount'

//redux
import { addtoken } from '../utility/redux/action/authtokenAction'
import { Adduser } from '../utility/redux/action/userData'
import { Addgroupdata, } from '../utility/redux/action/group'
import { Incressnumber } from './group'
//import { createAccount } from './user'



export const Loginuser = async (navigation, dispatch, username, password) => {

    const res = await loginfirebase(username, password)
    const userid = res?.id ?? ""
    const groupid = res?.Group_id

    const groupdata = await getdataBytoken(groupid)

    if (res !== undefined) {
        try {
            await AsyncStorage.setItem("@token", res)
            alert('Data successfully saved')
        } catch (e) {
            //   alert('Failed to save the data to the storage')
        }



        dispatch(Addgroupdata(groupdata))
        dispatch(addtoken(userid))
        dispatch(Adduser(res))

        if (res.Member_type == "member") {
            navigation.navigate("Drawer")
        } else {
            navigation.navigate("SwitchScreen")
        }

    }
}

export const registerUser = async (groupname, groupid, username, number, address, password, navigation, type) => {

    // const groupdata = await getdataBygroupname(groupname)
    // const groupid = groupdata[0].id


    const data = await signup(groupname, username, number, password, address, type, groupid)
    const usertoken = data[1]
    const userid = usertoken
    if (data !== false) {


        const userdata = await getUserdataBytoken(usertoken)
        const username = userdata.User_name

        Alert.alert(`"Username" : ${userdata.User_name} , "Password" : ${userdata.Password} , "Group_name" : ${userdata.Group_name}`)

        const res = await Incressnumber(groupname)

        if (res === true) {

            const account = createaccount(groupid, userid)

            switch (type) {
                case "member":
                    navigation.navigate("Adminhome")
                    break;
                case "President":
                    putpresident(groupid, username)
                    navigation.navigate("Adminhome")
                    break;
                case "Minister":
                    putminister(groupid, username)
                    navigation.navigate("Adminhome")
                    break;
                case "Treasurer":
                    puttreasurer(groupid, username)
                    navigation.navigate("Adminhome")
                    break;
                default:
                    navigation.navigate("Adminhome")

            }


        }

    }


}