import React, { useContext, useState,useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

const LatestCollection = () => {

  const { products } = useContext(ShopContext);
  const [LatestCollection,setLatstCollection]=useState([]);
  // useEffect(()=>{
  //   setLatstCollection(products.slice(0,10));
  // },[products])
  useEffect(() => {
  const latest = [...products]
    .sort((a, b) => new Date(b.date) - new Date(a.date)) // sort by newest date
    .slice(0, 10);
  setLatstCollection(latest);
}, [products]);
  return (
    <div className='my-10'>
      <div className='text-center py-5 text-3xl'>
        <Title text1={'LATEST'} text2={'COLLECTIONS'} />
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
        </p>
      </div>

     <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
       {
        LatestCollection.map((item,index)=>(
            <ProductItem key={index} id={item._id} name={item.name} image={item.image} price={item.price}/>
        ))
       }
     </div>

    </div>
  )
}

export default LatestCollection;

