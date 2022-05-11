import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage'
import { TextInputMask } from 'react-native-masked-text'

//component
import { styles } from './style'
import { Login } from './Login'
import { Signup } from './Signup'

//helper
import { signup, loginfirebase } from '../../utility/Firebase/auth'
import { Loginuser } from '../../helper/authentication'
import { Adduser } from '../../utility/redux/action/userData'
import { add } from 'react-native-reanimated';

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



    const changelogin = (value) => {
        setPassword("")
        setUsername("")
        if (value == "signup") {
            setLogin(false)
        } else {
            setLogin(true)
        }
    }

    const handlelogin = () => { Loginuser(navigation, dispatch, username, password) }


    return (
        <View style={styles.container}>
            <Image source={require("../../../assets/images/logo.jpeg")}
                style={styles.image} />
            
            <View style={{ flex: 1, width: "100%", height: "100%" }}>
                
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