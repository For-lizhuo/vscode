import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  file:{
    name:'',
    value:'',
    path:'',
    type:[]
  },
  isShown:false
};

const fileEditorSlice = createSlice({
  name:'fileEditor',
  initialState,
  reducers:{
    showFile(state,action){
      state.isShown = true;
      state.file = {...state.file,...action.payload};
    },
    closeFile(state){
      state.isShown = false;
      state.file = {
        name:'',
        value:'',
        path:'',
        type:[]
      };
    },
    switchFile(state,action){
      state.file = {...state.file,...action.payload};
    }
  }
});

export const {showFile,closeFile,switchFile} = fileEditorSlice.actions;

export default fileEditorSlice.reducer;