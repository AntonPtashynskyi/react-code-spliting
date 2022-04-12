import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todos/todos-reducer';

export const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});
