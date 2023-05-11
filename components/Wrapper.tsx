import React, { ReactNode } from 'react';

type WrapperProps = {
  children?: ReactNode;
};

const Wrapper = ({ children }: WrapperProps) => {
  return <div className='max-w-[800px] m-auto'>{children}</div>;
};

export default Wrapper;
