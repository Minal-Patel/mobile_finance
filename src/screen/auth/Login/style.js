import { StyleSheet } from 'react-native'
import { colors } from '../../../utility/color/color'

export const styles = StyleSheet.create({
 
    inputcontainer: { flex: 1, width: "100%",height:"100%", alignItems: "center",justifyContent:"center"},
    inputbox: { width: "80%",marginBottom:20, backgroundColor: colors.white ,padding:15,borderRadius:15,paddingHorizontal:20,justifyContent:"center",},
    inputview: {flexDirection:"row",marginTop:5,alignItems:"center"},
    input:{marginLeft:10},
    bottomview:{width:"80%" , flexDirection:"row",justifyContent:"space-between",marginTop:20}
})