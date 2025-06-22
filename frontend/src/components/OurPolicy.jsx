import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 py-20 text-xs sm:text-sm md:text-based text-gray-700'>
        <div className='flex flex-col items-center'>
            <img src={assets.exchange} className='w-15 m-auto mb-5'></img>
            <p className='font-semibold'>Easy Exchnage Policy</p>
            <p className='text-gray-400'>we offer hassele free exchange policy</p>
        </div>

         <div className='flex flex-col items-center'>
            <img src={assets.quality} className='w-14 m-auto mb-5'></img>
            <p className='font-semibold '>7 Days return Policy</p>
            <p className='text-gray-400'>we provide 7 days free return Policy</p>
        </div>

         <div className='flex flex-col items-center'>
            <img src={assets.support} className='mt-2 w-12 m-auto mb-5'></img>
            <p className='font-semibold'>Best Customer Support</p>
            <p className='text-gray-400'>we provide 24/7 customer support</p> 
        </div>
    </div>
  )
}

export default OurPolicy