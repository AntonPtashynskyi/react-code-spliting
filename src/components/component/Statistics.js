import { useSelector } from 'react-redux';

const Statistics = () => {
  const allTodoLength = useSelector(state => state.todo.items.length);
  const allTodoArray = useSelector(state => state.todo.items);

  const totalDoneTodo = array =>
    array.reduce((acc, item) => {
      return item.completed ? acc + 1 : acc;
    }, 0);

  return (
    <div>
      <p style={{ marginBottom: '0' }}>All todos: {allTodoLength}</p>
      <p style={{ marginBottom: '0' }}>
        Done todos: {totalDoneTodo(allTodoArray)}
      </p>
    </div>
  );
};

export default Statistics;
