import React, { ReactNode } from 'react';

const Wrapper = ({ children }: { children?: ReactNode }) => {
  return <div className='max-w-[800px] m-auto'>{children}</div>;
};

export default Wrapper;
