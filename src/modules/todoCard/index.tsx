import React, { useState } from 'react';
import {
  useFinishTodo,
  useRemoveTodo,
  useUpdateTodoStatus,
} from '../../hooks/useTodos';
import CustomSelect from '../UI/CustomSelect';
import PrimaryButton from '../UI/PrimaryButton';

interface TodoCardProps {
  id: number;
  title: string;
  priority: string;
  description: string;
  status: string;
  finished: boolean;
}

const TodoCard: React.FC<TodoCardProps> = ({
  id,
  title,
  priority,
  description,
  status,
  finished,
}) => {
  const [todoStatus, setTodoStatus] = useState(status);
  const { mutate: removeTodo } = useRemoveTodo();
  const { mutate: finishTodo } = useFinishTodo();
  const { mutate: updateStatus } = useUpdateTodoStatus({
    id,
    status: todoStatus,
  });
  const handleSelectChange = (value: any) => {
    setTodoStatus(value);
    setTimeout(() => {
      updateStatus();
    }, 100);
  };

  const handleFinishTodo = () => {
    todoStatus === 'Completed'
      ? finishTodo(id)
      : alert('Mark todo as Completed to finish');
  };
  return (
    <>
      {finished ? (
        <div className='flex rounded-md bg-red-100 p-5 my-3 flex-col w-[300px] gap-3'>
          <h2 className='text-xl'>{title}</h2>
          <h3 className='text-lg'>{priority}</h3>
          <p>{description}</p>
          <p>Completed</p>
        </div>
      ) : (
        <div className='flex rounded-md bg-red-100 justify-between p-5 my-3 flex-col w-[300px]'>
          <div className='flex flex-col gap-3'>
            <h2 className='text-xl'>{title}</h2>
            <h3 className='text-lg'>{priority}</h3>
            <p>{description}</p>
            <CustomSelect
              value={todoStatus}
              label='Status'
              variant='outlined'
              options={['New', 'In progress', 'Completed']}
              onChange={handleSelectChange}
            />
          </div>
          <div className='flex justify-between mt-4'>
            <PrimaryButton onClick={handleFinishTodo} color='green'>
              Done
            </PrimaryButton>
            <PrimaryButton onClick={() => removeTodo(id)} color='red'>
              Remove
            </PrimaryButton>
          </div>
        </div>
      )}
    </>
  );
};

export default TodoCard;
