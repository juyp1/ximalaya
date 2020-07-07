import AsyncStorage from '@react-native-community/async-storage';
import Storage, { LoadParams } from 'react-native-storage';
// 设置storage
const storage = new Storage({
  size:1000,// 最大容量
  storageBackend:AsyncStorage,// 数据引擎 
  defaultExpires:1000*3600*24*7, // 过期时间 null 永远不过期
  enableCache:true, // 开启缓存
  sync:{}
})
// 加载函数
const load =(params:LoadParams)=>{
  return storage.load(params)
}

export {load}
export default storage;