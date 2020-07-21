import { Model, Effect } from 'dva-core-ts';
import { Reducer } from 'redux';
import axios from 'axios'
import { RootState } from '.';
import { SOUND_URL } from '@/api/player'
export interface PlayerState {
    id: string,
    soundUrl: string
}
interface PlayerModel extends Model {
    namespace: 'player'; // 必须指定名字 便于请求数据时间寻找到
    state: PlayerState;
    reducers?: { // 定义 reducers 
        initshowplayer: Reducer<PlayerState>;

    }
    // 定义异步函数
    effects: {
        asyncplayershow: Effect
    }
}
const initialState: PlayerState = {
    id: '',
    soundUrl: ''
}
const playerModel: PlayerModel = {
    namespace: 'player',
    state: initialState,
    reducers: {
        initshowplayer(state = initialState, { payload, type }) {
            return {
                ...state,
                ...payload
            }
        },

    },
    // Effect 异步实现reducers
    effects: {
        // _占位符
        *asyncplayershow(_, { call, put }) {
            const { data, status, msg } = yield call(axios.get, SOUND_URL);
            yield put({
                type: 'player/initshowplayer',
                payload: data.data,
            });
        },

    }
}

export default playerModel;