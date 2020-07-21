import Sound from 'react-native-sound'
Sound.setCategory("Playback");
let sound:Sound;

// 创建播放器
const init =(url:String)=>{
  return new Promise((resolve,reject)=>{
    sound= new Sound(url,(error)=>{
      if(error) {
        reject(error)
      }else {
        resolve();
      }
    })
  })
 
}

// 播放音频 播放完成返回
const play =()=>{
  return new Promise((resolve,reject)=>{
    if(sound){
      sound.play((success)=>{
        if(success){
          resolve()
        }else {
          reject()
        }
        sound.release(); // 释放资源
      })
    }
    reject();
  })
}

// 暂停
const pause =()=>{
  return new Promise((resolve)=>{
      if(sound) {
        sound.pause(()=>{
          resolve()
        })
      }else {
        resolve()
      }
  })
}
// 获取当前播放时间
const getCurrenTime=()=>{
  return new Promise((resolve)=>{
    if(sound&&sound.isLoaded()){
      sound.getCurrentTime(resolve);
    }else {
      resolve(0)
    }
  })
}

// 获取音频总时长
const getDuration = ()=>{
  if(sound){
    return sound.getDuration()
  }else {
    return 0
  }
}
export {
  init,
  play,
  pause,
  getCurrenTime,
  getDuration
}