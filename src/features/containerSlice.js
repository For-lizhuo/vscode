import { createSlice } from "@reduxjs/toolkit";
import { containerWidth } from "../config";

const initialState = {
  isDragging:false,
  containerWidth:containerWidth
};

const navBarSlice = createSlice({
  name:'container',
  initialState,
  reducers:{
    startDrag:{
      reducer(state){
        state.isDragging = true;
      }
    },
    endDrag:{
      reducer(state){
        state.isDragging = false;
      }
    },
    setContainerWidth:{
      reducer(state,action){
        state.containerWidth = action.payload;
      }
    }
  }
});

export const {startDrag,endDrag,setContainerWidth} = navBarSlice.actions;

export default navBarSlice.reducer;