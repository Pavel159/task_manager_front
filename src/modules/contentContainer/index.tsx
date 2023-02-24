import AuthForm from '../auth';
import useAuthStore from '../auth/store';

const ContentContainer = () => {
  const isAuth = useAuthStore((state) => state.isAuth);
  const user = useAuthStore((state) => state.currentUser);
  return (
    <div className='w-full'>{isAuth ? <div>Logged in</div> : <AuthForm />}</div>
  );
};

export default ContentContainer;
