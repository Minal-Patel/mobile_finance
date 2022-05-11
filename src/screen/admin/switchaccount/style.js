import { StyleSheet } from 'react-native'
import { colors, border, background, text } from '../../../utility/color/color'

export const styles = StyleSheet.create({
    container: { flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: background.secondrycolor },
    outcircle: { width: 85, height: 85, borderRadius: 85 / 2, borderWidth: 3, borderColor: border.purple, alignItems: "center", justifyContent: "center" },
    incircle: { width: 70, height: 70, borderRadius: 70 / 2, backgroundColor: border.purple, alignItems: "center", justifyContent: "center" },
    mainview :{justifyContent:"center",alignItems:"center"},
    text: { fontSize: 15, color: text.primary,fontWeight:"bold" ,marginTop:10}
})