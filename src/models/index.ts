import home from './home';
import category from './catgory';
import { DvaLoadingState } from 'dva-loading-ts'
const models = [home,category]
export type RootState = {
  home:typeof home.state  // 自动推断home类型
  loading:DvaLoadingState;
  category:typeof category.state
}
export default models