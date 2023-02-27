import {
  createTodo,
  fetchFinishedTodos,
  fetchTodos,
  finishTodo,
  removeTodo,
  updateStatus,
} from './../api/todoAPI';
import { useMutation, useQuery, useQueryClient } from 'react-query';

export const useFetchTodos = (status: string) => {
  return useQuery(['todos', status], () => fetchTodos(status));
};

export const useFetchFinishedTodos = () => {
  return useQuery(['todos'], fetchFinishedTodos);
};

export const useAddTodo = () => {
  const client = useQueryClient();
  return useMutation(createTodo, {
    onSuccess: () => {
      client.invalidateQueries(['todos']);
    },
  });
};

export const useRemoveTodo = () => {
  const client = useQueryClient();
  return useMutation(removeTodo, {
    onSuccess: () => {
      client.invalidateQueries(['todos']);
    },
  });
};

export const useUpdateTodoStatus = (todo: any) => {
  const client = useQueryClient();
  return useMutation(() => updateStatus(todo), {
    onSuccess: () => {
      client.invalidateQueries(['todos']);
    },
  });
};

export const useFinishTodo = () => {
  const client = useQueryClient();
  return useMutation(finishTodo, {
    onSuccess: () => {
      client.invalidateQueries(['todos']);
    },
  });
};
