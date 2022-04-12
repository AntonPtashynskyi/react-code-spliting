import '../../index.css';
import TodoForm from 'components/component/TodoForm';

const Todos = () => {
  return (
    <>
      <div className="pageContainer">
        <h2>ToDo's Page</h2>
        <TodoForm />
      </div>
    </>
  );
};

export default Todos;
