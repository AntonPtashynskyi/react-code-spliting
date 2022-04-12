import axios from 'axios';

import * as actions from './todos-actions';

axios.defaults.baseURL = 'http://localhost:4040/';

const fetchTodos = () => async dispatch => {
  dispatch(actions.fetchTodosRequest());

  try {
    const { data } = await axios.get('/todos');

    return dispatch(actions.fetchTodosSuccess(data));
  } catch (error) {
    return dispatch(actions.fetchTodosError(error));
  }

  // axios
  //   .get('/todos')
  //   .then(({ data }) => dispatch(actions.fetchTodosSuccess(data)))
  //   .catch(error => dispatch(actions.fetchTodosError(error)));
};

const addTodo = text => dispatch => {
  const todo = { text, completed: false };

  dispatch(actions.addTodoRequest());

  return axios
    .post('/todos', todo)
    .then(({ data }) => dispatch(actions.addTodoSuccess(data)))
    .catch(error => dispatch(actions.addTodoError(error)));
};

const deleteTodo = id => dispatch => {
  dispatch(actions.deleteTodoRequest());

  return axios
    .delete(`/todos/${id}`)
    .then(() => dispatch(actions.deleteTodoSuccess(id)))
    .catch(error => dispatch(actions.addTodoError(error)));
};

const toggleCompleted =
  ({ id, completed }) =>
  dispatch => {
    const update = { completed };

    dispatch(actions.toggleCompletedRequest());

    return axios
      .patch(`/todos/${id}`, update)
      .then(({ data }) => dispatch(actions.toggleCompletedSuccess(data)))
      .catch(error => dispatch(actions.toggleCompletedError(error)));
  };

export default {
  fetchTodos,
  addTodo,
  deleteTodo,
  toggleCompleted,
};
