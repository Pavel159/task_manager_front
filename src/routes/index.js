import ContentContainer from '../modules/contentContainer';
import AuthPage from '../pages/AuthPage';
import HomePage from '../pages/HomePage';
import HistoryPage from '../pages/HistoryPage';

export const publicRoutes = [
  { path: '/registration', element: <AuthPage />, exact: true },
  { path: '/login', element: <AuthPage />, exact: true },
  { path: '/', element: <HomePage />, exact: true },
];

export const privateRoutes = [
  { path: '/*', element: <ContentContainer />, exact: true },
  { path: '/mytodos', element: <ContentContainer />, exact: true },
  { path: '/history', element: <HistoryPage />, exact: true },
];
