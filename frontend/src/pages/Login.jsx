// import { useContext, useEffect, useState } from 'react';
// import { ShopContext } from '../context/ShopContext';
// import axios from 'axios';
// import { toast } from 'react-toastify';

// const Login = () => {
//   const [currentState, setCurrentState] = useState('Login');
//   const { token, setToken, navigate, backendUrl } = useContext(ShopContext);

//   const [name, setName] = useState('');
//   const [password, setPassword] = useState('');
//   const [email, setEmail] = useState('');

//   const onSubmitHandler = async (e) => {
//     e.preventDefault();

//     try {
//       if (currentState === "Sign Up") {
//         const response = await axios.post(backendUrl + '/api/user/register', {
//           name,
//           email,
//           password
//         });

//         if (response.data.success) {
//           setToken(response.data.token);
//           localStorage.setItem('token', response.data.token);
//           console.log(response.data) 
       
//         } else {
//           toast.error(response.data.message || "Signup failed");
//         }

//       } else {
//         const response=await axios.post(backendUrl+"/api/user/login",{email,password});
//         if(response.data.success){
//           navigate('/');
//           setToken(response.data.token);
//           console.log(response.data.token);
//           localStorage.setItem('token',response.data.token);
          
//         }else{
//           toast.error(response.data.message)
//         }
//       }

//     } catch (err) {
//       console.error(err);
//       toast.error("❌ Something went wrong");
//     }
//   };
//      useEffect(()=>{
//          if(token){
//           navigate('/')
//          }
//      },[token])
//   return (
//     <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-sm'>
//       <div className='inline-flex items-center gap-2 mb-2 mt-10'>
//         <p className='prata-regular text-3xl'>{currentState}</p>
//         <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
//       </div>

//       {currentState === 'Login' ? null : (
//         <input
//           onChange={(e) => setName(e.target.value)}
//           value={name}
//           type="text"
//           className='w-full px-3 py-2 border border-gray-800'
//           placeholder="Name"
//         />
//       )}
//       <input
//         onChange={(e) => setEmail(e.target.value)}
//         value={email}
//         type="email"
//         className='w-full px-3 py-2 border border-gray-800'
//         placeholder="Email"
//       />
//       <input
//         onChange={(e) => setPassword(e.target.value)}
//         value={password}
//         type="password"
//         className='w-full px-3 py-2 border border-gray-800'
//         placeholder="Password"
//       />

//       <div className='w-full flex justify-between text-sm mt-[-8px]'>
//         <p className='cursor-pointer'>Forgot your password?</p>

//         {currentState === 'Login' ? (
//           <p onClick={() => setCurrentState('Sign Up')} className='cursor-pointer'>Create Account</p>
//         ) : (
//           <p onClick={() => setCurrentState('Login')} className='cursor-pointer'>Login</p>
//         )}
//       </div>
//       <button type='submit' className='bg-black text-white px-8 py-3 w-full'>
//         {currentState === 'Sign Up' ? "Sign Up" : "Sign In"}
//       </button>
//     </form>
//   );
// };

// export default Login;


import { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = () => {
  const [currentState, setCurrentState] = useState('Login');
  const { token, setToken, navigate, backendUrl, setUserData } = useContext(ShopContext);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      if (currentState === "Sign Up") {
        const response = await axios.post(backendUrl + '/api/user/register', {
          name,
          email,
          password
        });
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem('token', response.data.token);
          
          // ✅ Store user data
          if (response.data.user) {
            setUserData(response.data.user);
            localStorage.setItem('userData', JSON.stringify(response.data.user));
          }
          
          console.log(response.data);
        } else {
          toast.error(response.data.message || "Signup failed");
        }
      } else {
        const response = await axios.post(backendUrl + "/api/user/login", { email, password });
        if (response.data.success) {
          navigate('/');
          setToken(response.data.token);
          localStorage.setItem('token', response.data.token);
          
          // ✅ Store user data
          if (response.data.user) {
            setUserData(response.data.user);
            localStorage.setItem('userData', JSON.stringify(response.data.user));
          }
          
          console.log(response.data.token);
        } else {
          toast.error(response.data.message);
        }
      }
    } catch (err) {
      console.error(err);
      toast.error("❌ Something went wrong");
    }
  };

  useEffect(() => {
    if (token) {
      navigate('/');
    }
  }, [token]);

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-sm'>
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className='prata-regular text-3xl'>{currentState}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
      </div>
      {currentState === 'Login' ? null : (
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          className='w-full px-3 py-2 border border-gray-800'
          placeholder="Name"
        />
      )}
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="email"
        className='w-full px-3 py-2 border border-gray-800'
        placeholder="Email"
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="password"
        className='w-full px-3 py-2 border border-gray-800'
        placeholder="Password"
      />
      <div className='w-full flex justify-between text-sm mt-[-8px]'>
        <p className='cursor-pointer'>Forgot your password?</p>
        {currentState === 'Login' ? (
          <p onClick={() => setCurrentState('Sign Up')} className='cursor-pointer'>Create Account</p>
        ) : (
          <p onClick={() => setCurrentState('Login')} className='cursor-pointer'>Login</p>
        )}
      </div>
      <button type='submit' className='bg-black text-white px-8 py-3 w-full'>
        {currentState === 'Sign Up' ? "Sign Up" : "Sign In"}
      </button>
    </form>
  );
};

export default Login;
