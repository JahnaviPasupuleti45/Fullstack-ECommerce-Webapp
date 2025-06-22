import React from 'react';
import { assets } from '../assets/assets';
import Title from '../components/Title';

const About = () => {
  // Premium SVG icons as components
  const QualityIcon = () => (
    <svg className="w-12 h-12 text-blue-600 mx-auto mb-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
    </svg>
  );
  
  const ConvenienceIcon = () => (
    <svg className="w-12 h-12 text-green-600 mx-auto mb-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
    </svg>
  );
  
  const ServiceIcon = () => (
    <svg className="w-12 h-12 text-purple-600 mx-auto mb-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
    </svg>
  );

  return (
    <div>
      {/* Title Section */}
      <div className='text-2xl text-center pt-8 border-t'>
       <Title text1={"ABOUT"} text2={"US"}/>
      </div>

      {/* Main Content Section */}
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Forever was born out of a passion for innovation and a desire to revolutionize the way people shop online. Our journey began with a simple idea: to provide a platform where customers can easily discover, explore, and purchase a wide range of products from the comfort of their homes.</p>
          <p>Since our inception, we've worked tirelessly to curate a diverse selection of high-quality products that cater to every taste and preference. From fashion and beauty to electronics and home essentials, we offer an extensive collection sourced from trusted brands and suppliers.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Our mission at Forever is to empower customers with choice, convenience, and confidence. We're dedicated to providing a seamless shopping experience that exceeds expectations, from browsing and ordering to delivery and beyond.</p>
        
          <b className='text-gray-800'>Our Vision</b>
          <p>Our mission at Forever is to empower customers with choice, convenience, and confidence. We're dedicated to providing a seamless shopping experience that exceeds expectations, from browsing and ordering to delivery and beyond.</p>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className='text-2xl py-4'>
       <Title text1={"WHY"} text2={"CHOOSE US"}/>
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border border-gray-200 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 text-center hover:shadow-lg hover:border-blue-200 transition-all duration-300 group'>
          <div className="group-hover:scale-110 transition-transform duration-300">
            <QualityIcon />
          </div>
          <b className='text-gray-800 text-lg'>Quality Assurance</b>
          <p className='text-gray-600 leading-relaxed'>We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
        </div>
        <div className='border border-gray-200 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 text-center hover:shadow-lg hover:border-green-200 transition-all duration-300 group'>
          <div className="group-hover:scale-110 transition-transform duration-300">
            <ConvenienceIcon />
          </div>
          <b className='text-gray-800 text-lg'>Convenience</b>
          <p className='text-gray-600 leading-relaxed'>With our user-friendly interface and hassle-free ordering process, shopping has never been easier.</p>
        </div>
        <div className='border border-gray-200 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 text-center hover:shadow-lg hover:border-purple-200 transition-all duration-300 group'>
          <div className="group-hover:scale-110 transition-transform duration-300">
            <ServiceIcon />
          </div>
          <b className='text-gray-800 text-lg'>Exceptional Customer Service</b>
          <p className='text-gray-600 leading-relaxed'>Our team of dedicated professionals is here to assist you every step of the way, ensuring your satisfaction is our top priority.</p>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className='text-center mb-20'>
        <div className='inline-flex gap-2 items-center mb-3'>
          <p className='w-8 md:w-11 h-[1px] bg-[#414141]'></p>
          <p className='text-gray-500 font-medium text-sm md:text-base'>SUBSCRIBE NOW & GET 20% OFF</p>
          <p className='w-8 md:w-11 h-[1px] bg-[#414141]'></p>
        </div>
        <p className='text-gray-600 mt-3 mb-6'>
          Stay updated with our latest arrivals and exclusive offers
        </p>
        <form className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
          <input className='w-full sm:flex-1 outline-none py-3 px-2' type="email" placeholder='Enter your email' required/>
          <button type='submit' className='bg-black text-white text-xs px-10 py-4 hover:bg-gray-800 transition-colors duration-300'>SUBSCRIBE</button>
        </form>
      </div>
    </div>
  )
}

export default About;