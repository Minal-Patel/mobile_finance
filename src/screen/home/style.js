import { StyleSheet } from 'react-native'
import { colors , border, background } from '../../utility/color/color'

export const styles = StyleSheet.create({
    safearea: { flex: 1 },
    container:{flex: 1, alignItems: "center" ,},
    headerview:{ width: "100%",padding:15 },
    topview:{ width:"100%",flexDirection: "row" ,justifyContent:"space-between",paddingRight:25,alignItems:"center"},
    userview:{alignItems:"center",flexDirection:"row",},
    image:{width:50,height:50,borderRadius:50/2,borderWidth:1,borderColor:border.white},
    notifyicon:{marginRight:15},
    bottomview:{width:"100%",flex:1 , backgroundColor:background.white,borderTopLeftRadius:35 ,  borderTopRightRadius:35,padding:25},
    detailcard:{width:50 , height:50 , borderRadius:50/2 , backgroundColor:background.gray,alignItems:"center",justifyContent:"center"},
})