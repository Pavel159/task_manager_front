import React from 'react';
import { useNavigate } from 'react-router-dom';
import useAuthStore from '../../../auth/store';
import PrimaryButton from '../../../UI/PrimaryButton';

const AuthBlock: React.FunctionComponent = () => {
  const navigte = useNavigate();
  const isAuth = useAuthStore((state) => state.isAuth);
  const setAuth = useAuthStore((state) => state.setAuth);
  const setUser = useAuthStore((state) => state.setUser);
  const logout = () => {
    setUser({});
    setAuth(false);
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
  };

  return (
    <div className='m-3'>
      {isAuth ? (
        <PrimaryButton onClick={() => logout()} color='red'>
          Log out
        </PrimaryButton>
      ) : (
        <PrimaryButton
          onClick={() => navigte('/registration')}
          variant='outlined'>
          Log in / Sign up
        </PrimaryButton>
      )}
    </div>
  );
};

export default AuthBlock;
