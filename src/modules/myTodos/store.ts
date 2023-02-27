import { createTodo } from './../../api/todoAPI';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

interface ITodo {
  title: string;
  priority: string;
  description: string;
  status: string;
}

interface TodosState {
  isModalVisible: boolean;
  isNewFirst: boolean;
  statusToFetch: string;
  // todos: ITodo[];
  setModalVisible: () => void;
  setNewFirst: () => void;
  setStatus: (status: string) => any;
  // addNewTodo?: (title: string, priority: string, description: string) => void;
  // setTodos?: (todos: any) => void;
}

const useTodosStore = create<TodosState>()(
  devtools(
    immer((set) => ({
      isModalVisible: false,
      isNewFirst: false,
      statusToFetch: '',
      setModalVisible: () => {
        set((state) => ({
          isModalVisible: !state.isModalVisible,
        }));
      },
      setNewFirst: () => {
        set((state) => ({
          isNewFirst: !state.isNewFirst,
        }));
      },
      setStatus: (status: string) => {
        set(() => ({
          statusToFetch: status,
        }));
      },
      // addNewTodo: async (
      //   title: string,
      //   priority: string,
      //   description: string
      // ) => {
      //   const userId = localStorage.getItem('userId');
      //   set((state) => {
      //     const newTodo = { title, priority, description, status: 'New' };
      //     createTodo({ ...newTodo, userId });
      //     state.todos.push(newTodo);
      //   });
      // },
      // setTodos: (todos: any) => {
      //   set((state) => {
      //     state.todos.push(todos);
      //   });
      // },
    }))
  )
);

export default useTodosStore;
