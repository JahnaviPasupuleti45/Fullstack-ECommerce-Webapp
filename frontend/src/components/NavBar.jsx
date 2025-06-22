// import React, { useContext, useState } from 'react'
// import {assets} from '../assets/assets';
// import { Link,NavLink } from 'react-router-dom';
// import { ShopContext } from '../context/ShopContext';

// const NavBar = () => {
//   const [visible,setVisible]=useState(false);
//   const [profileDropdown, setProfileDropdown] = useState(false);
//   const {setShowSearch,getCartCount,token,setToken,setCartItems,navigate,userData}=useContext(ShopContext);
  
//   const logout=()=>{
//     localStorage.removeItem('token');
//     navigate('/login')
//     setToken('');
//     setCartItems({});
//     setProfileDropdown(false);
//   }

//   const handleProfileClick = () => {
//     if(token) {
//       setProfileDropdown(!profileDropdown);
//     } else {
//       navigate('/login');
//     }
//   }

//   const handleProfileNavigation = (path) => {
//     if(path === '/profile') {
//       // Add your profile navigation logic here
//       console.log('Navigate to profile');
//     } else if(path === '/orders') {
//       navigate('/orders');
//     }
//     setProfileDropdown(false);
//   }

//   return (
//     <div className='flex items-center justify-between py-5 font-medium' >
//         <Link to='/'><img src={assets.logo} className='w-36 '></img></Link>
        
//         <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
//             <NavLink to='/' className='flex flex-col items-center gap-1'>
//                 <p>HOME</p>
//                 <hr className='w-2/4 border-none h-[1.5px] bg-gray-700  hidden '   />
//             </NavLink>

//              <NavLink to='/collection' className='flex flex-col items-center gap-1'>
//                 <p>COLLECTIONS</p>
//                 <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
//             </NavLink>

//              <NavLink to='/about' className='flex flex-col items-center gap-1'>
//                 <p>ABOUT</p>
//                 <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
//             </NavLink>

//              <NavLink to='/contact' className='flex flex-col items-center gap-1'>
//                 <p>CONTACT</p>
//                 <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
//             </NavLink>
//         </ul>

//         <div className='flex gap-6 relative'>
//             <img onClick={()=> setShowSearch(true)} src={assets.search} className='w-5 cursor-pointer'></img>
            
//             {/* Profile Icon with Dropdown */}
//             <div className="relative">
//               {/* Desktop Hover Dropdown */}
//               <div className="hidden sm:block relative group">
//                 <img 
//                   onClick={handleProfileClick} 
//                   src={assets.profile_icon} 
//                   className="w-5 cursor-pointer" 
//                   alt="Profile" 
//                 />
//                 {token && (
//                   <div className="absolute right-0 pt-4 hidden group-hover:block dropdown-menu z-50">
//                     <div className="flex flex-col gap-2 w-36 py-3 px-4 bg-white shadow-lg rounded-lg border">
//                       <p 
//                         onClick={() => handleProfileNavigation('/profile')} 
//                         className="cursor-pointer hover:text-black hover:bg-gray-100 py-1 px-2 rounded transition-colors"
//                       >
//                         my profile
//                       </p>
//                       <p 
//                         onClick={() => handleProfileNavigation('/orders')} 
//                         className="cursor-pointer hover:text-black hover:bg-gray-100 py-1 px-2 rounded transition-colors"
//                       >
//                         Orders
//                       </p>
//                       <p 
//                         onClick={logout} 
//                         className="cursor-pointer hover:text-black hover:bg-gray-100 py-1 px-2 rounded transition-colors"
//                       >
//                         Logout
//                       </p>
//                     </div>
//                   </div>
//                 )}
//               </div>

//               {/* Mobile Click Dropdown */}
//               <div className="sm:hidden relative">
//                 <img 
//                   onClick={handleProfileClick} 
//                   src={assets.profile_icon} 
//                   className="w-5 cursor-pointer" 
//                   alt="Profile" 
//                 />
//                 {token && profileDropdown && (
//                   <div className="absolute right-0 top-8 z-50">
//                     <div className="flex flex-col gap-2 w-40 py-3 px-4 bg-white shadow-lg rounded-lg border">
//                       <p 
//                         onClick={() => handleProfileNavigation('/profile')} 
//                         className="cursor-pointer hover:text-black hover:bg-gray-100 py-2 px-2 rounded transition-colors text-sm"
//                       >
//                         My Profile
//                       </p>
//                       <p 
//                         onClick={() => handleProfileNavigation('/orders')} 
//                         className="cursor-pointer hover:text-black hover:bg-gray-100 py-2 px-2 rounded transition-colors text-sm"
//                       >
//                         Orders
//                       </p>
//                       <p 
//                         onClick={logout} 
//                         className="cursor-pointer hover:text-black hover:bg-gray-100 py-2 px-2 rounded transition-colors text-sm"
//                       >
//                         Logout
//                       </p>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>

//             <Link to='/cart' className='relative'>
//               <img src={assets.cart} className='w-5'></img>
//               <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[10px]">{getCartCount()}</p>
//             </Link>
            
//             <img src={assets.menu_icon} onClick={()=>{setVisible(true)}} className='sm:hidden w-4 cursor-pointer'></img>
//         </div>
      
//         {/* Mobile Menu Sidebar */}
//         <div
//           className={`absolute right-0 top-0 bottom-0 transition-all duration-300 ease-in-out overflow-hidden bg-white shadow-lg z-50 ${
//             visible ? 'w-64' : 'w-0'
//           }`}
//         >
//           <div className="flex flex-col text-gray-700 h-full">
//             {/* Back Button */}
//             <div
//               className="flex items-center px-3 py-4 my-[12px] gap-3 cursor-pointer hover:bg-gray-100 transition"
//               onClick={() => setVisible(false)}
//             >
//               <img src={assets.dropdown} alt="Back" className="h-4 rotate-180" />
//               <p className="text-sm font-medium">Back</p>
//             </div>

//             {/* Navigation Links */}
//             <nav className="flex flex-col gap-1 mt-4">
//               <NavLink onClick={()=>{setVisible(false)}}
//                 to="/"
//                 className="py-3 px-6 hover:bg-gray-100 transition text-sm border-by"
//               >
//                 Home
//               </NavLink>
//               <NavLink onClick={()=>{setVisible(false)}}
//                 to="/collection"
//                 className="py-3 px-6 hover:bg-gray-100 transition text-sm border-by"
//               >
//                 Collection
//               </NavLink>
//               <NavLink onClick={()=>{setVisible(false)}}
//                 to="/about"
//                 className="py-3 px-6 hover:bg-gray-100 transition text-sm border-by"
//               >
//                 About
//               </NavLink>
//               <NavLink onClick={()=>{setVisible(false)}}
//                 to="/contact"
//                 className="py-3 px-6 hover:bg-gray-100 transition text-sm"
//               >
//                 Contact
//               </NavLink>
//             </nav>
//           </div>
//         </div>

//         {/* Mobile Profile Dropdown Overlay */}
//         {profileDropdown && (
//           <div 
//             className="sm:hidden fixed inset-0 z-40" 
//             onClick={() => setProfileDropdown(false)}
//           ></div>
//         )}
//     </div>
//   )
// }

// export default NavBar



import React, { useContext, useState } from 'react'
import {assets} from '../assets/assets';
import { Link,NavLink } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const NavBar = () => {
  const [visible,setVisible]=useState(false);
  const [profileDropdown, setProfileDropdown] = useState(false);
  const {setShowSearch,getCartCount,token,setToken,setCartItems,navigate,userData,setUserData}=useContext(ShopContext);
  
  const logout=()=>{
    localStorage.removeItem('token');
    localStorage.removeItem('userData'); // ✅ Clear user data
    navigate('/login')
    setToken('');
    setCartItems({});
    setUserData(null); // ✅ Clear user data from state
    setProfileDropdown(false);
  }

  const handleProfileClick = () => {
    if(token) {
      setProfileDropdown(!profileDropdown);
    } else {
      navigate('/login');
    }
  }

  const handleProfileNavigation = (path) => {
    if(path === '/profile') {
      // Add your profile navigation logic here
      console.log('Navigate to profile');
    } else if(path === '/orders') {
      navigate('/orders');
    }
    setProfileDropdown(false);
  }

  return (
    <div className='flex items-center justify-between py-5 font-medium' >
        <Link to='/'><img src={assets.logo} className='w-36 '></img></Link>
        
        <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
            <NavLink to='/' className='flex flex-col items-center gap-1'>
                <p>HOME</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700  hidden '   />
            </NavLink>

             <NavLink to='/collection' className='flex flex-col items-center gap-1'>
                <p>COLLECTIONS</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
            </NavLink>

             <NavLink to='/about' className='flex flex-col items-center gap-1'>
                <p>ABOUT</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
            </NavLink>

             <NavLink to='/contact' className='flex flex-col items-center gap-1'>
                <p>CONTACT</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
            </NavLink>
        </ul>

        <div className='flex gap-6 relative'>
            <img onClick={()=> setShowSearch(true)} src={assets.search} className='w-5 cursor-pointer'></img>
            
            {/* Profile Icon with Dropdown */}
            <div className="relative">
              {/* Desktop Hover Dropdown */}
              <div className="hidden sm:block relative group">
                <img 
                  onClick={handleProfileClick} 
                  src={assets.profile_icon} 
                  className="w-5 cursor-pointer" 
                  alt="Profile" 
                />
                {token && (
                  <div className="absolute right-0 pt-3 hidden group-hover:block dropdown-menu z-50">
                    <div className="flex flex-col w-52 py-4 px-4 bg-white shadow-xl rounded-xl border border-gray-100 overflow-hidden">
                      {/* ✅ Enhanced username display */}
                      {userData && (
                        <div className="pb-3 mb-2 border-b border-gray-200">
                          <p className="text-sm font-semibold text-gray-900">
                            Hey {userData.name}!
                          </p>
                        </div>
                      )}
                      <div 
                        onClick={() => handleProfileNavigation('/profile')} 
                        className="cursor-pointer hover:bg-gray-50 py-3 transition-all duration-200 text-sm text-gray-700 hover:text-gray-900"
                      >
                        <span className="font-medium">My Profile</span>
                      </div>
                      <div 
                        onClick={() => handleProfileNavigation('/orders')} 
                        className="cursor-pointer hover:bg-gray-50 py-3 transition-all duration-200 text-sm text-gray-700 hover:text-gray-900"
                      >
                        <span className="font-medium">Orders</span>
                      </div>
                      <div 
                        onClick={logout} 
                        className="cursor-pointer hover:bg-red-50 py-3 transition-all duration-200 text-sm text-gray-700 hover:text-red-600"
                      >
                        <span className="font-medium">Logout</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Mobile Click Dropdown */}
              <div className="sm:hidden relative">
                <img 
                  onClick={handleProfileClick} 
                  src={assets.profile_icon} 
                  className="w-5 cursor-pointer" 
                  alt="Profile" 
                />
                {token && profileDropdown && (
                  <div className="absolute right-0 top-9 z-50">
                    <div className="flex flex-col w-52 py-4 px-4 bg-white shadow-xl rounded-xl border border-gray-100 overflow-hidden">
                      {/* ✅ Enhanced username display */}
                      {userData && (
                        <div className="pb-3 mb-2 border-b border-gray-200">
                          <p className="text-sm font-semibold text-gray-900">
                            Hey {userData.name}!
                          </p>
                        </div>
                      )}
                      <div 
                        onClick={() => handleProfileNavigation('/profile')} 
                        className="cursor-pointer hover:bg-gray-50 py-2 transition-all duration-200 text-sm text-gray-700 hover:text-gray-900"
                      >
                        <span className="font-medium">My Profile</span>
                      </div>
                      <div 
                        onClick={() => handleProfileNavigation('/orders')} 
                        className="cursor-pointer hover:bg-gray-50 py-2 transition-all duration-200 text-sm text-gray-700 hover:text-gray-900"
                      >
                        <span className="font-medium">Orders</span>
                      </div>
                      <div 
                        onClick={logout} 
                        className="cursor-pointer hover:bg-red-50 py-2 transition-all duration-200 text-sm text-gray-700 hover:text-red-600"
                      >
                        <span className="font-medium">Logout</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <Link to='/cart' className='relative'>
              <img src={assets.cart} className='w-5'></img>
              <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[10px]">{getCartCount()}</p>
            </Link>
            
            <img src={assets.menu_icon} onClick={()=>{setVisible(true)}} className='sm:hidden w-4 cursor-pointer'></img>
        </div>
      
        {/* Mobile Menu Sidebar */}
        <div
          className={`absolute right-0 top-0 bottom-0 transition-all duration-300 ease-in-out overflow-hidden bg-white shadow-lg z-50 ${
            visible ? 'w-64' : 'w-0'
          }`}
        >
          <div className="flex flex-col text-gray-700 h-full">
            {/* Back Button */}
            <div
              className="flex items-center px-3 py-4 my-[12px] gap-3 cursor-pointer hover:bg-gray-100 transition"
              onClick={() => setVisible(false)}
            >
              <img src={assets.dropdown} alt="Back" className="h-4 rotate-180" />
              <p className="text-sm font-medium">Back</p>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-col gap-1 mt-4">
              <NavLink onClick={()=>{setVisible(false)}}
                to="/"
                className="py-3 px-6 hover:bg-gray-100 transition text-sm border-by"
              >
                Home
              </NavLink>
              <NavLink onClick={()=>{setVisible(false)}}
                to="/collection"
                className="py-3 px-6 hover:bg-gray-100 transition text-sm border-by"
              >
                Collection
              </NavLink>
              <NavLink onClick={()=>{setVisible(false)}}
                to="/about"
                className="py-3 px-6 hover:bg-gray-100 transition text-sm border-by"
              >
                About
              </NavLink>
              <NavLink onClick={()=>{setVisible(false)}}
                to="/contact"
                className="py-3 px-6 hover:bg-gray-100 transition text-sm"
              >
                Contact
              </NavLink>
            </nav>
          </div>
        </div>

        {/* Mobile Profile Dropdown Overlay */}
        {profileDropdown && (
          <div 
            className="sm:hidden fixed inset-0 z-40" 
            onClick={() => setProfileDropdown(false)}
          ></div>
        )}
    </div>
  )
}

export default NavBar


