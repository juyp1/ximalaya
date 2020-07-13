import { Model, Effect } from 'dva-core-ts';
import { Reducer } from 'redux';
import axios from 'axios'
import { RootState } from '.';
import { ALBUM_URL } from '@/api/album';
import _ from 'lodash'
export interface Iauthor {
  name: string,
  avatar: string
}
export interface Ilist {
  id: string,
  titile: string,
  playVolume: number,
  duration: string,
  date: string
}
export interface AlbumState {
  id: string,
  title: string,
  summary: string,
  thumbnailUrl:string,
  introduction:string,
  author:Iauthor,
  list:Ilist[]
}

interface AlbumModel extends Model {
  namespace: 'album'; // 必须指定名字 便于请求数据时间寻找到
  state: AlbumState;
  reducers?: { // 定义 reducers 
    initlist: Reducer<AlbumState>;

  }
  // 定义异步函数
  effects: {
    asyncinitDetail: Effect

  }
}

const initialState: AlbumState = {
  id: '',
  title: '',
  summary: '',
  thumbnailUrl:'',
  introduction:'',
  author:[],
  list:[]
}

const albumModel: AlbumModel = {
  namespace: 'album',
  state: initialState,
  reducers: {
    initlist(state = initialState, { payload, type }) {
      return {
        ...state,
        ...payload
        // list: payload.list,
        // author: payload.author,
        // id: payload.id,
        // title: payload.title,
        // summary: payload.summary,
        // thumbnailUrl:payload.thumbnailUrl,
        // introduction:payload.introduction,
      }
    },

  },
  // Effect 异步实现reducers
  effects: {
    // _占位符
    *asyncinitDetail(_, { call, put }) {
      const { data, status, msg } = yield call(axios.get, ALBUM_URL);
      yield put({
        type: 'album/initlist',
        payload: data.data,
      });
    },

  }
}

export default albumModel;