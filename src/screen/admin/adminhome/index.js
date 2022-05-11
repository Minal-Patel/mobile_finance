import React ,{useRef}from 'react'
import { TouchableOpacity } from 'react-native'
import {View , Text , SafeAreaView , Animated} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements';
import {styles} from './style'
import { useDispatch, useSelector } from 'react-redux'

// Helper 
import {registerUser} from '../../../helper/authentication'
import {creategroup} from '../../../helper/group'
import { ScrollView } from 'react-native';
import { icon, text } from '../../../utility/color/color';



const list = [
    {
        title : 'Reguster User',
        nav : "Signup",
        iname :"md-person-add",
        itype :"ionicon",
        color :icon.darkblue,
        testcolor : text.primary
    },
    {
        title : 'Loan ',
        nav : "loan",
        iname :"bank",
        itype :"antdesign",
        color :icon.darkblue,
        testcolor : text.primary
    },
    {
        title : 'Loan ',
        nav : "Signup",
        iname :"md-person-add",
        itype :"ionicon"
    }
]
const Adminhome = () =>{
    const navigation = useNavigation();
    const change = useRef(new Animated.ValueXY()).current
    // const changeresponce = useRef(
    //     changeresponce.create({
    //         onsetResponce : () => true ,
    //         onmouseup :Animated.event([
    //             Animated.
                
    //         ])
    //     })
    // )

    const users = useSelector(state => state.userReducer?.user)

    console.log("$$$$$$$$",users)
    return(
        <SafeAreaView style={{flex:1}}>
        <View style={styles.container}>
            
            <Text style={styles.name}>{users.User_name}</Text>
            <Text style={styles.group}>{users.Group_name}</Text>
            
            {/* <View style={styles.bottomcontainer}> */}
                <ScrollView style={styles.bottomcontainer}>
                    <View style={styles.bottomview}>
                        {list.map((item , i) =>{
                            return(
                               
                                <TouchableOpacity onPress={() =>navigation.navigate(item.nav)} style={styles.cardview}>
                                     <Icon name={item.iname}
                                        type={item.itype}
                                        size={40}
                                        color={item.color}
                                       />

                                       <Text style={{...styles.cardtitle , color:item.testcolor}}>{item.title}</Text>
                                </TouchableOpacity>
                            
                            );
                        })}
                    </View>
                </ScrollView>
            {/* </View> */}
            {/* <TouchableOpacity onPress={() =>navigation.navigate("Signup")}>
                <Text>Register User</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() =>navigation.navigate("Signup")}>
                <Text>Add loan</Text>
            </TouchableOpacity> */}
        </View>
        </SafeAreaView>
    );
}

export default Adminhome