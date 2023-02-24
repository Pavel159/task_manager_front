import './App.css';
import Menu from './modules/menu';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './modules/appRouter';
import { useEffect } from 'react';
import { check, getUserInfo } from './api/userAPI';
import useAuthStore from './modules/auth/store';
import { QueryClient, QueryClientProvider } from 'react-query';

function App() {
  const queryClient = new QueryClient();
  const setAuth = useAuthStore((state) => state.setAuth);
  const setUser = useAuthStore((state) => state.setUser);
  useEffect(() => {
    check().then(async (data: any) => {
      setAuth(true);
      const user = await getUserInfo(data.id);
      setUser(user);
    });
  }, []);
  return (
    <QueryClientProvider client={queryClient}>
      <div className='App'>
        <div className='flex flex-row items-start font-Roboto'>
          <BrowserRouter>
            <Menu />
            <div className='ml-[320px]'>
              <AppRouter />
            </div>
          </BrowserRouter>
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;
