'use client';

import { useRouter } from 'next/navigation';
// import { signIn } from 'next-auth/react';
import { FormEvent, useState } from 'react';

export default function Form() {
  //   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  //     e.preventDefault();
  //     const formData = new FormData(e.currentTarget);
  //     const res = await signIn('credentials', {
  //       username: formData.get('username'),
  //       password: formData.get('password'),
  //       redirect: false,
  //     });
  //     console.log(res);
  //   };

  const [user, setUser] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    window.sessionStorage.setItem('user', user);
    window.sessionStorage.setItem('password', password);
    router.push('/');
    router.refresh();
  };

  return (
    <section className='bg-white '>
      <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-[80vh] lg:py-0'>
        <div className='w-full bg-gray-50 rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 border-2'>
          <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
            <h1 className='text-xl font-medium leading-tight tracking-tight text-gray-700 md:text-2xl'>
              Log in to your account
            </h1>
            <form
              onSubmit={handleSubmit}
              className='space-y-4 md:space-y-6'
              action='#'
            >
              <div>
                <label className='block mb-2 text-sm font-medium text-gray-900 '>
                  Your username
                </label>
                <input
                  type='username'
                  name='username'
                  id='username'
                  className='bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 '
                  placeholder='username'
                  onChange={(e) => setUser(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className='block mb-2 text-sm font-medium text-gray-900 '>
                  Password
                </label>
                <input
                  type='password'
                  name='password'
                  id='password'
                  placeholder='••••••••'
                  className='bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 '
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className='flex items-center justify-between'>
                <div className='flex items-start'>
                  <div className='flex items-center h-5'>
                    <input
                      id='remember'
                      aria-describedby='remember'
                      type='checkbox'
                      className='w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 '
                      required
                    />
                  </div>
                  <div className='ml-3 text-sm'>
                    <label className='text-gray-500 '>Remember me</label>
                  </div>
                </div>
                <a
                  href='#'
                  className='text-sm font-medium text-blue-600 hover:underline '
                >
                  Forgot password?
                </a>
              </div>
              <button
                type='submit'
                className='w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center '
              >
                Log in
              </button>
              <p className='text-sm font-light text-gray-500 '>
                Don’t have an account yet?{' '}
                <a
                  href='#'
                  className='font-medium text-blue-600 hover:underline'
                >
                  Sign up
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
