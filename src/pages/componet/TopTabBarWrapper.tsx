import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {
  MaterialTopTabBar,
  MaterialTopTabBarProps,
} from '@react-navigation/material-top-tabs';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import Touchable from '@/component/Touchable';
//props 参数
interface IProps extends MaterialTopTabBarProps {}
class TopTabBarWrapper extends React.Component<IProps> {
  render() {
    const {props} = this;
    return (
      <View style={styles.container}>
        <View style={styles.topTabBarView}>
          <MaterialTopTabBar {...props} style={styles.tabbar} />
          <Touchable style={styles.categoryBtn}>
            <Text>分类</Text>
          </Touchable>
        </View>
        <View style={styles.bttommenu}>
          <Touchable style={styles.serachBtn}>
            <Text>搜索按钮</Text>
          </Touchable>
          <Touchable style={styles.historyBtn}>
            <Text>历史记录</Text>
          </Touchable>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    paddingTop: getStatusBarHeight(),
  },
  tabbar: {
    elevation: 0,
    flex: 1,
    overflow:'hidden',
    backgroundColor:'transparent'
  },
  topTabBarView: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  categoryBtn: {
    paddingHorizontal: 10,
    borderLeftWidth: StyleSheet.hairlineWidth,
    borderLeftColor: '#cccccc',
  },
  bttommenu:{
    display:'flex',
    flexDirection: 'row',
    paddingVertical:7,
    paddingHorizontal:15,
    alignItems:'center'
  },
  serachBtn: {
    flex:1,
    paddingLeft: 12,
    height: 30,
    justifyContent: 'center',
    borderRadius: 15,
    backgroundColor:'rgba(0,0,0,0.1)'
  },
  historyBtn: {
    marginLeft:24
  },
});
export default TopTabBarWrapper;
