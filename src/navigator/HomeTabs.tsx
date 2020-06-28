import React from 'react'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import Home from '@/pages/Home';
const Tab = createMaterialTopTabNavigator(); // 接收此函数返回值
class HomeTabs extends React.Component {
  render(){
    return(
      <Tab.Navigator
      lazy={true} // 懒加载tab
      tabBarOptions = {{
        scrollEnabled:true,
        tabStyle:{
          width:80
        },
        indicatorStyle:{
          height:4,
          width:20,
          marginLeft:30,
          borderRadius:2,
          backgroundColor:'#f86442'
        },
        activeTintColor:'#f86442', //已选中颜色
        inactiveTintColor:'#333' // 未选中的
        
      }}>
      
        <Tab.Screen name="home1" component={Home} options={{tabBarLabel:'推荐'}}></Tab.Screen>
         
       
      </Tab.Navigator>
    )
  }
}
export default HomeTabs