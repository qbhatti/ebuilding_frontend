import React from 'react';
import Wrapper from './Wrapper';

const Footer = () => {
  return (
    <div className='w-full bg-teal-100 h-[100px] mt-10 border-t-2  relative bottom-0 left-0 right-0 mb-0'>
      <Wrapper>
        <div className='flex justify-around text-xs text-slate-700 p-3'>
          <div>
            <p>Opening Hours:</p>
            <p className='ml-3'>Mon - Fri: 8am - 6pm</p>
            <p className='ml-3'>Sat - Sun: 9am - 4pm</p>
          </div>

          <div>
            <p>Contact Us:</p>
            <p className='ml-3'>123 45 Ave</p>
            <p className='ml-3'>Vancouver, BC V3V 5S3</p>
            <p className='ml-3'>Ph# 800-123-4567</p>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Footer;
