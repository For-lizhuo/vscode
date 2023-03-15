import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen:false
};

const folderSlice = createSlice({
  name:'folder',
  initialState,
  reducers:{
    open(state){
      state.isOpen = true;
    },
    close(state){
      state.isOpen = false;
    }
  }
});

export const {open,close} = folderSlice.actions;

export default folderSlice.reducer;