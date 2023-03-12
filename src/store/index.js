import { configureStore } from "@reduxjs/toolkit";
import navBarReducer from "../features/navBarSlice";
import containerReducer from '../features/containerSlice';
export default configureStore({
  reducer:{
    navBar:navBarReducer,
    container:containerReducer
  }
})