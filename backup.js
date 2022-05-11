/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { useEffect, useState } from 'react';
 import { View, Text, TouchableOpacity, TextInput } from 'react-native'
 import auth from '@react-native-firebase/auth';
 import database from '@react-native-firebase/database';
 import { getDatabase, ref, onValue, get, child, cloud, service } from "firebase/database";
 import { initializeApp } from "firebase/app";
 import firestore from '@react-native-firebase/firestore';
 import { NavigationContainer } from '@react-navigation/native';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';
 
 const firebaseConfig = {
   apiKey: "AIzaSyBIPjOwHQ6R7gJeyTF3jHOdmsHoltmsuuY",
   authDomain: "sakhimandal-94f4f.firebaseapp.com",
   projectId: "sakhimandal-94f4f",
   storageBucket: "sakhimandal-94f4f.appspot.com",
   messagingSenderId: "386696223895",
   appId: "1:386696223895:web:609ae39cb01165941cddd2"
 };
 const app = initializeApp(firebaseConfig);
 
 const dbRef = ref(getDatabase());
 const reference = database().ref('/users/123');
 const App = () => {
   const [fname, setName] = useState("")
   const [number, setNumber] = useState()
 
   const createuser = async () => {
     let email = "email@gmail.com"
     let password = "1234pass"
 
     let responce = await auth().createUserWithEmailAndPassword(email, password)

   }
 
 
   const signin = async () => {
 
     let email = "email@gmail.com"
     let password = "1234pass"
 
     let responce = await auth().signInWithEmailAndPassword(email, password)
  
   }
 
   useEffect(() => {
     const subscriber = firestore()
       .collection('Users')
       .onSnapshot(() => {
         // see next step
       });
 
     // Unsubscribe from events when no longer in use
     return () => subscriber();
   }, []);
 
   const addItem = async () => {
 
     function onResult(QuerySnapshot) {
       console.log('Got Users collection result.');
     }
 
     function onError(error) {
       console.error("Error", error);
     }
 
 
 
     const user = firestore()
       .collection('Users')
       .add({
         name: 'Ada Lovelace',
         age: 32,
       })
       .then(() => {
         console.log('User added!');
       });
 
     // const user = firestore().collection('Users').onSnapshot(documentSnapshot => {
     //   console.log('User data: ',documentSnapshot.size);
     // });
     //console.log(user)
   }
 
 
   return (
     <View style={{ marginTop: 150, alignItems: "center", justifyContent: "center" }}>
       <Text>Register</Text>
 
       <View style={{ borderWidth: 1, width: "70%", marginTop: 15, padding: 15 }}>
         <TextInput placeholder="Name"
           value={fname}
           onChangeText={value => setName(value)} />
       </View>
 
       <View style={{ borderWidth: 1, width: "70%", marginTop: 15, padding: 15 }}>
         <TextInput placeholder="Number"
           value={number}
           onChangeText={value => setNumber(value)} />
       </View>
 
       <TouchableOpacity style={{ marginTop: 25 }} onPress={() => addItem()}>
         <Text>submit</Text>
       </TouchableOpacity>
 
 
     </View>
   );
 }
 
 export default App;




//  <View style={{
//   width: width -10,
//   height: width -10,
//   backgroundColor: "rgba(183, 125, 185,0.2)",
//   position: "absolute",
//   transform: [{ rotate: '0deg' }],
//   borderRadius: width / 2,
//   marginLeft: -80,
//   marginTop: -50,
//   zIndex: -1
//   // width: width + 180,
//   // height: width + 180,
//   // backgroundColor: "rgba(183, 125, 185,0.3)",
//   // position: "absolute",
//   // borderRadius: 500 / 2,
//   // transform: [{ rotate: '0deg' }],
//   // marginLeft: -270,
//   // marginTop: -190,
//   // zIndex: -1
// }} >

// </View>
// <View style={{
//   width: width -40,
//   height: width -40,
//   backgroundColor: "rgba(183, 125, 185,0.5)",
//   position: "absolute",
//   borderRadius: width / 2,
//   marginLeft: -80,
//   marginTop: -50,
//   zIndex: -1
//   // width: width + 150,
//   // height: width + 150,
//   // backgroundColor: "rgba(183, 125, 185,1)",
//   // opacity:0.5,
//   // position: "absolute",
//   // borderRadius: 500 / 2,
//   // marginLeft: -280,
//   // marginTop: -190,
//   // zIndex: -1
// }} >

// </View>
{/* <View style={{
  width: width + 100,
  height: width + 100,
  backgroundColor: "rgba(183, 125, 185,1)",
  position: "absolute",
  borderRadius: 500 / 2,
  marginLeft: -270,
  marginTop: -180,
  zIndex: -1
}} >

</View> */}
{/* <View style={{
  width: width -80,
  height: width -80,
  backgroundColor: "rgba(183, 125, 185,1)",
  position: "absolute",
  borderRadius: width / 2,
  marginLeft: -70,
  marginTop: -50,
  zIndex: -1
}} >

</View> */}
 