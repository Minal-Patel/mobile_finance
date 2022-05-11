import { StyleSheet } from 'react-native'
import { colors } from '../../../utility/color/color'

export const styles = StyleSheet.create({
    container: { flex: 1, alignItems: "center", backgroundColor: colors.secondrycolor, paddingTop: "20%" },
    image: { width: 140, height: 140, borderRadius: 140 / 2 },
    inputcontainer: {flex: 1, width: "100%", height: "100%", alignItems: "center", justifyContent: "center" },
    inputbox: { zIndex:-1 , width: "80%", marginBottom: 20, backgroundColor: colors.white, padding: 15, borderRadius: 15, paddingHorizontal: 20, justifyContent: "center", },
    inputview: { flexDirection: "row", marginTop: 5, alignItems: "center", flex: 1, width: "100%" },
    input: { marginLeft: 10 },
    bottomview: { width: "80%", flexDirection: "row", justifyContent: "space-between", marginTop: 20 },

    //Dropdown
    dropcontainer: {
        width: "112%",
        backgroundColor: colors.white,
        borderRadius: 5,
        alignSelf:"center",
        justifyContent: "center",
        top: 78,
        position: "absolute",
        shadowColor:"pink",
        shadowOffset:{width:0 , height:2},
        shadowRadius:2,
        shadowOpacity:0.5,
        paddingHorizontal:10,
        paddingVertical:10,
        zIndex:1
        
     
    },
    droupView:{
        paddingVertical:5
    }
})