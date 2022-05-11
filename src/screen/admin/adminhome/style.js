import { StyleSheet } from 'react-native'
import { colors, border, background, text } from '../../../utility/color/color'

export const styles = StyleSheet.create({
    container: { flex: 1, alignItems: "center", backgroundColor: background.purple },
    outcircle: { width: 85, height: 85, borderRadius: 85 / 2, borderWidth: 3, borderColor: border.purple, alignItems: "center", justifyContent: "center" },
    incircle: { width: 70, height: 70, borderRadius: 70 / 2, backgroundColor: border.purple, alignItems: "center", justifyContent: "center" },
    mainview: { justifyContent: "center", alignItems: "center" },
    text: { fontSize: 15, color: text.primary, fontWeight: "bold", marginTop: 10 },
    name: { fontSize: 30, fontWeight: "bold", color: text.white, marginTop: 20, },
    group: { fontSize: 20, marginTop: 10, fontWeight: "600", color: "#f0e9f0" },
    bottomcontainer: {
        flex: 1,
        marginTop: 25,
        backgroundColor: background.white,
        width: "95%",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: "5%",
        paddingVertical: 40,


    },
    scroll: { flex: 1 },
    bottomview: { flex: 1, flexDirection: "row", width: "100%", flexWrap: "wrap", justifyContent: "space-between" },
    cardview: {
        height: 150,
        width: "48%",
        backgroundColor: background.white,
        marginTop:10,
        borderRadius:15,
        shadowColor:background.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 1,
        justifyContent:"center",
        alignItems:"center"
    },
    cardtitle:{fontSize:15 ,marginTop:10,fontWeight:"600" ,}

})