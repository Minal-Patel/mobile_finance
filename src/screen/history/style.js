import { StyleSheet } from 'react-native'
import { colors } from '../../utility/color/color'

export const styles = StyleSheet.create({
    safecontainer: { flex: 1, alignItems: "center", backgroundColor: colors.white },
    scrollcontain: { flex: 1, width: "100%", padding: "5%" },
    container: { flex: 1, paddingTop: 20 },
    cardcontainer: {
        width: "100%",
        padding: 15,

        flexDirection: "row",
        // backgroundColor:"#f4f4f4",
        alignItems: "center",
        borderLeftWidth: 5,
        borderColor: "#b2d089",
        borderRadius: 5

    },
    datecard: { width: 50, height: 50, backgroundColor: colors.white, borderRadius: 5, alignItems: "center", justifyContent: "center" },
    rightview: { flex: 1, flexDirection: "row", marginLeft: 10, justifyContent: "space-between", alignItems: "center", }
})