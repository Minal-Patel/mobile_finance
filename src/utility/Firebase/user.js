import firestore from '@react-native-firebase/firestore';
//Helper
import {str} from '../string'

export const getUserdataBygroup= (grouptitle) => {
    
    const adduser = firestore()
      .collection(str.USER_COLLECTION)
      .where(str.GROUP_NAME_FIELD , "==" , grouptitle)
      .get()
      .then((snapshot) => {
        const data = snapshot._docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        if (data.length > 0) {
  
          return data
  
        } else {
          alert(str.ENTER_VALID_DATA , grouptitle)
        }
  
      });
  
    return adduser
  
  
  }

export const getUserdataBytoken = (usertoken) => {
    let token = usertoken
    var Udata = {}
    const adduser = firestore()
      .collection(str.USER_COLLECTION)
      .get()
      .then((snapshot) => {
        const data = snapshot._docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        if (data.length > 0) {
  
          const res = data.map((item, i) => {
            if (item.id == usertoken) {
              Udata = item
            }
  
          })
  
          return Udata
  
        } else {
          alert(str.ENTER_VALID_DATA)
        }
  
      });
  
    return adduser
  
  
  }

