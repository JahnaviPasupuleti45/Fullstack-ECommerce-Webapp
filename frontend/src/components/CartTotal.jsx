import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';

const CartTotal = () => {
  const {currency,delivery_fee,getCartAmount}=useContext(ShopContext);
  return (
    <div className='w-full'>
      <div className='text-2xl'>
        <Title text1={"CARD"} text2={"TOTAL"}/>
      </div>
      <div className='flex flex-col gap-2 mt-2 text-sm'>
         <div className='flex justify-between'>
          <p>Subtotal</p>
          <p>{currency}{getCartAmount()}</p>
         </div>
         <hr/>
         <div className='flex justify-between'>
          <p>Shopping Fee</p>
          <p>{currency}{getCartAmount()===0 ? 0 : delivery_fee}</p>
         </div>
         <hr/>
         <div className='flex justify-between'>
          <b>Total</b>
          <b>{currency}{getCartAmount()===0 ? 0 : getCartAmount()+ Number(delivery_fee)}</b>
         </div>
      </div>
    </div>
  )
}

export default CartTotal

// import React, { useContext } from 'react'
// import { ShopContext } from '../context/ShopContext'
// import Title from './Title';

// const CartTotal = () => {
//   const { currency, deliveryfee, getCartAmount } = useContext(ShopContext);
//   const amount = Number(getCartAmount()) || 0; // Ensure number, fallback to 0
//   const shippingFee = amount === 0 ? 0 : deliveryfee;
//   const total = amount + shippingFee;

//   return (
//     <div className='w-full'>
//       <div className='text-2xl'>
//         <Title text1={"CART"} text2={"TOTAL"} />
//       </div>
//       <div className='flex flex-col gap-2 mt-2 text-sm'>
//         <div className='flex justify-between'>
//           <p>Subtotal</p>
//           <p>{currency}{amount}</p>
//         </div>
//         <hr />
//         <div className='flex justify-between'>
//           <p>Shipping Fee</p>
//           <p>{currency}{shippingFee}</p>
//         </div>
//         <hr />
//         <div className='flex justify-between'>
//           <b>Total</b>
//           <b>{currency}{total}</b>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default CartTotal
