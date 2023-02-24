import React, { ReactNode } from 'react';

interface ModalProps {
  children: ReactNode;
  visible?: boolean;
  setVisible: any;
}

const ModalWindow: React.FunctionComponent<ModalProps> = ({
  children,
  visible,
  setVisible,
}) => {
  return (
    <div
      onClick={() => {
        setVisible(false);
      }}
      className={`${
        visible
          ? 'w-screen h-screen bg-black/80 absolute top-0 left-0'
          : 'hidden'
      } `}>
      <div
        onClick={(e) => e.stopPropagation()}
        className={`fixed flex flex-col gap-4 bg-blue-gray-50 top-2/4 left-2/4 ml-[-200px] mt-[-200px] w-[400px] p-5 h-[300px] m-auto rounded`}>
        {children}
      </div>
    </div>
  );
};

export default ModalWindow;
