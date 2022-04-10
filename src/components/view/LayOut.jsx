import { NavLink, Outlet } from 'react-router-dom';

import '../../index.css';

const LayOut = () => {
  return (
    <div className="container">
      <nav className="navigation">
        <NavLink to="/">HOME</NavLink>
        <NavLink to="/todos">TODOS</NavLink>
        <NavLink to="/done">DONE TODO's</NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default LayOut;
