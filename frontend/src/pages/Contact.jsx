
import React from 'react';
import { assets } from '../assets/assets';
import Title from '../components/Title';
import Newsletter from '../components/NewsLetter';

const Contact = () => {
  // Premium SVG icons
  const LocationIcon = () => (
    <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25s-7.5-4.108-7.5-11.25a7.5 7.5 0 1115 0z" />
    </svg>
  );

  const PhoneIcon = () => (
    <svg className="w-6 h-6 text-green-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
  );

  const EmailIcon = () => (
    <svg className="w-6 h-6 text-purple-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
  );

  const BriefcaseIcon = () => (
    <svg className="w-6 h-6 text-orange-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.054c-.39.049-.777.102-1.163.16-1.07.16-2.065 1.095-2.065 2.18v1.462A5.972 5.972 0 0112 18.75a5.972 5.972 0 01-2.775-.687V16.6c0-1.085-.995-2.02-2.065-2.18-.386-.058-.773-.111-1.163-.16m15.5 3.807a2.501 2.501 0 000-5.002 2.501 2.501 0 000 5.002z" />
    </svg>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Title Section */}
      <div className='text-2xl text-center pt-10 border-t bg-white'>
        <Title text1={"CONTACT"} text2={"US"} />
      </div>

      {/* Main Content Section */}
      <div className='my-10 flex flex-col gap-10 md:flex-row sm:gap-0  max-w-6xl mx-auto px-2'>
        {/* Contact Image */}
        <div className='flex-1'>
          <img 
            className='w-full md:max-w-[480px] rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300' 
            src={assets.contact_img} 
            alt="Contact Us" 
          />
        </div>

        {/* Contact Information */}
        <div className='flex-1 flex flex-col justify-center gap-5 '>
          <div className='bg-white p-4 rounded-2xl'>
            <h2 className='font-bold text-2xl text-gray-800 mb-6'>Our Store</h2>
            
            <div className='space-y-6'>
              {/* Location */}
              <div className='flex items-start'>
                <LocationIcon />
                <div>
                  <p className='font-semibold text-gray-800'>Address</p>
                  <p className='text-gray-600'>54709 Willms Station <br />Suite 350, Washington, <br />United States</p>
                </div>
              </div>

              {/* Phone */}
              <div className='flex items-start'>
                <PhoneIcon />
                <div>
                  <p className='font-semibold text-gray-800'>Phone</p>
                  <p className='text-gray-600'>(415) 555-0132</p>
                </div>
              </div>

              {/* Email */}
              <div className='flex items-start'>
                <EmailIcon />
                <div>
                  <p className='font-semibold text-gray-800'>Email</p>
                  <p className='text-gray-600'>admin@forever.com</p>
                </div>
              </div>

              {/* Careers */}
              <div className='flex items-start'>
                <BriefcaseIcon />
                <div>
                  <p className='font-semibold text-gray-800'>Careers at Forever</p>
                  <p className='text-gray-600'>Learn more about our teams and job openings.</p>
                </div>
              </div>
            </div>

            {/* Explore Jobs Button */}
            <button className='mt-8 w-full bg-black text-white px-8 py-4 rounded-lg font-medium hover:bg-gray-900 shadow-lg'>
              Explore Jobs
            </button>
          </div>
        </div>
      </div>

     {/* Contact Form Section */}
<div className='bg-white py-16'>
  <div className='max-w-4xl mx-auto px-1'>
    <div className='text-center mb-12'>
      <h2 className='text-3xl font-bold text-gray-800 mb-4'>Get In Touch</h2>
      <p className='text-gray-600 text-lg'>We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
    </div>
    
    <div className='bg-gray-50 p-6 rounded-2xl shadow-lg'>
      <div className='space-y-6'>
        <div className='grid md:grid-cols-2 gap-6'>
          <div>
            <label className='block text-sm font-medium text-gray-700 mb-2'>First Name</label>
            <input
               type='text'
               className='w-full px-4 py-3 border border-gray-300 rounded-lg'
               placeholder='Enter your first name'
            />
          </div>
          <div>
            <label className='block text-sm font-medium text-gray-700 mb-2'>Last Name</label>
            <input
               type='text'
               className='w-full px-4 py-3 border border-gray-300 rounded-lg'
               placeholder='Enter your last name'
            />
          </div>
        </div>
        
        <div>
          <label className='block text-sm font-medium text-gray-700 mb-2'>Email</label>
          <input
             type='email'
             className='w-full px-4 py-3 border border-gray-300 rounded-lg'
             placeholder='Enter your email address'
          />
        </div>
        
        <div>
          <label className='block text-sm font-medium text-gray-700 mb-2'>Subject</label>
          <input
             type='text'
             className='w-full px-4 py-3 border border-gray-300 rounded-lg'
             placeholder='What is this about?'
          />
        </div>
        
        <div>
          <label className='block text-sm font-medium text-gray-700 mb-2'>Message</label>
          <textarea
             rows='6'
             className='w-full px-4 py-3 border border-gray-300 rounded-lg resize-none'
             placeholder='Tell us more about your inquiry...'
          ></textarea>
        </div>
        
        <button
           type='submit'
           className='w-full bg-black text-white px-8 py-4 rounded-lg font-medium hover:bg-gray-900 shadow-lg'
        >
          Send Message
        </button>
      </div>
    </div>
  </div>
</div>

     <Newsletter/>
    </div>
  )
}

export default Contact;