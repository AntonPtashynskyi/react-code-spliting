import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todos/todos-reducer';
import { authSlice } from './auth/authSlice';

export const store = configureStore({
  reducer: {
    todo: todoReducer,
    user: authSlice.reducer,
  },
});
