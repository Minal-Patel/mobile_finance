import { StyleSheet } from 'react-native'
import { background, border, colors } from '../../../utility/color/color'

export const styles = StyleSheet.create({
container:{flex:1 , alignItems:"center",justifyContent:"center",padding:10},
leadercon:{alignItems:"center"},
card:{ 
    width: "100%",
     padding: 10,
      flexDirection: "row" ,
     // borderBottomWidth:0.2,
      //borderBottomColor:"#800080",
      shadowOffset:{width:5 , height:5},
      shadowColor:"#cccccc",
      shadowOpacity:0.5,shadowRadius:5,
      elevation:5,
      backgroundColor:background.white,
      borderRadius:25,marginTop:15
    },
image : {  width:60 , height:60 , borderRadius:60/2 ,marginTop:10},
textview:{ flex: 1, justifyContent: "space-evenly", paddingLeft: 15 },

})