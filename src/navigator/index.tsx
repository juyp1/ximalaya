import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationProp,
  HeaderStyleInterpolators,
  CardStyleInterpolators,
} from '@react-navigation/stack';
let Stack = createStackNavigator();
import Home from '../pages/Home';
import Detail from '../pages/Detail';
import {Platform, StyleSheet, StatusBar} from 'react-native';
import BottomTabs from './BottomTabs';
/*
Stack Navigator  // 导航器
      Screen  // 路由组件
*/
export type RootStackParamList = {
  BottomTabs: {screen?: string};
  Detail: {
    id: number;
  };
};
export type RootStackNavigation = StackNavigationProp<RootStackParamList>;
class Navigator extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          headerMode="float"
          screenOptions={{
            headerTitleAlign: 'center',
            headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            gestureDirection: 'horizontal',
            gestureEnabled: true,
            // headerStatusBarHeight:StatusBar.currentHeight, // ios有问题
            // 设置 头部样式 区分平台
            headerStyle: {
              // backgroundColor:"red", // 状态栏颜色
              ...Platform.select({
                android: {
                  elevation: 0,
                  borderBottomWidth: StyleSheet.hairlineWidth,
                },
                ios: {},
              }),
            },
          }}>
          <Stack.Screen name="BottomTabs" component={BottomTabs} />
          <Stack.Screen
            options={{headerTitle: '详情'}}
            name="Detail"
            component={Detail}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
export default Navigator;
