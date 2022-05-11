import { StyleSheet } from 'react-native'
import {background, border} from '../../../../utility/color/color'

export const styles = StyleSheet.create({
  safecontainer : {flex: 1,backgroundColor:background.secondrycolor},
  maincontain :{flex:1 , alignItems:"center",padding:"5%",width:"100%"},
  headerview :{width:"100%",flexDirection:"row",alignItems:"center"},
  headertitleview :{width:"70%",alignItems:"center",},
  formview :{flex : 1 ,width :"100%",padding:10},
  feildview : {width:"100%",marginTop:25},
  textinput :{flex:1,marginTop:15,borderBottomWidth:1,borderColor:border.gray , paddingBottom:10}
})