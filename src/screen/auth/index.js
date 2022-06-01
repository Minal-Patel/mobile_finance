import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage'
import { TextInputMask } from 'react-native-masked-text'
import auth from '@react-native-firebase/auth';

//component
import { styles } from './style'
import { Login } from './Login'
import { Signup } from './Signup'

//helper
import { signup, loginfirebase } from '../../utility/Firebase/auth'
import { Loginuser } from '../../helper/authentication'
import { Adduser } from '../../utility/redux/action/userData'
import { add } from 'react-native-reanimated';
import { TextInput } from 'react-native';
import { Touchable } from 'react-native';

const group = ["group1", "group2"]

const LoginScreen = (props) => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const users = useSelector(state => state.userReducer?.user);


    const [state, setState] = useState({
        login: true,
        usename: "",
        password: ""
    })

    const [login, setLogin] = useState(true)
    const [username, setUsername] = useState("")
    const [userid, setUserid] = useState('')
    const [password, setPassword] = useState("")
    const [number, setNumber] = useState('')
    const [address, setAddress] = useState("")
    const [groupname, setGroupname] = useState("Group1")
     //confirma

     const [confirm , setConfirm] = useState()
     const [value , setValue] = useState("")


    const changelogin = (value) => {
        setPassword("")
        setUsername("")
        if (value == "signup") {
            setLogin(false)
        } else {
            setLogin(true)
        }
    }


    const handlelogin = async () => {
     //    Loginuser(navigation, dispatch, username, password)
   //  let phoneNumber = 8154822559
   let phoneNumber = 8238678399
  
     const confirmation = await auth().signInWithPhoneNumber("+91"+phoneNumber)
     //console.log("%%%%%%%",confirmation.confirm(verifiy))
     setConfirm(confirmation)
    
 }

const veri = () =>{
    confirm.confirm(value)
    .then(user =>  console.log("&&&&&&&",user))
    .catch(error => console.log("%%%%%",error))
}
        
    return (
        <View style={styles.container}>
            <Image source={require("../../../assets/images/logo.jpeg")}
                style={styles.image} />
            
            <View style={{ flex: 1, width: "100%", height: "100%" }}>
                <TextInput placeholder = "value"
                            value={value}
                            onChangeText={(tex) =>setValue(tex)}/>
                <TouchableOpacity onPress={() =>veri()}>
                    <Text>varify</Text>
                </TouchableOpacity>
                    <Login username={username}
                        setusername={setUsername}
                        setpassword={setPassword}
                        password={password}
                        changelogin={changelogin}
                        handlelogin={handlelogin}
                    />
            </View>
        </View>

    );
}
export default LoginScreen