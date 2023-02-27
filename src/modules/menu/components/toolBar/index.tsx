import { Link, useLocation } from 'react-router-dom';
import useTodosStore from '../../../myTodos/store';
import PrimaryButton from '../../../UI/PrimaryButton';

const ToolBar = () => {
  const setModalVisible = useTodosStore((state) => state.setModalVisible);
  const setNewTodosFirst = useTodosStore((state) => state.setNewFirst);
  const setStatusToFetch = useTodosStore((state) => state.setStatus);

  const location = useLocation();
  return (
    <div className='m-3'>
      <div className='mb-3'>
        {location.pathname !== '/history' && (
          <div className='flex flex-col gap-2'>
            <PrimaryButton color='green' onClick={setModalVisible}>
              Add todo
            </PrimaryButton>
            <PrimaryButton onClick={() => setStatusToFetch('new')}>
              Show only new
            </PrimaryButton>
            <PrimaryButton onClick={() => setStatusToFetch('inprogress')}>
              Show in progress
            </PrimaryButton>
            <PrimaryButton onClick={() => setStatusToFetch('completed')}>
              Show completed
            </PrimaryButton>
            <PrimaryButton onClick={() => setStatusToFetch('')}>
              Show all
            </PrimaryButton>
            <PrimaryButton onClick={setNewTodosFirst}>
              Sort by date
            </PrimaryButton>
            <Link to='/history'>
              <PrimaryButton
                color='orange'
                styles='w-full'
                onClick={setModalVisible}>
                Show finished todos
              </PrimaryButton>
            </Link>
          </div>
        )}

        {location.pathname === '/history' && (
          <div>
            <Link to='/'>
              <PrimaryButton styles='w-full' onClick={setModalVisible}>
                Back to current todos
              </PrimaryButton>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default ToolBar;
