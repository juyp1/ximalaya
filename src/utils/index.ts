import { Dimensions} from 'react-native';

// 获取手机屏幕宽度和高度
const {width:viewportWidth,height:viewportHeight}=Dimensions.get('window');

// 根据百分比获取宽度·
function  wp(percentage:number) {
  const value=(percentage*viewportWidth)/100
  return Math.round(value); // 返回整数
}
// 根据百分比获取高度·
function  hp(percentage:number) {
  const value=(percentage*viewportHeight)/100
  return Math.round(value); // 返回整数
}
export {
  viewportWidth,
  viewportHeight,
  wp,
  hp
}
