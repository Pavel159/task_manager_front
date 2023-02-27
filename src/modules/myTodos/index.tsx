import React, { useState } from 'react';
import { useAddTodo, useFetchTodos } from '../../hooks/useTodos';
import ModalWindow from '../modalWindow';
import TodoCard from '../todoCard';
import CustomInput from '../UI/CustomInput';
import CustomSelect from '../UI/CustomSelect';
import PrimaryButton from '../UI/PrimaryButton';
import useTodosStore from './store';

interface ITodo {
  id: number;
  title: string;
  priority: string;
  description: string;
}

const MyTodos: React.FunctionComponent = () => {
  const userId = localStorage.getItem('userId');
  const statusToFetch = useTodosStore((state) => state.statusToFetch);
  const { isLoading: todosLoading, data: todos } = useFetchTodos(statusToFetch);
  const { mutate: addNewTodo } = useAddTodo();
  const isModalVisible = useTodosStore((state) => state.isModalVisible);
  const setModalVisible = useTodosStore((state) => state.setModalVisible);
  const isNewFirst = useTodosStore((state) => state.isNewFirst);

  console.log(statusToFetch);

  const [newTodo, setNewTodo] = useState({
    title: '',
    priority: '',
    description: '',
    userId,
  });

  const handleInputChange = (e: any) => {
    setNewTodo({ ...newTodo, [e.target.name]: e.target.value });
  };
  const handleSelectChange = (value: any) => {
    setNewTodo({ ...newTodo, priority: value });
  };
  const handleAddNewTodo = () => {
    addNewTodo(newTodo);
    setNewTodo({
      title: '',
      priority: '',
      description: '',
      userId,
    });
    setModalVisible();
  };

  const newTodosFirst =
    todos && todos.rows.slice().sort((a: any, b: any) => b.id - a.id);

  return (
    <div className='w-full flex justify-start gap-5 flex-wrap'>
      {todosLoading && <div>Loading...</div>}
      {todos && isNewFirst
        ? newTodosFirst.map((item: any) => (
            <TodoCard
              id={item.id}
              key={item.title}
              title={item.title}
              priority={item.priority}
              description={item.description}
              status={item.status}
              finished={false}
            />
          ))
        : todos &&
          todos.rows.map((item: any) => (
            <TodoCard
              id={item.id}
              key={item.title}
              title={item.title}
              priority={item.priority}
              description={item.description}
              status={item.status}
              finished={false}
            />
          ))}
      <ModalWindow visible={isModalVisible} setVisible={setModalVisible}>
        <CustomInput
          value={newTodo.title}
          label='Title'
          name='title'
          onChange={handleInputChange}
        />
        <CustomSelect
          value={newTodo.priority}
          label='Priority'
          variant='outlined'
          options={['High', 'Medium', 'Low']}
          onChange={handleSelectChange}
        />
        <CustomInput
          value={newTodo.description}
          label='Description'
          name='description'
          onChange={handleInputChange}
        />
        <PrimaryButton onClick={handleAddNewTodo}>Add todo</PrimaryButton>
        <PrimaryButton color='red' onClick={() => setModalVisible()}>
          Close
        </PrimaryButton>
      </ModalWindow>
    </div>
  );
};

export default MyTodos;
