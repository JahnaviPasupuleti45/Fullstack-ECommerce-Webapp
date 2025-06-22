// import React from 'react'
// import { assets } from '../assets/assets'

// const Footer = () => {
//   return (
//     <div>
//       <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
//         {/* Company Info Section */}
//         <div>
//           <img src={assets.logo} className='mb-5 w-32' alt="Company Logo" />
//           <p className='w-full md:w-2/3 text-gray-600'>
//             Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
//           </p>
//         </div>

//         {/* Company Links Section */}
//         <div>
//           <p className='text-xl font-medium mb-5'>COMPANY</p>
//           <ul className='flex flex-col gap-1 text-gray-600'>
//             <li className='hover:text-gray-800 cursor-pointer'>Home</li>
//             <li className='hover:text-gray-800 cursor-pointer'>About us</li>
//             <li className='hover:text-gray-800 cursor-pointer'>Delivery</li>
//             <li className='hover:text-gray-800 cursor-pointer'>Privacy policy</li>
//           </ul>
//         </div>

//         {/* Get in Touch Section */}
//         <div>
//           <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
//           <ul className='flex flex-col gap-1 text-gray-600'>
//             <li>+1-212-456-7890</li>
//             <li>contact@company.com</li>
//             <li className='hover:text-gray-800 cursor-pointer'>Customer Support</li>
//             <li className='hover:text-gray-800 cursor-pointer'>Help Center</li>
//           </ul>
//         </div>
//       </div>

//       {/* Copyright Section */}
//       <div>
//         <hr className='border-gray-300' />
//         <p className='py-5 text-sm text-center text-gray-600'>
//           Copyright 2024 @ Company.com - All Rights Reserved.
//         </p>
//       </div>
//     </div>
//   )
// }

// export default Footer


import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        {/* Company Info Section */}
        <div>
          <img src={assets.logo} className='mb-5 w-32' alt="Company Logo" />
          <p className='w-full md:w-2/3 text-gray-600'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
          
          {/* Social Media Icons */}
          <div className='flex gap-4 mt-5'>
            <div className='w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center cursor-pointer hover:bg-black'>
              <span className='text-white text-xs font-bold'>f</span>
            </div>
            <div className='w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center cursor-pointer hover:bg-black'>
              <span className='text-white text-xs font-bold'>@</span>
            </div>
            <div className='w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center cursor-pointer hover:bg-black'>
              <span className='text-white text-xs font-bold'>t</span>
            </div>
            <div className='w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center cursor-pointer hover:bg-black'>
              <span className='text-white text-xs font-bold'>in</span>
            </div>
            <div className='w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center cursor-pointer hover:bg-black'>
              <span className='text-white text-xs font-bold'>▶</span>
            </div>
          </div>
        </div>

        {/* Company Links Section */}
        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li className='hover:text-gray-800 cursor-pointer'>Home</li>
            <li className='hover:text-gray-800 cursor-pointer'>About us</li>
            <li className='hover:text-gray-800 cursor-pointer'>Delivery</li>
            <li className='hover:text-gray-800 cursor-pointer'>Privacy policy</li>
          </ul>
        </div>

        {/* Get in Touch Section */}
        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>+1-212-456-7890</li>
            <li>contact@company.com</li>
            <li className='hover:text-gray-800 cursor-pointer'>Customer Support</li>
            <li className='hover:text-gray-800 cursor-pointer'>Help Center</li>
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div>
        <hr className='border-gray-300' />
        <p className='py-5 text-sm text-center text-gray-600'>
          Copyright 2024 @ Company.com - All Rights Reserved.
        </p>
      </div>
    </div>
  )
}

export default Footer