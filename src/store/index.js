import { configureStore } from "@reduxjs/toolkit";
import navBarReducer from "../features/navBarSlice";
import containerReducer from '../features/containerSlice';
import folderReducer from '../features/folderSlice';
import fileEditorReducer from "../features/fileEditorSlice";
import editorListReducer from "../features/editorList";
export default configureStore({
  reducer:{
    navBar:navBarReducer,
    container:containerReducer,
    folder:folderReducer,
    fileEditor:fileEditorReducer,
    editorList:editorListReducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})