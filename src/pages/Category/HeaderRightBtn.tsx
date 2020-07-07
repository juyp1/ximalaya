import React from  'react'
import {connect, ConnectedProps} from 'react-redux';
import {
  HeaderButtons,
  HeaderButton,
  Item,
  HiddenItem,
  OverflowMenu,
} from 'react-navigation-header-buttons';
import { View } from 'react-native';
import { RootState } from '@/models/index';
import { RootStackNavigation } from '@/navigator/index';
const mapStateToProps = ({category, loading}: RootState) => ({
  isEdit:category.isEdit
  
});
type ModelState = ConnectedProps<typeof connector>;
interface IProps extends ModelState {}
const connector = connect(mapStateToProps); // 映射state中的model
class HeaderRightBtn extends React.Component<IProps>{
   state = {
    title:'编辑'
  }
  handleoptions=()=>{
    const {dispatch,isEdit}=this.props
   
    dispatch({
      type: 'category/asyncToggle',
        payload: {
        isEdit: !isEdit,
      },
    });
    this.setState({
      title:isEdit?'完成':'编辑'
    })
  }
  render(){
    const {title}=this.state
    return(
      <View>
        <HeaderButtons>
        <Item title={title}  onPress={this.handleoptions} />
        </HeaderButtons>
      </View>
    )
  }
}
export default connector(HeaderRightBtn)