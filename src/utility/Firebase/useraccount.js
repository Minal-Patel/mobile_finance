import firestore from '@react-native-firebase/firestore';
import { str } from '../string'

export const createaccount = async (groupid , userid) =>{

    const account = await firestore()
    .collection(str.USERACCOUNT_COLLECTION)
    .add({
        User_id : userid,
        Group_id : groupid ,
        Deposit : 0,
        Lone : [
            {
                loan_id :"",
                loan_type : "",
                loan_value : "", 
                intrest_value : "",
                numberof_month : "",
                installment_value : "",
                completed_month :"",
                pnding_month :"",
                status : ""


            }
        ]
    })
    .then((res) => {
        console.log(str.USER_ADDED, res);
  
    
      })
}