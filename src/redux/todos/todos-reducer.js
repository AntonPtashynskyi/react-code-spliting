import { combineReducers, createReducer } from '@reduxjs/toolkit';

import {
  fetchTodosRequest,
  fetchTodosSuccess,
  fetchTodosError,
  addTodoRequest,
  addTodoSuccess,
  addTodoError,
  deleteTodoRequest,
  deleteTodoSuccess,
  deleteTodoError,
  toggleCompletedRequest,
  toggleCompletedSuccess,
  toggleCompletedError,
  filterTodo,
} from './todos-actions';

const itemReducer = createReducer([], {
  [fetchTodosSuccess]: (state, action) => action.payload,
  [addTodoSuccess]: (state, action) => [...state, action.payload],
  [deleteTodoSuccess]: (state, action) =>
    state.filter(item => item.id !== action.payload),
  [toggleCompletedSuccess]: (state, action) => {
    return state.map(todo =>
      todo.id === action.payload.id ? action.payload : todo
    );
  },
});

const filterReducer = createReducer('', {
  [filterTodo]: (_, action) => action.payload,
});

const loading = createReducer(false, {
  [fetchTodosRequest]: () => true,
  [fetchTodosSuccess]: () => false,
  [fetchTodosError]: () => false,

  [addTodoRequest]: () => true,
  [addTodoSuccess]: () => false,
  [addTodoError]: () => false,

  [deleteTodoRequest]: () => true,
  [deleteTodoSuccess]: () => false,
  [deleteTodoError]: () => false,

  [toggleCompletedRequest]: () => true,
  [toggleCompletedSuccess]: () => false,
  [toggleCompletedError]: () => false,
});

const todoReducer = combineReducers({
  items: itemReducer,
  filter: filterReducer,
  loading,
});

export default todoReducer;
