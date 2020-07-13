import home from './home';
import category from './catgory';
import album from './album'
import { DvaLoadingState } from 'dva-loading-ts'
const models = [home,category,album]
export type RootState = {
  home:typeof home.state  // 自动推断home类型
  loading:DvaLoadingState;
  category:typeof category.state,
  album:typeof album.state
}
export default models