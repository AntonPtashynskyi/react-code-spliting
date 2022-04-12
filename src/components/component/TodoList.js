import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import todosOperations from '../../redux/todos/todos-operations';

import '../../index.css';

const TodoList = () => {
  const dispatch = useDispatch();
  const allTodos = useSelector(state => state.todo.items);
  const filter = useSelector(state => state.todo.filter);

  useEffect(() => {
    dispatch(todosOperations.fetchTodos());
  }, [dispatch]);

  const getVisibleTodo = (allTodos, filter) => {
    const normalizedFilter = filter.toLowerCase();

    return allTodos.filter(todo =>
      todo.text.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredTodos = getVisibleTodo(allTodos, filter);

  return (
    <ul className="list">
      {filteredTodos.map(({ id, text, completed }) => (
        <li key={id} className="list-item">
          <input
            className="item-input"
            type="checkbox"
            checked={completed}
            onChange={() =>
              dispatch(
                todosOperations.toggleCompleted({ id, completed: !completed })
              )
            }
          />
          <span>{text}</span>
          <button
            className="item-button"
            onClick={() => {
              dispatch(todosOperations.deleteTodo(id));
            }}
          >
            x
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
