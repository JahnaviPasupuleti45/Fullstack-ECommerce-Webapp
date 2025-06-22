// import React from 'react'
// import { NavLink } from 'react-router-dom'
// import { assets } from '../assets/assets'

// const SideBar = () => {
//   return (
//     <div className='w-[18%] min-h-screen border-r-1 border-gray-300 '>
//         <div className='flex flex-col gap-4 pt-6 pl-[20%] text-[15px]'>
//             <NavLink className='flex items-center gap-3 border border-gray-300 border-r-0 rounded-l px-5 py-2' to='/add'>
//                 <img className='w-5 h-5 pl-1' src={assets.add_icon}/>
//                 <p className='hidden md:block'>Add Items</p>
//             </NavLink>

//              <NavLink className='flex items-center gap-3 border border-gray-300 border-r-0 rounded-l px-3 py-2' to='/list'>
//                 <img className='w-5 h-5 pl-1' src={assets.order_icon}/>
//                 <p className='hidden md:block'>List Items</p>
//             </NavLink>

//              <NavLink className='flex items-center gap-3 border border-gray-300 border-r-0 rounded-l px-3 py-2' to='/orders'>
//                 <img className='w-5 h-5 pl-1' src={assets.order_icon}/>
//                 <p className='hidden md:block'>Orders Items</p>
//             </NavLink>
//         </div>
//     </div>
//   )
// }

// export default SideBar

import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'

const SideBar = () => {
  return (
    <div className='w-[18%] min-h-screen border-r border-gray-300'>
        <div className='flex flex-col gap-4 pt-6 pl-[20%] text-[15px]'>
            <NavLink 
                className='flex items-center gap-3 border border-gray-300 border-r-0 rounded-l px-3 py-2 transition-colors duration-200 hover:bg-gray-50 active:bg-gray-100' 
                to='/add'
            >
                <img className='w-5 h-5 pl-1' src={assets.add_icon}/>
                <p className='hidden md:block'>Add Items</p>
            </NavLink>
            
            <NavLink 
                className='flex items-center gap-3 border border-gray-300 border-r-0 rounded-l px-3 py-2 transition-colors duration-200 hover:bg-gray-50 active:bg-gray-100' 
                to='/list'
            >
                <img className='w-5 h-5 pl-1' src={assets.order_icon}/>
                <p className='hidden md:block'>List Items</p>
            </NavLink>
            
            <NavLink 
                className='flex items-center gap-3 border border-gray-300 border-r-0 rounded-l px-3 py-2 transition-colors duration-200 hover:bg-gray-50 active:bg-gray-100' 
                to='/orders'
            >
                <img className='w-5 h-5 pl-1' src={assets.order_icon}/>
                <p className='hidden md:block'>Orders Items</p>
            </NavLink>
        </div>
    </div>
  )
}

export default SideBar