import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {
  MaterialTopTabBar,
  MaterialTopTabBarProps,
} from '@react-navigation/material-top-tabs';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import Touchable from '@/component/Touchable';
import LinearGradient from 'react-native-linear-gradient';
//import LinearGradientAnimated  from 'react-native-linear-animated-gradient-transition'
import {RootState} from '@/models/index';
import {connect, ConnectedProps} from 'react-redux';
import { ThemeProvider } from '@react-navigation/native';
const mapStateToProps = ({home}: RootState) => {
  return {
    carouselvisble: home.carouselvisble,
    linearColor:
      home.carousels.length > 0
        ? home.colors
        : ['#FFB6C1', '#1E90FF'],
  };
};
const connector = connect(mapStateToProps);
type ModelState = ConnectedProps<typeof connector>;
//props 参数 多继承使用联合类型
type IProps = MaterialTopTabBarProps & ModelState;
class TopTabBarWrapper extends React.Component<IProps> {
  

  get linerGradinet() {
    const {carouselvisble, linearColor = ['#FFB6C1', '#1E90FF']} = this.props;
    if (carouselvisble) {
   
      return null;
    }else {
     
      return (
        <LinearGradient
          colors={linearColor}
          style={styles.gradient}></LinearGradient>
      );
    }
    
  }

  handlecategory=()=>{
    const { navigation}=this.props;
    navigation.navigate('Category')
    
  }
  render() {
    const {props} = this;
    let {carouselvisble,indicatorStyle} = props;
     
    let activeTintColor= "#333";
    if(carouselvisble) {
      activeTintColor="#333333"
    }else {
      activeTintColor="#ffffff"
      if(indicatorStyle){
        indicatorStyle=StyleSheet.compose(indicatorStyle,styles.widthbackground)
      }
    }
    return (
      <View style={styles.container}>
        {this.linerGradinet}
        <View style={styles.topTabBarView}>
          <MaterialTopTabBar {...props}  activeTintColor={activeTintColor} indicatorStyle={indicatorStyle} style={styles.tabbar} />
          {/* activeTintColor={} */}
          <Touchable style={styles.categoryBtn} onPress={this.handlecategory}>
            <Text style={{color: carouselvisble ? '#333333' : '#ffffff'}}>
              分类
            </Text>
          </Touchable>
        </View>
        <View style={styles.bttommenu}>
          <Touchable style={styles.serachBtn}>
            <Text style={{color: carouselvisble ? '#333333' : '#ffffff'}}>
              搜索按钮
            </Text>
          </Touchable>
          <Touchable style={styles.historyBtn}>
            <Text style={{color: carouselvisble ? '#333333' : '#ffffff'}}>
              历史记录
            </Text>
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
    overflow: 'hidden',
    backgroundColor: 'transparent',
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
  bttommenu: {
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: 7,
    paddingHorizontal: 15,
    alignItems: 'center',
  },
  serachBtn: {
    flex: 1,
    paddingLeft: 12,
    height: 30,
    justifyContent: 'center',
    borderRadius: 15,
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
  historyBtn: {
    marginLeft: 24,
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
    height: 260,
  },
  widthbackground:{
    backgroundColor:'#ffffff'
  }
});
export default connector(TopTabBarWrapper);
