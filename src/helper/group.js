
import { Groupdata, getdataBygroupname, incressmember, createGroup, getdataBytoken } from '../utility/Firebase/group'
import { createAccount } from '../utility/Firebase/account'
import { signup } from '../utility/Firebase/auth'
import {registerUser} from '../helper/authentication'

export const creategroup = async () => {

    const address = "surat"
    const username = "Test1"
    const password = "test1"
    const type = "President"
    const number = 123456789
    const navigation = false

    const group = await createGroup()

    if (group !== false) {
        const groupid = group[1]

        const account = await createAccount(groupid)
         const data = await getdataBytoken(groupid)

         const groupname = data.Group_name
         const userdata = await registerUser(groupname,groupid, username, number, address, password, navigation, type)
       // const usredata = await signup(groupname, username, number, password, address, type , groupid)

        

    }
}


export const getGroupdata = async () => {
    const data = await Groupdata()

    return data
}



export const Incressnumber = async (groupname) => {
    console.log("HEllo incress", groupname)
    const groupdata = await getdataBygroupname(groupname)

    const docid = groupdata[0].id
    const number = groupdata[0].member + 1
    if (number > groupdata[0].member) {
        const incess = await incressmember(docid, number)
        return incess
    }

}

