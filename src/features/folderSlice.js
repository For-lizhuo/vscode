import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen:false,
  fileTree:null,
};

const folderSlice = createSlice({
  name:'folder',
  initialState,
  reducers:{
    open(state,action){
      state.isOpen = true;
      state.fileTree = action.payload;
    },
    close(state){
      state.isOpen = false;
    }
  }
});

export const {open,close} = folderSlice.actions;

export default folderSlice.reducer;