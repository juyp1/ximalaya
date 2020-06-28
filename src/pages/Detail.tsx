import React from 'react';
import {View, Text} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '../navigator';
interface IProps {
  route: RouteProp<RootStackParamList, 'Detail'>;
}
class Detail extends React.Component<IProps> {
  render() {
    return (
      <View>
        <Text>我是详情</Text>
        <Text>{this.props.route.params.id}</Text>
      </View>
    );
  }
}
export default Detail;
