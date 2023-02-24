import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { getUserInfo, login, registration } from '../../api/userAPI';
import CustomInput from '../UI/CustomInput';
import PrimaryButton from '../UI/PrimaryButton';
import useAuthStore from './store';

const AuthForm: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isLoginPage = location.pathname === '/login';
  const setAuth = useAuthStore((state) => state.setAuth);
  const setUser = useAuthStore((state) => state.setUser);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = async () => {
    let data: any;
    let user;
    try {
      if (isLoginPage) {
        data = await login(email, password);
        user = await getUserInfo(data.id);
      } else {
        data = await registration(name, email, password);
        user = await getUserInfo(data.id);
      }
      setAuth(true);
      setUser(user);
      navigate('/');
    } catch (e) {
      // @ts-ignore
      alert(e.response.data.message);
    }
  };

  return (
    <div className='max-w-md m-auto mt-16'>
      <form className='flex flex-col gap-y-4'>
        {location.pathname === '/registration' && (
          <CustomInput
            label='Username'
            onChange={(e) => setName(e.target.value)}
          />
        )}
        <CustomInput label='Email' onChange={(e) => setEmail(e.target.value)} />
        <CustomInput
          label='Password'
          onChange={(e) => setPassword(e.target.value)}
        />
        {location.pathname === '/registration' ? (
          <div>
            <p>Already have an account?</p>
            <Link to='/login'>Log in</Link>
          </div>
        ) : (
          <div>
            <p>Dont't have account?</p>
            <Link to='/registration'>Sign up</Link>
          </div>
        )}

        <PrimaryButton onClick={handleSubmit} variant='outlined'>
          Submit
        </PrimaryButton>
      </form>
    </div>
  );
};

export default AuthForm;
