import { Route, Routes } from 'react-router-dom';

import LayOut from './view/LayOut';
import Todos from './view/Todos';
import HomeView from './view/HomeView';
import DoneTodo from './view/DoneTodo';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LayOut />}>
          <Route index element={<HomeView />} />
          <Route path="/todos" element={<Todos />} />
          <Route path="/done" element={<DoneTodo />} />
        </Route>
      </Routes>
    </>
  );
};
