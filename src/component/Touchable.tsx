// 解决原生touchable 点击透明度太透的问题
import React from 'react';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';
const Touchable: React.FC<TouchableOpacityProps> = React.memo(props => (
  <TouchableOpacity activeOpacity={0.8} {...props} />
));
export default Touchable;
