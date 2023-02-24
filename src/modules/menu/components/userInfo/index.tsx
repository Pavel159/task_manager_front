import React from 'react';
import useAuthStore from '../../../auth/store';

const UserInfo: React.FunctionComponent = () => {
  const isAuth = useAuthStore((state) => state.isAuth);
  const user = useAuthStore((state) => state.currentUser);
  return (
    <>
      {isAuth ? (
        <div className='m-3'>
          <h2 className='text-lg'>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      ) : (
        <div>Anonimous user</div>
      )}
    </>
  );
};

export default UserInfo;
