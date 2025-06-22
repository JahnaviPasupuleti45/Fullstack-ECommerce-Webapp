// import React, { useState,useEffect,useContext } from 'react'
// import { ShopContext } from '../context/ShopContext'
// import Title from '../components/Title'
// import axios from 'axios'

// const Orders = () => {
//   const {backendUrl,token,currency}=useContext(ShopContext)
//   const [orderData,setOrderData]=useState([]);
//   const loadOrderData=async()=>{
//     try{
//       if(!token){
//         return null;
//       }
//       const response=await axios.post(backendUrl+"/api/order/userorders",{},{headers:{token}})
//       if(response.data.success){
//       let allOrderItems=[];
//       response.data.orders.map((order)=>{
//            order.items.map((item)=>{
//                 item['status']=order.status;
//                 item['payment']=order.payment;
//                 item['paymentMethod']=order.paymentMethod;
//                 item['date']=order.date;
//                 allOrderItems.push(item);
//            })
//       })
//       console.log(allOrderItems)
//       setOrderData(allOrderItems.reverse())
//     }
//     }catch(err){

//     }
//   }

//   useEffect(()=>{
//      loadOrderData();
//   },[token,loadOrderData])
//   return (
//     <div className='border-t border-gray-500/40 pt-8'>
//      <div className='text-2xl mb-3'>
//       <Title text1={"MY"} text2={"ORDERS"}/>
//      </div>
//      <div>
//       {
//         orderData.map((item,index)=>(
//            <div key={index} className='py-4 border-t border-gray-500/40 border-b text-gray flex flex-col  md:flex-row md:items-center md:justify-between gap-4'>
//             <div className='flex items-start text-sm gap-6'>
//               <img className='w-16 h-23 sm:w-20' src={item.image[0]}/>
//               <div>
//                 <p className='
//                 sm:text-base font-medium'>{item.name}</p>
//                 <div className='flex items-center gap-3 mt-1 text-base text-gray-500'>
//                   <p className='text-lg'>{currency}{item.price}</p>
//                   <p className='mt-[0.5px]'>Quantity : {item.quantity}</p>
//                   <p> Size :{item.size}</p>
//                 </div>
//                 <p className='mt-[2px]'>Date : <span className='text-gray-500'>{new Date(item.date).toDateString()}</span></p>
//                 <p className='mt-1'>Payment : <span className='text-gray-500'>{item.paymentMethod}</span></p>
//               </div>
//             </div>
//             <div className='md:w-1/2 flex justify-between'>
//                   <div className='flex items-center gap-2'>
//                     <p className='min-w-2 h-2 rounded-full bg-green-500'></p>
//                     <p>{item.status}</p>
//                   </div>
//                   <div>
//                     <button onSubmit={loadOrderData()} className='border px-4 py-2 text-sm font-medium rounded-sm '>Track Order</button>
//                   </div>
//             </div>
//            </div>
//         ))
//       }
//      </div>
//     </div>
//   )
// }

// export default Orders


// import React, { useState,useEffect,useContext } from 'react'
// import { ShopContext } from '../context/ShopContext'
// import Title from '../components/Title'
// import axios from 'axios'

// const Orders = () => {
//   const {backendUrl,token,currency}=useContext(ShopContext)
//   const [orderData,setOrderData]=useState([]);
  
//   const loadOrderData=async()=>{
//     try{
//       if(!token){
//         return null;
//       }
//       const response=await axios.post(backendUrl+"/api/order/userorders",{},{headers:{token}})
//       if(response.data.success){
//       let allOrderItems=[];
//       response.data.orders.map((order)=>{
//            order.items.map((item)=>{
//                 item['status']=order.status;
//                 item['payment']=order.payment;
//                 item['paymentMethod']=order.paymentMethod;
//                 item['date']=order.date;
//                 allOrderItems.push(item);
//            })
//       })
//       console.log(allOrderItems)
//       setOrderData(allOrderItems.reverse())
//     }
//     }catch(err){
//     }
//   }
  
//   useEffect(()=>{
//      loadOrderData();
//   },[token])
  
//   // Auto refresh every 5 seconds
//   useEffect(()=>{
//     if(!token) return;
    
//     const interval = setInterval(() => {
//       loadOrderData();
//     }, 5000000); // 5 seconds
    
//     return () => clearInterval(interval);
//   },[token])
  
//   return (
//     <div className='border-t border-gray-500/40 pt-8'>
//      <div className='text-2xl mb-3'>
//       <Title text1={"MY"} text2={"ORDERS"}/>
//      </div>
//      <div>
//       {
//         orderData.map((item,index)=>(
//            <div key={index} className='py-4 border-t border-gray-500/40 border-b text-gray flex flex-col  md:flex-row md:items-center md:justify-between gap-4'>
//             <div className='flex items-start text-sm gap-6'>
//               <img className='w-16 h-23 sm:w-20' src={item.image[0]}/>
//               <div>
//                 <p className='
//                 sm:text-base font-medium'>{item.name}</p>
//                 <div className='flex items-center gap-3 mt-1 text-base text-gray-500'>
//                   <p className='text-lg'>{currency}{item.price}</p>
//                   <p className='mt-[0.5px]'>Quantity : {item.quantity}</p>
//                   <p> Size :{item.size}</p>
//                 </div>
//                 <p className='mt-[2px]'>Date : <span className='text-gray-500'>{new Date(item.date).toDateString()}</span></p>
//                 <p className='mt-1'>Payment : <span className='text-gray-500'>{item.paymentMethod}</span></p>
//               </div>
//             </div>
//             <div className='md:w-1/2 flex justify-between'>
//                   <div className='flex items-center gap-2'>
//                     <p className='min-w-2 h-2 rounded-full bg-green-500'></p>
//                     <p>{item.status}</p>
//                   </div>
//                   <div>
//                     <button onClick={loadOrderData} className='border px-4 py-2 text-sm font-medium rounded-sm '>Track Order</button>
//                   </div>
//             </div>
//            </div>
//         ))
//       }
//      </div>
//     </div>
//   )
// }

// export default Orders


import React, { useState,useEffect,useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'
import axios from 'axios'

const Orders = () => {
  const {backendUrl,token,currency}=useContext(ShopContext)
  const [orderData,setOrderData]=useState([]);
  const [isTracking,setIsTracking]=useState(false);

  const loadOrderData=async()=>{
    try{
      if(!token){
        return null;
      }
      const response=await axios.post(backendUrl+"/api/order/userorders",{},{headers:{token}})
      if(response.data.success){
      let allOrderItems=[];
      response.data.orders.map((order)=>{
           order.items.map((item)=>{
                item['status']=order.status;
                item['payment']=order.payment;
                item['paymentMethod']=order.paymentMethod;
                item['date']=order.date;
                allOrderItems.push(item);
           })
      })
      console.log(allOrderItems)
      setOrderData(allOrderItems.reverse())
    }
    }catch(err){
    }
  }

  const handleTrackOrder = async () => {
    setIsTracking(true);
    await loadOrderData();
    setTimeout(() => {
      setIsTracking(false);
    }, 1500);
  }

  useEffect(()=>{
     loadOrderData();
  },[token])

  return (
    <div className='border-t border-gray-500/40 pt-8'>
     <div className='text-2xl mb-3'>
      <Title text1={"MY"} text2={"ORDERS"}/>
     </div>
     <div>
      {
        orderData.map((item,index)=>(
           <div key={index} className='py-4 border-t border-gray-500/40 border-b text-gray flex flex-col  md:flex-row md:items-center md:justify-between gap-4'>
            <div className='flex items-start text-sm gap-6'>
              <img className='w-16 h-23 sm:w-20' src={item.image[0]}/>
              <div>
                <p className='                sm:text-base font-medium'>{item.name}</p>
                <div className='flex items-center gap-3 mt-1 text-base text-gray-500'>
                  <p className='text-lg'>{currency}{item.price}</p>
                  <p className='mt-[0.5px]'>Quantity : {item.quantity}</p>
                  <p> Size :{item.size}</p>
                </div>
                <p className='mt-[2px]'>Date : <span className='text-gray-500'>{new Date(item.date).toDateString()}</span></p>
                <p className='mt-1'>Payment : <span className='text-gray-500'>{item.paymentMethod}</span></p>
              </div>
            </div>
            <div className='md:w-1/2 flex justify-between'>
                  <div className='flex items-center gap-2'>
                    <p className='min-w-2 h-2 rounded-full bg-green-500'></p>
                    <p>{item.status}</p>
                  </div>
                  <div>
                    <button onClick={handleTrackOrder} className='border px-4 py-2 text-sm font-medium rounded-sm' disabled={isTracking}>
                      {isTracking ? 'Tracking...' : 'Track Order'}
                    </button>
                  </div>
            </div>
           </div>
        ))
      }
     </div>
    </div>
  )
}

export default Orders


