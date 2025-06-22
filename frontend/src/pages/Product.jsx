// import React, { useContext, useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { ShopContext } from '../context/ShopContext';
// import { assets } from '../assets/assets';
// import RelatedProducts from '../components/RelatedProducts';

// const Product = () => {
//   const { productId } = useParams();
//   const { products,currency,cartItems,addToCart } = useContext(ShopContext);
//   const [productData, setProductData] = useState(null);
//   const [image,setImage]=useState('');
//   const [size,setSize]=useState('');

//   const fetchProduct = () => {
//     const found = products.find(item => item._id === productId);
//     if (found) {
//       setProductData(found);
//       setImage(found.image[0])
//     }
//   };

//   useEffect(() => {
//     fetchProduct();
//   }, [productId]);

//   return productData? (
//     <div className='border-t-2 pt-10 transition -opacity ease-in duartion-500 opacity-100'>
//       <div className='flex flex-col sm:flex-row gap-12 sm:gap-12'>

//         <div className='flex flex-1 flex-col-reverse sm:flex-row gap-3'>
//           <div className='flex sm:flex-col oveflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
//             {
//               productData.image.map((item,index)=>(
//                 <img onClick={()=>{setImage(item)}} src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink'></img>
//               ))
//             }
//           </div>
//           <img src={image} className='w-full sm:w-[80%]'></img>
//         </div>
//         <div className='flex-1'>
//   <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>

//   <div className='flex items-center gap-1 mt-2'>
//     <img src={assets.star_icon} alt="" className="w-3.5" />
//     <img src={assets.star_icon} alt="" className="w-3.5" />
//     <img src={assets.star_icon} alt="" className="w-3.5" />
//     <img src={assets.star_icon} alt="" className="w-3.5" />
//     <img src={assets.star_dull_icon} alt="" className="w-3.5" />
//     <p className='pl-2'>(122)</p>
//   </div>

//   <p className='mt-5 text-3xl font-medium'>{currency} {productData.price}</p>
//   <p className='mt-5 text-gray-500 md:w-4/5 sm:1/2'>{productData.description}</p>

//   <div className='flex flex-col gap-2 my-8'>
//     <p>Select Size</p>
//     <div className='flex gap-2'>
//       {/* Add size options here */}
//       {
//         productData.sizes.map((item)=>(
//           <button onClick={()=>{setSize(item)}}className={`border py-2 px-4 bg-gray-100 ${item==size ? 'border-orange-500': ""}`}>{item}</button>
//         ))
//       }
//     </div>
   
//   </div>
//    <button onClick={()=>{addToCart(productData._id,size)}} className='text-white bg-black py-3 px-8 text-sm active:bg-gray-700' >ADD TO CART</button>
//    <hr className='mt-4 sm:w-4/5 opacity-15' />
//           <div className='flex flex-col text-sm text-gray-500 mt-5 gap-1'>
//             <p>100% original product</p>
//             <p>Cash on Delivery is available on this product</p>
//             <p>Easy Return and exchange policy</p>
//           </div>
//       </div>
//       </div>
//       <div className='mt-20'>
//         <div className='flex'>
//          <b className='border border-gray-500/20 px-5 py-3 text-sm mr-3'>Description</b>
//          <p className='border border-gray-500/20 px-5 py-3 text-sm'>Reviews(122)</p>
//         </div>
//         <div className='flex flex-col gap-4 py-6 text-sm text-gray-500'>
//            <p>Discover timeless comfort and effortless style with this premium cotton shirt. Designed for daily wear, its breathable fabric keeps you cool while the tailored fit offers a modern silhouette. Whether paired with jeans or formal trousers, it's a versatile essential for every wardrobe.</p>
//            <p>This high-performance laptop combines power and portability, featuring a sleek aluminum body, lightning-fast SSD storage, and a vibrant full HD display. Ideal for professionals and creators, it offers seamless multitasking and up to 12 hours of battery life.</p>
//         </div>
//       </div>
//       <RelatedProducts category={productData.category} subCategory={productData.subCategory}/>
//     </div>
//   ) : <div>{}</div>
// };

// export default Product;

import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {
  const { productId } = useParams();
  const { products, currency, cartItems, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');

  const fetchProduct = () => {
    const found = products.find(item => item._id === productId);
    if (found) {
      setProductData(found);
      setImage(found.image[0]);
      setSize(''); // Reset size when product changes
    }
  };

  useEffect(() => {
    fetchProduct();
    // Scroll to top when productId changes
    window.scrollTo(0, 0);
  }, [productId]);

  return productData ? (
    <div className='border-t border-gray-500/40 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      <div className='flex flex-col sm:flex-row gap-12 sm:gap-12'>

        <div className='flex flex-1 flex-col-reverse sm:flex-row gap-3'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {
              productData.image.map((item, index) => (
                <img onClick={() => { setImage(item) }} src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' alt={`Product ${index + 1}`} />
              ))
            }
          </div>
          <img src={image} className='w-full sm:w-[80%]' alt={productData.name} />
        </div>
        
        <div className='flex-1'>
          <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>

          <div className='flex items-center gap-1 mt-2'>
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_dull_icon} alt="" className="w-3.5" />
            <p className='pl-2'>(122)</p>
          </div>

          <p className='mt-5 text-3xl font-medium'>{currency} {productData.price}</p>
          <p className='mt-5 text-gray-500 md:w-4/5 sm:w-1/2'>{productData.description}</p>

          <div className='flex flex-col gap-2 my-8'>
            <p>Select Size</p>
            <div className='flex gap-2'>
              {
                productData.sizes.map((item, index) => (
                  <button 
                    key={index}
                    onClick={() => { setSize(item) }} 
                    className={`border py-2 px-4 bg-gray-100 ${item === size ? 'border-orange-500' : ""}`}
                  >
                    {item}
                  </button>
                ))
              }
            </div>
          </div>
          
          <button 
            onClick={() => { addToCart(productData._id, size) }} 
            className='text-white bg-black py-3 px-8 text-sm active:bg-gray-700 hover:bg-gray-800 transition-colors'
          >
            ADD TO CART
          </button>
          
          <hr className='mt-4 sm:w-4/5 opacity-15' />
          <div className='flex flex-col text-sm text-gray-500 mt-5 gap-1'>
            <p>100% original product</p>
            <p>Cash on Delivery is available on this product</p>
            <p>Easy Return and exchange policy</p>
          </div>
        </div>
      </div>
      
      <div className='mt-20'>
        <div className='flex'>
          <b className='border border-gray-500/20 px-5 py-3 text-sm mr-3'>Description</b>
          <p className='border border-gray-500/20 px-5 py-3 text-sm'>Reviews(122)</p>
        </div>
        <div className='flex flex-col gap-4 py-6 text-sm text-gray-500'>
          <p>Discover timeless comfort and effortless style with this premium cotton shirt. Designed for daily wear, its breathable fabric keeps you cool while the tailored fit offers a modern silhouette. Whether paired with jeans or formal trousers, it's a versatile essential for every wardrobe.</p>
          <p>This high-performance laptop combines power and portability, featuring a sleek aluminum body, lightning-fast SSD storage, and a vibrant full HD display. Ideal for professionals and creators, it offers seamless multitasking and up to 12 hours of battery life.</p>
        </div>
      </div>
      
      <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
    </div>
  ) : <div className="flex justify-center items-center min-h-[400px]">Loading...</div>
};

export default Product;
