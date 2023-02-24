import React from 'react';
import useAuthStore from '../modules/auth/store';
import History from '../modules/menu/components/history';

const HistoryPage: React.FunctionComponent = () => {
  const isAuth = useAuthStore((state) => state.isAuth);
  return <div>{isAuth ? <History /> : <div>You are not logged in</div>}</div>;
};

export default History;
