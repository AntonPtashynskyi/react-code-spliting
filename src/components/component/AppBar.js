import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { UserMenu } from './UserMenu';

export const AppBar = () => {
  const isLogin = useSelector(state => state.user.isLogin);

  return (
    <header>
      <nav className="navigation">
        <NavLink to="/">HOME</NavLink>
        <NavLink to="/todos">TODOS</NavLink>
        <NavLink to="/book">PHONE BOOK</NavLink>
      </nav>
      {isLogin && <UserMenu />}
    </header>
  );
};
