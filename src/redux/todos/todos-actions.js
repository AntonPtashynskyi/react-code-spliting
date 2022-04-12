import { createAction } from '@reduxjs/toolkit';
// import shortid from 'shortid'

export const fetchTodosRequest = createAction('todo/fetchTodosRequest');
export const fetchTodosSuccess = createAction('todo/fetchTodosSuccess');
export const fetchTodosError = createAction('todo/fetchTodosError');

export const addTodoRequest = createAction('todo/addTodoRequest');
export const addTodoSuccess = createAction('todo/addTodoSuccess');
export const addTodoError = createAction('todo/addTodoError');

export const deleteTodoRequest = createAction('totos/deleteTodoRequest');
export const deleteTodoSuccess = createAction('totos/deleteTodoSuccess');
export const deleteTodoError = createAction('totos/deleteTodoError');

export const toggleCompletedRequest = createAction(
  'totos/toggleCompletedRequest'
);
export const toggleCompletedSuccess = createAction(
  'totos/toggleCompletedSuccess'
);
export const toggleCompletedError = createAction('totos/toggleCompletedError');

export const filterTodo = createAction('totos/filterTodo'); //accept ("string")
