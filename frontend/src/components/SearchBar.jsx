// import React, { useContext } from 'react';
// import { ShopContext } from '../context/ShopContext';
// import { assets } from '../assets/assets';

// const SearchBar = () => {
//   const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);

//   return showSearch ? (
//     <div className='border-t border-b bg-gray-50 text-center py-4'>
//       <div className='inline-flex items-center justify-center gap-2 border border-gray-400 px-4 py-2 rounded-md'>
//         <input
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           className='flex-1 outline-none bg-transparent'
//           placeholder='Search products...'
//         />
//         <img src={assets.search} alt='Search Icon' className='w-5 h-5' />
//       </div>
//         <img src={assets.cross_icon} onClick={() => setShowSearch(false)} alt='Close Search' className='w-5 h-5' />
      
//     </div>
//   ) : null;
// };

// export default SearchBar;


import React, { useContext, useState,useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import { useLocation } from 'react-router-dom';

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
  const [visible,setVisible]=useState(false);
  const location=useLocation();
  useEffect(()=>{
    if(location.pathname.includes('collection')){
        setVisible(true)
    }
    else{
        setVisible(false)
    }
  },[location])
  return showSearch  && visible ? (
    <div className=' bg-gray-50 text-center py-4 border-t border-gray-500/30'>
      <div className='inline-flex items-center justify-between border border-gray-300 px-4 py-2 rounded-full shadow-sm bg-white w-[90%] max-w-xl mx-auto'>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className='flex-1 outline-none bg-transparent text-gray-700 placeholder-gray-500 m-[3.5px]'
          placeholder='Search products...'
        />
        <img src={assets.search} alt='Search Icon' className='w-5 h-5 opacity-70 cursor-pointer' />
      </div>

    
        <img
          src={assets.cross_icon}
          onClick={() => setShowSearch(false)}
          alt='Close Search'
          className='w-5 h-5 cursor-pointer opacity-70 hover:opacity-100 transition inline ml-3 pb-1'
        />
    </div>
  ) : null;
};

export default SearchBar;
