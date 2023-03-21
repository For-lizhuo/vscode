import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  quantity:0,
  value:[]
};

const editorListSlice = createSlice({
  name:'editorList',
  initialState,
  reducers:{
    add(state,action){
      state.value.push(action.payload);
      state.quantity++;
    },
    remove(state,action){
      state.quantity--;
      state.value = state.value.filter((item)=>{
        if(item.path==action.payload.path&&item.name==action.payload.name){
          return false;
        }
        return true;
      })
    },
    replace(state,payload){
      
    }
  }
});

export const {add,remove,replace} = editorListSlice.actions;

export default editorListSlice.reducer;