import React from 'react';
import AuthForm from '../modules/auth';
import useAuthStore from '../modules/auth/store';
import MyTodos from '../modules/myTodos';

const HomePage: React.FunctionComponent = () => {
  const isAuth = useAuthStore((state) => state.isAuth);
  return (
    <div>{isAuth ? <MyTodos /> : <div>Please log in to continue</div>}</div>
  );
};

export default HomePage;
