import firestore from '@react-native-firebase/firestore';
import { str } from '../string'
import {Alert} from 'react-native'

export const addLoan =  async (title ,amount , intrest , type) =>{

    const res = await firestore()
    .collection(str.LOAN_COLLECTION)
    .add({
      Loan_title : title,
      Loan_type : type , 
      Loan_amount : amount,
      Intrest_rate : intrest,
  
    })
    .then((res) =>{
    console.log("$$$$$$$$$$",res?._documentPath?._parts)
  
      Alert.alert(str.LOAN_ADDES)
      return true
    })
    .catch(()=>{
      Alert.alert(str.ERROR)
     return false
    })
  
    return res
}