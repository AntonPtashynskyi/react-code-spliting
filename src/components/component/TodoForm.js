import ModalWindow from './modal/Modal';

import FilterTodo from './FilterTodo';
import Statistics from './Statistics';

const TodoForm = () => {
  return (
    <>
      <div className="todoContainer">
        <ModalWindow />
        <Statistics />
        <FilterTodo />
      </div>
    </>
  );
};

export default TodoForm;
