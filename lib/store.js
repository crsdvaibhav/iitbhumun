import { configureStore } from '@reduxjs/toolkit';
import GlobalDialogWrapperSlice from './slices/GlobalDialogWrapperSlice';
import userSlice from './slices/userSlice';


export const store = configureStore({
  reducer: {
    GlobalDialog: GlobalDialogWrapperSlice,
    User:userSlice
  },
});
