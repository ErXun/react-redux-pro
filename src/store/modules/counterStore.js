import { createSlice } from "@reduxjs/toolkit";

const counterStore = createSlice({
  name: "counter",
  // 初始化 state
  initialState: {
    count: 0,
  },
  // 修改 state 的 reducer
  reducers: {
    increment: (state) => {
      state.count++;
    },
    decrement: (state) => {
      state.count--;
    },
    addToNumber: (state, action) => {
      state.count += action.payload;
    },
  },
});

// 解构出 action creators（按需导出）
export const { increment, decrement, addToNumber } = counterStore.actions;

// 导出 reducer（默认导出）
export default counterStore.reducer;
