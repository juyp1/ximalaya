import { Model, Effect } from 'dva-core-ts';
import { Reducer } from 'redux';
import axios from 'axios'
import { RootState } from '.';
import {CAROUSEL_URL,LIKE_URl,CHANNEL_URL} from '@/api/home';
// 定义对象返回类型
export interface ICarouser {
  id: string,
  image: string,
  colors: [string, string],

}

export interface ILike {
  id: string,
  title: string,
  image: string
}

export interface IChannel {
  id:string,
  image:string,
  title:string,
  remark:string,
  played:number,
  playing:number
}
// 分页
export interface IPagination {
   current:number,
   total:number,
   hasMore:boolean // 是否能继续加载下一页
}
// 定义当前页面需要用的状态变量 全局能拿的
export interface HomeState {
  carousels: ICarouser[];
  likes: ILike[];
  channgels:IChannel[];
  pagination:IPagination;
  activeCarouseIndex:number; // 当前轮播图下标
  carouselvisble:boolean // 滚动高度
}
 
interface HomeModel extends Model {
  namespace: 'home'; // 必须指定名字 便于请求数据时间寻找到
  state: HomeState;
  reducers?: { // 定义 reducers 
    initlist: Reducer<HomeState>;
    initlikes: Reducer<HomeState>;
    initchangels:Reducer<HomeState>;
    visblecarousels:Reducer<HomeState>;
  };
  // 定义异步函数
  effects:{
    asyncLikes:Effect
    asyncCarousels:Effect,
    asyncChannels:Effect,
  }

};
const initialState:HomeState = {
  activeCarouseIndex:0,
  carousels: [],
  likes: [],
  channgels:[],
  carouselvisble:false,
  pagination:{
    current:1,
    total:0,
    hasMore:true
  }
}
const homeModel: HomeModel = {
  namespace: 'home',
  state: initialState,
  reducers: {
    
    initlist(state = initialState, { payload, type }) {
      return {
        ...state,
        carousels: payload
      }
    },
    initlikes(state = initialState, { payload, type }) {
      return {
        ...state,
        likes: payload
      }
    },
    initchangels(state = initialState, { payload, type }) {
     
      return {
        ...state,
        channgels: payload,
        
      }
    },
    visblecarousels(state=initialState,{payload,type}) {
      return {
        ...state,
        carouselvisble: payload.carouselvisble,
        
      }
    }
  },
  // Effect 异步实现reducers
  effects: {
    
    // _占位符
    *asyncCarousels(_, { call, put }) {
      const { data, status, msg } = yield call(axios.get, CAROUSEL_URL);
      yield put({
        type: 'home/initlist',
        payload: data.data
      });
    },
    //  获取猜你喜欢
    *asyncLikes(_, { call, put }) {
      const { data, status, msg } = yield call(axios.get, LIKE_URl);
      yield put({
        type: 'home/initlikes',
        payload: data.data
      });
    },
    // 首页列表 callback 通知返回回调
    *asyncChannels({callback,payload}, { call, put,select }) {
     const {channgels,pagination}= yield select ((state:RootState)=>state.home) // 拿到所有
     let page =1;
     if(payload&&payload.loadMore){
      page=pagination.current+1;
     }
     // 传递参数形式
      const { data, status, msg } = yield call(axios.get, CHANNEL_URL,{
        params:{
            pageindex:page,
            pagesize:10,
        }
      });
      let newChannels = data.data.result
     let paginations = data.data.pagination
     // console.log('xxxxx-',newChannels)
      if(payload&&payload.loadMore){
      newChannels=channgels.concat(newChannels)
      }
      yield put({
        type: 'home/initchangels',
        payload: newChannels,
        pagination:{
          current:paginations.current,
          total:paginations.total,
          hasMore:newChannels.length<paginations.total
        }
      });
      // 回调通知已返回数据结果
      if(typeof callback === 'function'){
        callback();
      }
    },
  }
};
export default homeModel;
