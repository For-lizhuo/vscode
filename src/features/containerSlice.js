import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDragging:false,
  containerWidth:22.5
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