import  React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Touchable from '@/component/Touchable'
import Icon from '@/assets/iconfont';
import {RootState} from '@/models/index';
import { connect, ConnectedProps } from 'react-redux';
const mapStateToProps=({})=>{
  return {

  }
}
const connector = connect(mapStateToProps)
type ModelState = ConnectedProps<typeof connector>
interface IProps extends ModelState{

}
class Play extends React.Component<IProps> {
  render(){
    return(
      <Touchable style={styles.playbtn}>
         <Icon name="iconbofang" size={40} color="#ededed"/>
      </Touchable>
    )
  }
}
const styles = StyleSheet.create({
  playbtn:{
    borderRadius:21,
    justifyContent:"center",
    alignItems:'center'
  }
})
export default connector(Play)