import { Model, Effect } from 'dva-core-ts';
import { Reducer } from 'redux';
import axios from 'axios'
import { RootState } from '.';
import { CATEGORY_URL } from '@/api/category';
import _ from 'lodash'
export interface ICategory {
  id: string,
  name: string,
  classify?: string

}

export interface CategoryState {
  mycategorys: ICategory[];// 我选择的分类
  categorys: ICategory[] // 所有的分类
  isEdit: boolean,
  title: string
}

interface CategoryModel extends Model {
  namespace: 'category'; // 必须指定名字 便于请求数据时间寻找到
  state: CategoryState;
  reducers?: { // 定义 reducers 
    initlist: Reducer<CategoryState>;
    toggleedit: Reducer<CategoryState>; // 切换编辑状态
    addmycategorys: Reducer<CategoryState>; // 新增我选择的信息
    delmycatgorys:Reducer<CategoryState>; // 删除我选择的信息
  }
  // 定义异步函数
  effects: {
    asyncCategory: Effect
    asyncToggle: Effect
    asyncAddMyCategory: Effect
    asyncDelMyCategory:Effect
  }
}

const initialState: CategoryState = {
  categorys: [],
  isEdit: false,
  title: '编辑',
  // 初始化
  mycategorys: [{
    id: 'home',
    name: '推荐'
  }, {
    id: 'vip',
    name: 'vip'
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
        title: payload.isEdit ? '完成' : "编辑"

      }
    },
    addmycategorys(state = initialState, { payload, type, select }) {
      return {
        ...state,
        mycategorys: payload.selectcategory
      }
    },
    delmycatgorys(state = initialState, { payload, type, select }) {
      return {
        ...state,
        mycategorys: payload.selectcategory
      }
    },

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
    *asyncToggle({ payload }, { call, put }) {
      // console.log('----',payload)
      // 判断storage是否为空 不为空则从里面获取数据 
      // 如果storage为空则从ajax中获取数据
      // const { data, status, msg } = yield call(axios.get, CATEGORY_URL);
      yield put({
        type: 'category/toggleedit',
        payload
      });
    },
    *asyncAddMyCategory({ payload }, { call, put, select }) {
      let { mycategorys } = yield select((state: RootState) => state.category) // 拿到所有
      mycategorys.push(payload.myselect)
      let appArray = _ .uniqWith(mycategorys ,_ .isEqual );
      yield put({
        type: 'category/addmycategorys',
        payload: {
          selectcategory: appArray
        }
      });
    },
     *asyncDelMyCategory({ payload }, { call, put, select }) {
      let { mycategorys } = yield select((state: RootState) => state.category) // 拿到所有
  
      let appArray = _.pull(mycategorys,payload.myselect);
      
      yield put({
        type: 'category/delmycatgorys',
        payload: {
          selectcategory: appArray
        }
      });
    }
  }
}

export default categoryModel;