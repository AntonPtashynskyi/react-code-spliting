import 'bootstrap/dist/css/bootstrap.min.css';

import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import { AppBar } from 'components/component/AppBar';

import '../../index.css';

const LayOut = () => {
  return (
    <>
      <Toaster />
      <div className="container">
        <div className="container-up ">
          <AppBar />
          <Suspense fallback="Loading...">
            <Outlet />
          </Suspense>
        </div>
      </div>
    </>
  );
};

export default LayOut;
