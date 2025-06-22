import React, { useContext, useEffect,useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import ProductItem from './ProductItem';
import Title from './Title';

const RelatedProducts = ({category,subCategory}) => {
    const {products}=useContext(ShopContext);
    const [related,setRelated]=useState([]);
    const RelatedProducts=()=>{
        let productsCopy=products.slice();
        productsCopy=productsCopy.filter((item)=>item.category==category);
        productsCopy=productsCopy.filter((item)=>item.subCategory==subCategory);
        setRelated(productsCopy.slice(0,5));
        console.log(related)
    }
    useEffect(()=>{
     RelatedProducts();
    },[products])
  return (
     <div className='my-10'>
      <div className=' py-8 text-3xl'>
        <Title text1={'RELATED'} text2={'PRODUCTS'} />
        <p className='w-3/4 sm:text-xs mt-1 text-xs md:text-base text-gray-500'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
        </p>
      </div>

     <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
       {
        related.map((item,index)=>(
           <ProductItem key={index} id={item._id} name={item.name} price={item.price} image={item.image}/>
        ))
       }
       
     </div>

    </div>
  )
}

export default RelatedProducts