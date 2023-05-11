import Wrapper from '@/components/Wrapper';
import { setToken } from '@/utils/auth';
import { useUser } from '@/utils/authContext';
import axios from 'axios';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

type SignupData = {
  username: string;
  email: string;
  password: string;
};

const Signup: NextPage = () => {
  const [formData, setformData] = useState<SignupData>({
    username: '',
    email: '',
    password: ''
  });

  const router = useRouter();

  const { user } = useUser();

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
        `${process.env.STRAPI_URL}/api/auth/local/register`,
        formData
      );
      setToken(res.data);

      router.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Wrapper>
      <div className='mt-12 flex justify-center'>
        {!!user ? (
          <div className='flex flex-col gap-2 '>
            <div>You are registered and logged in.</div>
            <button
              className='rounded bg-slate-200 '
              onClick={() => router.push('/')}
            >
              Homepage
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className='form flex gap-4 flex-col'>
            <input
              type='text'
              name='username'
              onChange={handleChange}
              placeholder='Username'
              className='p-2 form-input py-2 rounded mx-2 bg-slate-100'
              required
            />
            <input
              type='text'
              name='email'
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
              className='p-2 form-input py-2 rounded mx-2 bg-slate-100'
              required
            />
            <button
              className='p-2 rounded py-2 text-black bg-teal-300 mx-2'
              type='submit'
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </Wrapper>
  );
};

export default Signup;
