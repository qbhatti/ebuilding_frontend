import Wrapper from '@/components/Wrapper';
import { setToken } from '@/utils/auth';
import axios from 'axios';
import Cookies from 'js-cookie';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

const Signin = () => {
  const [formData, setformData] = useState({
    identifier: '',
    password: ''
  });

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setformData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        `${process.env.STRAPI_URL}/api/auth/local`,
        formData
      );
      //set cookies with jwt token
      setToken(res.data);
      if (Cookies.get('username')) router.push('/');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Wrapper>
      <div className='mt-12 flex justify-center'>
        <form onSubmit={handleSubmit} className='form flex gap-4 flex-col'>
          <input
            type='text'
            name='identifier'
            onChange={handleChange}
            placeholder='Email'
            className='p-2 form-input py-2 rounded mx-2 bg-slate-100'
            required
          />
          <input
            type='password'
            name='password'
            onChange={handleChange}
            placeholder='Password'
            className='p-2 form-input py-2 rounded mx-2  bg-slate-100'
            required
          />
          <button
            className='p-2 rounded py-2 text-black bg-teal-300 mx-2'
            type='submit'
          >
            Login
          </button>

          <Link
            className='p-2 rounded py-2 text-black bg-teal-100 border-solid border-black mx-2'
            href='/signup'
          >
            <p className='text-center '>Register</p>
          </Link>
        </form>
      </div>
    </Wrapper>
  );
};

export default Signin;
