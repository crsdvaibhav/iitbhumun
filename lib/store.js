import { configureStore } from '@reduxjs/toolkit';
import GlobalDialogWrapperSlice from './slices/GlobalDialogWrapperSlice';


export const store = configureStore({
  reducer: {
    GlobalDialog: GlobalDialogWrapperSlice,
  },
});
