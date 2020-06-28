import home from './home';
import { DvaLoadingState } from 'dva-loading-ts'
const models = [home]
export type RootState = {
  home:typeof home.state  // 自动推断home类型
  loading:DvaLoadingState;
}
export default models