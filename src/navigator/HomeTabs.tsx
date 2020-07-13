import React from 'react';
import {
  createMaterialTopTabNavigator,
  MaterialTopTabBar,
  MaterialTopTabBarProps,
} from '@react-navigation/material-top-tabs';
import Home from '@/pages/Home';
import List from '@/pages/List';
import {View, StyleSheet, Button} from 'react-native';
import TopTabBarWrapper from '../pages/componet/TopTabBarWrapper';
import {RootState} from '../models';
import {connect, ConnectedProps} from 'react-redux';
import {ICategory} from '@/models/catgory';
import {RootStackNavigation, RootStackParamList} from '.';
type HomeParamList = {
  [key: string]: undefined;
};
const Tab = createMaterialTopTabNavigator(); // 接收此函数返回值
const mapStateToProps = ({category}: RootState) => {
  return {
    myCategorys: category.mycategorys,
  };
};
const connector = connect(mapStateToProps);

type ModelState = ConnectedProps<typeof connector>;

interface IProps extends ModelState {
  navigation: RootStackNavigation;
}
class HomeTabs extends React.Component<IProps> {
  handlechange = (item: ICategory) => {
    
  };
  // 自定义顶部标签栏
  renderTabBar = (props: MaterialTopTabBarProps) => {
    return (
      <View>
        <TopTabBarWrapper {...props} />
      </View>
    );
  };
  renders = (item: ICategory) => {
 
    return (
       
        <Tab.Screen
        name={item.id}
        key={item.id}
        component={item.name == '头条' ? List : Home}
        options={{tabBarLabel: item.name}}
      />
    
    );
  };
  render() {
    const {myCategorys, navigation} = this.props;
    return (
      <Tab.Navigator
        tabBar={this.renderTabBar} // 自定义导航
        lazy={true} // 懒加载tab
        sceneContainerStyle={styles.scenecontainer}
        tabBarOptions={{
          scrollEnabled: true,
          tabStyle: {
            width: 80,
          },
          indicatorStyle: {
            height: 4,
            width: 20,
            marginLeft: 30,
            borderRadius: 2,
            backgroundColor: '#f86442',
          },
          activeTintColor: '#f86442', //已选中颜色
          inactiveTintColor: '#333', // 未选中的
        }}>
        {myCategorys.map((item: ICategory) => {
        
          return this.renders(item)
        })}
        {/* <Tab.Screen 
           
          name="home1"
          component={Home}
          options={{tabBarLabel: '推荐'}}
        /> */}
      </Tab.Navigator>
    );
  }
}
const styles = StyleSheet.create({
  scenecontainer: {
    backgroundColor: 'transparent',
  },
});
export default connector(HomeTabs);
