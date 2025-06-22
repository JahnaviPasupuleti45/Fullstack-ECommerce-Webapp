import React from 'react';

const Newsletter = () => {
  return (
    <div className='text-center my-10 px-4'>
      <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 20% off</p>
      <p className='text-gray-400 mt-3'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </p>

      <form className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border px-3 pr-0 rounded'>
        <input
          className='w-full sm:flex-1 outline-none p-1 my-2 text-sm text-gray-700'
          type='email'
          placeholder='Enter your email'
          required
        />
        <button
          type='submit'
          className='bg-black text-white text-xs px-6 py-4 rounded hover:bg-gray-900 transition'
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};

export default Newsletter;