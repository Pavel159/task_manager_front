import React from 'react';
import { useFetchFinishedTodos } from '../../../../hooks/useTodos';
import TodoCard from '../../../todoCard';

const History: React.FunctionComponent = () => {
  const { isLoading: todosLoading, data: todos } = useFetchFinishedTodos();
  return (
    <div className='w-full flex justify-start gap-5 flex-wrap'>
      {todosLoading && <div>Loading...</div>}
      {todos &&
        todos.rows
          .slice()
          .sort((a: any, b: any) => b.id - a.id)
          .map((item: any) => (
            <TodoCard
              id={item.id}
              key={item.title}
              title={item.title}
              priority={item.priority}
              description={item.description}
              status={item.status}
              finished={true}
            />
          ))}
    </div>
  );
};

export default History;
