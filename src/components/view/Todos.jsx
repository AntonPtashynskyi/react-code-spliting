import { useSelector } from 'react-redux';

import '../../index.css';
import TodoForm from 'components/component/TodoForm';
import TodoList from 'components/component/TodoList';

const Todos = () => {
  const isLoggedIn = useSelector(state => state.user.isLogin);

  return (
    <>
      <div className="pageContainer">
        <h2>ToDo's Page</h2>
        {!isLoggedIn && <div>Please go to home page and log In</div>}
        {isLoggedIn && (
          <>
            <TodoForm />
            <div className="container">
              <TodoList />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Todos;
