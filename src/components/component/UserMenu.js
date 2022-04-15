import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/authSlice';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const loginUser = useSelector(state => state.user.login);

  return (
    <div>
      {loginUser}
      <button onClick={() => dispatch(logOut())}>Log out</button>
    </div>
  );
};
