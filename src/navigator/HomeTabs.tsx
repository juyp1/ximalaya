import React from 'react';
import {createMaterialTopTabNavigator, MaterialTopTabBar,MaterialTopTabBarProps} from '@react-navigation/material-top-tabs';
import Home from '@/pages/Home';
import { View } from 'react-native';
const Tab = createMaterialTopTabNavigator(); // 接收此函数返回值
class HomeTabs extends React.Component {
  renderTabBar=(props:MaterialTopTabBarProps)=>{
    return (<View>
      <MaterialTopTabBar {...props}/>
    </View>)
  }
  render() {
    return (
      <Tab.Navigator
      tabBar={this.renderTabBar} // 自定义导航
        lazy={true} // 懒加载tab
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
            backgroundColor: '#f86442',,
          },
          activeTintColor: '#f86442', //已选中颜色
          inactiveTintColor: '#333',, // 未选中的
}}>
  <Tab.Screen
          name="home1"
          component={Home}
          options={{tabBarLabel: '推荐'}} />


      </Tab.Navigator>
    );
  }
}
export default HomeTabs;