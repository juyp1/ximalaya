import React from 'react';
import {View, Text, Button} from 'react-native';
import {connect, ConnectedProps} from 'react-redux';
import {RootState} from '@/models/index';
import {RootStackNavigation} from '../navigator';
import storage from '@/config/storage';
const mapStateToProps = ({category, loading}: RootState) => ({
  categorys: category.categorys,
  mycategory:category.mycategorys
});
const connector = connect(mapStateToProps); // 映射state中的model
type ModelState = ConnectedProps<typeof connector>;
interface IProps extends ModelState {
  navigation: RootStackNavigation;
}

class Listen extends React.Component<IProps> {
 
  render() {
    const {mycategory} = this.props
    return (
      <View>
        <Text>我听</Text>
         
      </View>
    );
  }
  
}
export default connector(Listen);
