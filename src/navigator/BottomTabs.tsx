import React from 'react';
import {
  NavigationContainer,
  RouteProp,
  TabNavigationState,
  Router,
} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from '@/assets/iconfont/';
import Listen from '@/pages/Listen';
import Found from '@/pages/Found';
import My from '@/pages/My';
import {RootStackNavigation, RootStackParamList} from '.';
import HomeTabs from './HomeTabs';
export type ButtomTabparamsList = {
  HomeTabs: undefined;
  Listen: undefined;
  Found: undefined;
  My: undefined;
};
type Route = RouteProp<RootStackParamList, 'BottomTabs'> & {
  state?: TabNavigationState;
};
interface IProps {
  navigation: RootStackNavigation;
  route: Route;
}
// 获取点击的tabname
function getHeaderTitle(route: Route) {
  const routenName = route.state
    ? route.state.routes[route.state.index].name
    : route.params?.screen || 'HomeTabs';
  switch (routenName) {
    case 'HomeTabs':
      return '首页';
  
    case 'Listen':
      return '我听';

    case 'Found':
      return '发现';

    case 'My':
      return '我的';

    default:
      return '首页';
  }
}
const Tab = createBottomTabNavigator<ButtomTabparamsList>();
class BottomTabs extends React.Component<IProps> {
  // 初始化获取下
  componentDidMount() {
    this.setOptions();
  }
  setOptions = () => {
    const {navigation, route} = this.props;
    const routenName = route.state
      ? route.state.routes[route.state.index].name
      : route.params?.screen || 'HomeTabs';
    if (routenName === 'HomeTabs') {
      navigation.setOptions({
        headerTransparent: true, // 隐藏标题栏
        headerTitle: '',
      });
    } else {
      navigation.setOptions({
        headerTransparent: false, // 隐藏标题栏
        headerTitle: getHeaderTitle(route),
      });
    }
  };
  // 切换菜单调用组件更新名字
  componentDidUpdate() {
    this.setOptions();
  }
  render() {
    return (
      <Tab.Navigator tabBarOptions={{activeTintColor: '#f86442'}}>
        <Tab.Screen
          name="HomeTabs"
          component={HomeTabs}
          options={{
            tabBarLabel: '首页',
            tabBarIcon: ({color, size}) => (
              <Icon name="iconHome" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Listen"
          component={Listen}
          options={{
            tabBarLabel: '我听',
            tabBarIcon: ({color, size}) => (
              <Icon name="iconyinle" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Found"
          component={Found}
          options={{
            tabBarLabel: '发现',
            tabBarIcon: ({color, size}) => (
              <Icon name="iconfaxian" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="My"
          component={My}
          options={{
            tabBarLabel: '我的',
            tabBarIcon: ({color, size}) => (
              <Icon name="iconwode" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
}

export default BottomTabs;
