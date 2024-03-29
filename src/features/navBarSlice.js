import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  chosen:'sourceManager',
  display:true,
  isDragging:false
}

const navBarSlice = createSlice({
  name:'navBar',
  initialState,
  reducers:{
    choose:{
      reducer(state,action){
        state.chosen = action.payload
      }
    },
    hide:{
      reducer(state){
        state.display = false
      }
    },
    show:{
      reducer(state){
        state.display = true
      }
    }
  }
})

export const {choose,hide,show} = navBarSlice.actions

export default navBarSlice.reducer