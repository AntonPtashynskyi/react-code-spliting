import 'bootstrap/dist/css/bootstrap.min.css';

import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import TodoList from 'components/component/TodoList';

import '../../index.css';

const LayOut = () => {
  return (
    <>
      <div className="container">
        <div className="container-up ">
          <Toaster />
          <nav className="navigation">
            <NavLink to="/">HOME</NavLink>
            <NavLink to="/todos">TODOS</NavLink>
            <NavLink to="/book">PHONE BOOK</NavLink>
          </nav>
          <Suspense fallback="Loading...">
            <Outlet />
          </Suspense>
        </div>
      </div>
      <div className="container">
        <TodoList />
      </div>
    </>
  );
};

export default LayOut;
