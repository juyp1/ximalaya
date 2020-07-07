import { Model, Effect } from 'dva-core-ts';
import { Reducer } from 'redux';
import axios from 'axios'
import { RootState } from '.';
import { CATEGORY_URL } from '@/api/category';
export interface ICategory {
  id: string,
  name: string,
  classify?: string

}

export interface CategoryState {
  mycategorys: ICategory[];// 我选择的分类
  categorys: ICategory[] // 所有的分类
  isEdit:Boolean
}

interface CategoryModel extends Model {
  namespace: 'category'; // 必须指定名字 便于请求数据时间寻找到
  state: CategoryState;
  reducers?: { // 定义 reducers 
    initlist: Reducer<CategoryState>;
    toggleedit: Reducer<CategoryState>; // 切换编辑状态
  }
  // 定义异步函数
  effects: {
    asyncCategory: Effect
    asyncToggle: Effect
  }
}

const initialState: CategoryState = {
  categorys: [],
  isEdit:false,
  // 初始化
  mycategorys: [{
    id:'home',
    name:'推荐'
  },{
    id:'vip',
    name:'vip'
  }]
}

const categoryModel: CategoryModel = {
  namespace: 'category',
  state: initialState,
  reducers: {
    initlist(state = initialState, { payload, type }) {
      return {
        ...state,
        categorys: payload,
      }
    },
    toggleedit(state = initialState, { payload, type }) {
      return {
        ...state,
        isEdit: payload.isEdit,
      }
    }
  },
  // Effect 异步实现reducers
  effects: {
    // _占位符
    *asyncCategory(_, { call, put }) {
      // 判断storage是否为空 不为空则从里面获取数据 
      // 如果storage为空则从ajax中获取数据
      const { data, status, msg } = yield call(axios.get, CATEGORY_URL);
      yield put({
        type: 'category/initlist',
        payload: data.data,
      });
    },
    *asyncToggle ({payload}, { call, put }) {
      console.log('----',payload)
      // 判断storage是否为空 不为空则从里面获取数据 
      // 如果storage为空则从ajax中获取数据
     // const { data, status, msg } = yield call(axios.get, CATEGORY_URL);
      yield put({
        type: 'category/toggleedit',
        payload 
      });
    }
  }
}

export default categoryModel;