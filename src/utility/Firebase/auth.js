
import firestore from '@react-native-firebase/firestore';
import firebase from '@react-native-firebase/app'
import { Alert } from 'react-native';

//helper 
import { str } from '../string'

export const signup = async (groupname, username, number, password, address, type , groupid) => {
  let data = ""

  const adduser = await firestore()
    .collection(str.USER_COLLECTION)
    .add({
      User_name: username,
      Group_id : groupid,
      Group_name: groupname,
      Number: number,
      Password: password,
      Address: address,
      Member_type: type,
     //

      // Group_id : firebase.firestore.Group_id.increment(1)
    })
    .then((res) => {
      console.log(str.USER_ADDED, res);

      data = res?._documentPath?._parts

    })
    .catch(() => { console.log(str.ERROR); data = false })

  return data

}


export const loginfirebase = (username, password) => {

  const adduser = firestore()
    .collection(str.USER_COLLECTION)
    .where(str.USER_NAME_FIELD, "==", username)
    .where(str.PASSWORD_FIELD, "==", password)
    .get()
    .then((snapshot) => {
      const data = snapshot._docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      if (data.length > 0) {

        return data[0]

      } else {
        alert(str.ENTER_VALID_DATA)
      }

    });

  return adduser


}


export const test = async () => {
  let data = ""

  const adduser = await firestore()
    .collection("test")
    .add({
     ds : "HEllo"
      //Group_id : 
   //   User_id : ReferenceError.
      // Group_id : firebase.firestore.Group_id.increment(1)
    })
    .then((res) => {
      console.log("test", res);

     // data = res?._documentPath?._parts

    })
    .catch(() => { console.log(str.ERROR); data = false })

  return data

}


