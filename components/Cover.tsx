import React from 'react';

const Cover = () => {
  return (
    <div
      className='flex flex-col justify-center bg-cover text-white bg-center h-[300px] md:h-[450px] lg:h-[550px]'
      style={{ backgroundImage: `url(/assets/images/cover-photo.jpeg)` }}
    >
      <div className='text-[4em] text-center mb-10'>
        <span>Residential and Commercial Properties</span>
      </div>
      <div className='text-[2em] text-center'>
        <span>Buy | Rent | Sell</span>
      </div>
    </div>
  );
};

export default Cover;
