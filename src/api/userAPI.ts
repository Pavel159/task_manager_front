import { $authHost, $host } from './index';
import jwt_decode from 'jwt-decode';

export const registration = async (
  name: string,
  email: string,
  password: string
) => {
  const { data } = await $host.post('api/user/registration', {
    name,
    email,
    password,
    role: 'USER',
  });
  localStorage.setItem('token', data.token);
  localStorage.setItem('userId', data.id);
  return jwt_decode(data.token);
};

export const login = async (email: string, password: string) => {
  const { data } = await $host.post('api/user/login', {
    email,
    password,
  });
  localStorage.setItem('token', data.token);
  localStorage.setItem('userId', data.id);
  return jwt_decode(data.token);
};

export const check = async () => {
  const { data } = await $authHost.get('api/user/auth');
  localStorage.setItem('token', data.token);
  return jwt_decode(data.token);
};

export const getUserInfo = async (id: number) => {
  const { data } = await $authHost.get('api/user/' + id);
  return data;
};
