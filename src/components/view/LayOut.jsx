import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import '../../index.css';

const LayOut = () => {
  return (
    <div className="container">
      <nav className="navigation">
        <NavLink to="/">HOME</NavLink>
        <NavLink to="/todos">TODOS</NavLink>
        <NavLink to="/done">DONE TODO's</NavLink>
      </nav>
      <Suspense fallback="Loading...">
        <Outlet />
      </Suspense>
    </div>
  );
};

export default LayOut;
