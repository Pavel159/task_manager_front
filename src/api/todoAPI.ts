import { $authHost, $host } from './index';
import jwt_decode from 'jwt-decode';

export const fetchTodos = async () => {
  let userId = localStorage.getItem('userId');
  const { data } = await $authHost.get('api/todo', {
    params: {
      userId,
    },
  });
  return data;
};

export const fetchFinishedTodos = async () => {
  let userId = localStorage.getItem('userId');
  const { data } = await $authHost.get('api/todo/finished', {
    params: {
      userId,
    },
  });
  return data;
};

export const createTodo = async (todo: any) => {
  const { data } = await $authHost.post('api/todo', todo);
  console.log('123');
  return data;
};

// export const fetchSingleLead = async (id) => {
//   const { data } = await $authHost.get('api/lead/' + id);
//   return data;
// };

export const removeTodo = async (id: any) => {
  await $authHost.post('api/todo/' + id);
  return id;
};

// export const updateLead = async (lead) => {
//   const id = lead.id;
//   const { data } = await $authHost.put('api/lead/' + id, lead);
//   return data[1][0];
// };

export const updateStatus = async (todo: any) => {
  const { data } = await $authHost.put('api/todo/status/' + todo.id, todo);
  return data;
};

export const finishTodo = async (id: number) => {
  const { data } = await $authHost.put('api/todo/finish/' + id);
  return data;
};
