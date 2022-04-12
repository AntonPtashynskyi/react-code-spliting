import { useDispatch } from 'react-redux';
import * as actions from '../../redux/todos/todos-actions';

const FilterTodo = () => {
  const dispatch = useDispatch();
  const filter = text => dispatch(actions.filterTodo(text));

  return (
    <div>
      <input placeholder="FILTER TODO" onChange={e => filter(e.target.value)} />
    </div>
  );
};

export default FilterTodo;
