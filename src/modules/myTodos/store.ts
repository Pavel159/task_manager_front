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
  // todos: ITodo[];
  setModalVisible: () => void;
  setNewFirst: () => void;
  // addNewTodo?: (title: string, priority: string, description: string) => void;
  // setTodos?: (todos: any) => void;
}

const useTodosStore = create<TodosState>()(
  devtools(
    immer((set) => ({
      isModalVisible: false,
      todos: [],
      isNewFirst: false,
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
