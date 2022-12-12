import { createSlice } from "@reduxjs/toolkit";

const counter = createSlice({
  // 命名空间，name会作为 action type的前缀
  name: "counter",
  // 初始化数据
  initialState: {
    count: 0,
    list: [20, 18],
  },
  // 1。 定义更新状态函数 2. 组件中dispatch使用action函数
  reducers: {
    add(state, action) {
      state.count++;
    },
    sub(state) {
      state.count--;
    },
    listPush(state) {
      state.list.push(Math.floor(Math.random() * 100));
    },
    listDel(state, action) {
      // action中传过来要删除的索引
      state.list.splice(action.payload, 1);
    },
  },
});

// 导出action函数
export const { add, sub, listPush, listDel } = counter.actions;

// 定义异步action
export const subAsync = (payload) => {
  return async (dispatch, getState) => {
    setTimeout(() => {
      dispatch(sub());
    }, 3000);
  };
};

// 导出 reducer 创建 store
export default counter.reducer;
