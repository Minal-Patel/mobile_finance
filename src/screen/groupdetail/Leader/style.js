import { StyleSheet } from 'react-native'
import { background, border, colors } from '../../../utility/color/color'

export const styles = StyleSheet.create({
    container: { flex: 1, alignItems: "center", justifyContent: "center" },
    leadercon: {
        alignItems: "center",
        shadowOffset: { width: 5, height: 5 },
        backgroundColor: background.white,
        // borderRadius:150,
        // shadowColor: "#cccccc",
        // shadowOpacity: 0.5, 
        // shadowRadius: 5,
        // elevation: 5,
        // padding:15
    },
    image: {
        width: 75, height: 75, borderRadius: 75,
        padding: 15
    }

})