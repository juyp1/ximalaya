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
import Catgory from '@/pages/Category';
import {Platform, StyleSheet, StatusBar} from 'react-native';
import BottomTabs from './BottomTabs';
import Category from '@/pages/Category';
import Album from '@/pages/album/index'
import Animated, { onChange } from 'react-native-reanimated';
/*
Stack Navigator  // 导航器
      Screen  // 路由组件
*/
export type RootStackParamList = {
  BottomTabs: {screen?: string};
  Catgory:undefined;
  Detail: {
    id: number;
  };
  Album:{
     
    title:string,
    id:number
  }
};
export type RootStackNavigation = StackNavigationProp<RootStackParamList>;
class Navigator extends React.Component {
  handlechange=()=>{

  }
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
          <Stack.Screen name="BottomTabs" component={BottomTabs}  />
          <Stack.Screen
            options={{
              headerTitle: '分类',
              // headerRight()=>{

              // }

          }}
            name="Category"
            component={Category}
            
          />
          <Stack.Screen
            options={{headerTitle: '详情'}}
            name="Detail"
            component={Detail}
          />
          {/* headerTransparent:true,
            headerBackground:()=>{
              return(
                <Animated.View style={styles.headerbackgrond}/>
              )
            },
            headerTitleStyle:{
              opacity:0
            } */}
           <Stack.Screen
            options={{headerTitle: '频道页面',
            headerBackTitle:" ",
            headerShown:false
            }}
            name="Album"
            component={Album}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
const styles = StyleSheet.create({
  headerbackgrond:{
    flex:1,
    backgroundColor:'#ffffff',
    opacity:0
  }
})
export default Navigator;
