import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

interface IUser {
  name: string;
  email: string;
  password: string;
}

interface AuthState {
  isAuth: boolean;
  currentUser: any;
  setAuth: (status: boolean) => void;
  setUser: (user: any) => void;
}

const useAuthStore = create<AuthState>()(
  devtools(
    immer((set) => ({
      isAuth: false,
      currentUser: {},
      setAuth: (status: boolean) =>
        set(() => ({
          isAuth: status,
        })),
      setUser: (user) => {
        set(() => ({
          currentUser: user,
        }));
      },
    }))
  )
);

export default useAuthStore;
