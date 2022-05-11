import { StyleSheet } from 'react-native'
import { background, border, colors } from '../../utility/color/color'

export const styles = StyleSheet.create({
 container : { flex: 1, alignItems: "center", },
 backimage : { width: "100%", height: "50%", opacity: 0.4 },
 safeview : { width: "100%", height: "100%", position: "absolute", padding: 20, },
 menuview : { width: "100%", alignItems: "flex-start", marginTop: 15 ,paddingHorizontal:15},
 image:{ width: 75, height: 75, borderRadius: 75 / 2 },
 bottomview : {
    flex: 1,
    backgroundColor: background.white,
    width: "100%",
    marginTop: 20,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    //padding: 25
},
headercontain : {
    width: "100%",
    flexDirection: "row",
    borderBottomWidth: 2,
    borderColor:border.pink,
    alignSelf: "center",
    paddingTop: 20,
},
headerview :{
    width: "50%",
    alignItems: "center",
    borderColor: border.pink,
     paddingBottom: 10
},

})