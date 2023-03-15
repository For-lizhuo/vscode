import { configureStore } from "@reduxjs/toolkit";
import navBarReducer from "../features/navBarSlice";
import containerReducer from '../features/containerSlice';
import folderReducer from '../features/folderSlice';
export default configureStore({
  reducer:{
    navBar:navBarReducer,
    container:containerReducer,
    folder:folderReducer
  }
})