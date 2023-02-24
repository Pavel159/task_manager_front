import React from 'react';
import AuthBlock from './components/authBlock';
import ToolBar from './components/toolBar';
import UserInfo from './components/userInfo';

const Menu = () => {
  return (
    <div className='w-[300px] h-screen mr-4 flex flex-col justify-between fixed bg-blue-gray-100'>
      <div>
        <UserInfo />
        <ToolBar />
      </div>
      <AuthBlock />
    </div>
  );
};

export default Menu;
