import firestore from '@react-native-firebase/firestore';
import { get, find, findIndex } from 'lodash'
import { Alert } from 'react-native';
//Helper
import { str } from '../string'

export const createGroup = async () =>{

const gname = "Sakhi mandal"
const minister = ""
const president = ""
const tresures = ""
const associate = "Priti Patel"

  const res = await firestore()
  .collection(str.GROUP_COLLECTION)
  .add({
    Current_leader : "",
    Group_name : gname,
    Minister : minister,
    President : president,
    Treasurer : tresures,
    associate : associate,
    member : 0
  })
  .then((res) =>{
    // console.log("$$$$$$$$$$",res?._documentPath?._parts)

    Alert.alert(str.USER_ADDED)
    return res?._documentPath?._parts
  })
  .catch(()=>{
    Alert.alert(str.ERROR)
    return false
  })

  return res
}

export const Groupdata = () => {

  const group = firestore()
    .collection(str.GROUP_COLLECTION)
    .get()
    .then((snapshot) => {
      const data = snapshot._docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      if (data.length > 0) {
        return data

      } else {
        alert(str.ENTER_VALID_DATA)
      }

    });

  return group


}

export const getdataBygroupname = (groupname) => {

  const bygroupname = firestore()
    .collection(str.GROUP_COLLECTION)
    .where(str.GROUP_NAME_FIELD, "==", groupname)
    .get()
    .then((snapshot) => {
      const data = snapshot._docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      if (data.length > 0) {
        return data

      } else {
        alert(str.ENTER_VALID_DATA)
      }

    });

  return bygroupname
}


export const getdataBytoken = async (groupid) => {

  var gdata = {}
  const groupdata = firestore()
    .collection(str.GROUP_COLLECTION)
    .get()
    .then((snapshot) => {
      const data = snapshot._docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),

      }));

      if (data.length > 0) {
        const filterdata = find(data, { id: groupid })

        return filterdata

      } else {
        alert(str.ENTER_VALID_DATA)
      }

    });

  return groupdata

}


export const incressmember = async (docid, number) => {

  const data = firestore()
    .collection(str.GROUP_COLLECTION)
    .doc(docid)
    .update({ member: number })
    .then(() => {

      console.log(str.USER_ADDED);

      return true
    })
    .catch(() => { console.log(str.ERROR); return false })

  return data
}

export const putpresident  = async  (groupid , username) =>{
  const data = firestore()
  .collection(str.GROUP_COLLECTION)
  .doc(groupid)
  .update({ President : username})
  .then(() =>{
    console.log("User Updated")
  })
  .catch(() => {console.log("Error")})
}

export const putminister  = async  (groupid , username) =>{
  const data = firestore()
  .collection(str.GROUP_COLLECTION)
  .doc(groupid)
  .update({ Minister : username})
  .then(() =>{
    console.log("User Updated")
  })
  .catch(() => {console.log("Error")})
}

export const puttreasurer  = async  (groupid , username) =>{
  const data = firestore()
  .collection(str.GROUP_COLLECTION)
  .doc(groupid)
  .update({ Treasurer : username})
  .then(() =>{
    console.log("User Updated")
  })
  .catch(() => {console.log("Error")})
}