import { LoginForm } from 'components/component/LoginForm';
import { useSelector } from 'react-redux';

import '../../index.css';

const HomeView = () => {
  const isLoggedIn = useSelector(state => state.user.isLogin);
  return (
    <div className="pageContainer">
      <h2>Home page</h2>
      {!isLoggedIn && <LoginForm />}
    </div>
  );
};

export default HomeView;
