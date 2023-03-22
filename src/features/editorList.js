import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  //保存每个文件的path和property
  map:new Map()
};

const editorListSlice = createSlice({
  name:'editorList',
  initialState,
  reducers:{
    add(state,action){
      state.map.set(action.payload.path,action.payload.property);
    },
    remove(state,action){
      state.map.delete(action.payload);
    },
    clear(state,action){

    }
  }
});

export const {add,remove,clear} = editorListSlice.actions;

export default editorListSlice.reducer;