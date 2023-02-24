import { Route, Routes } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../../routes';
import useAuthStore from '../auth/store';
import ContentContainer from '../contentContainer';

export default function AppRouter() {
  const isAuth = useAuthStore((state) => state.isAuth);

  return (
    <Routes>
      {publicRoutes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={route.element}
          exact={route.exact}
        />
      ))}
      {isAuth &&
        privateRoutes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={route.element}
            exact={route.exact}
          />
        ))}

      {isAuth && <Route path='mytodos' element={<ContentContainer />}></Route>}
    </Routes>
  );
}
