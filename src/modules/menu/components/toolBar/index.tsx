import { Link, useLocation } from 'react-router-dom';
import useTodosStore from '../../../myTodos/store';
import PrimaryButton from '../../../UI/PrimaryButton';

const ToolBar = () => {
  const setModalVisible = useTodosStore((state) => state.setModalVisible);
  const setNewTodosFirst = useTodosStore((state) => state.setNewFirst);
  const location = useLocation();
  return (
    <div className='m-3'>
      <div className='mb-3'>
        {location.pathname !== '/history' && (
          <div className='flex gap-2'>
            <PrimaryButton onClick={setModalVisible}>Add todo</PrimaryButton>
            <Link to='/history'>
              <PrimaryButton onClick={setModalVisible}>
                Finished todos
              </PrimaryButton>
            </Link>
          </div>
        )}

        {location.pathname === '/history' && (
          <div>
            <Link to='/'>
              <PrimaryButton onClick={setModalVisible}>
                Current todos
              </PrimaryButton>
            </Link>
          </div>
        )}
      </div>
      <div>
        <PrimaryButton onClick={setNewTodosFirst}>Sort by date</PrimaryButton>
      </div>
    </div>
  );
};

export default ToolBar;
