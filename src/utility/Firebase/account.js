import firestore from '@react-native-firebase/firestore';
import { str } from '../string'

export const createAccount = async (groupid) => {

    const ifsc = "BANKOFBARODA0M"
    const balance = 0
    const acnumber = 123456789
    const tra_date = ""
    const holdername = ""
    const amount = 0
    const type = ""
    const afterbalance = 0
    const branchname = ""
    const comment = ""


    const account = await firestore()
        .collection(str.ACCOUNT_COLLECTION)
        .add({
            Group_id: groupid,
            Ac_no: acnumber,
            AC_IFSCcode: ifsc,
            AC_Balance: balance,
            Transaction: [
                {
                    Tra_Amount: amount,
                    Tra_type: type,
                    After_balance: afterbalance,
                    Tra_branch: branchname,
                    Other_comment: comment,
                    Tra_date: tra_date,
                    Holder_name: holdername,

                }
            ]

        })
        .then((res) => {
            return res?._documentPath?._parts
        })
        .catch(() => {
            Alert.alert(str.ERROR)
            return false
        })

        return account

}