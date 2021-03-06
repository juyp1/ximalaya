import {create} from 'dva-core-ts';
import createLoading from 'dva-loading-ts'
import models from '@/models/index'

// 创建实例
const app = create();
// 加载model对象
models.forEach(model => {
  app.model(model)
});
// 加载插件
app.use(createLoading())
// 启动dva
app.start();
// 到处dva的数据仓库
export default app._store;
