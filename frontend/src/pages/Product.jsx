// import React, { useContext, useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { ShopContext } from '../context/ShopContext';
// import { assets } from '../assets/assets';
// import RelatedProducts from '../components/RelatedProducts';

// const Product = () => {
//   const { productId } = useParams();
//   const { products, currency, addToCart, token } = useContext(ShopContext);
//   const [productData, setProductData] = useState(null);
//   const [image, setImage] = useState('');
//   const [size, setSize] = useState('');
//   const [loading, setLoading] = useState(true);

//   const fetchProduct = () => {
//     setLoading(true);
//     const found = products.find(item => item._id === productId);
//     if (found) {
//       setProductData(found);
//       setImage(found.image[0]);
//       setSize(''); // Reset size when product changes
//     }
//     setLoading(false);
//   };

//   const handleAddToCart = () => {
//     if (!token) {
//       return; // Simply return if no token
//     }
//     addToCart(productData._id, size);
//   };

//   useEffect(() => {
//     if (products && products.length > 0) {
//       fetchProduct();
//     }
//     // Scroll to top when productId changes
//     window.scrollTo(0, 0);
//   }, [productId, products]);

//   if (loading || !productData) {
//     return (
//       <div className="flex justify-center items-center min-h-[400px]">
//         <div className="text-gray-500">Loading...</div>
//       </div>
//     );
//   }

//   return (
//     <div className='border-t border-gray-500/40 pt-10 transition-opacity ease-in duration-500 opacity-100'>
//       <div className='flex flex-col sm:flex-row gap-12 sm:gap-12'>

//         <div className='flex flex-1 flex-col-reverse sm:flex-row gap-3'>
//           <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
//             {
//               productData.image.map((item, index) => (
//                 <img onClick={() => { setImage(item) }} src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' alt={`Product ${index + 1}`} />
//               ))
//             }
//           </div>
//           <img src={image} className='w-full sm:w-[80%]' alt={productData.name} />
//         </div>
        
//         <div className='flex-1'>
//           <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>

//           <div className='flex items-center gap-1 mt-2'>
//             <img src={assets.star_icon} alt="" className="w-3.5" />
//             <img src={assets.star_icon} alt="" className="w-3.5" />
//             <img src={assets.star_icon} alt="" className="w-3.5" />
//             <img src={assets.star_icon} alt="" className="w-3.5" />
//             <img src={assets.star_dull_icon} alt="" className="w-3.5" />
//             <p className='pl-2'>(122)</p>
//           </div>

//           <p className='mt-5 text-3xl font-medium'>{currency} {productData.price}</p>
//           <p className='mt-5 text-gray-500 md:w-4/5 sm:w-1/2'>{productData.description}</p>

//           <div className='flex flex-col gap-2 my-8'>
//             <p>Select Size</p>
//             <div className='flex gap-2'>
//               {
//                 productData.sizes.map((item, index) => (
//                   <button 
//                     key={index}
//                     onClick={() => { setSize(item) }} 
//                     className={`border py-2 px-4 bg-gray-100 ${item === size ? 'border-orange-500' : ""}`}
//                   >
//                     {item}
//                   </button>
//                 ))
//               }
//             </div>
//           </div>
          
//           <button 
//             onClick={handleAddToCart}
//             disabled={!token}
//             className={`py-3 px-8 text-sm transition-colors ${
//               token 
//                 ? 'text-white bg-black active:bg-gray-700 hover:bg-gray-800' 
//                 : 'text-gray-400 bg-gray-200 cursor-not-allowed'
//             }`}
//           >
//             {token ? 'ADD TO CART' : 'LOGIN TO ADD TO CART'}
//           </button>
          
//           <hr className='mt-4 sm:w-4/5 opacity-15' />
//           <div className='flex flex-col text-sm text-gray-500 mt-5 gap-1'>
//             <p>100% original product</p>
//             <p>Cash on Delivery is available on this product</p>
//             <p>Easy Return and exchange policy</p>
//           </div>
//         </div>
//       </div>
      
//       <div className='mt-20'>
//         <div className='flex'>
//           <b className='border border-gray-500/20 px-5 py-3 text-sm mr-3'>Description</b>
//           <p className='border border-gray-500/20 px-5 py-3 text-sm'>Reviews(122)</p>
//         </div>
//         <div className='flex flex-col gap-4 py-6 text-sm text-gray-500'>
//           <p>Discover timeless comfort and effortless style with this premium cotton shirt. Designed for daily wear, its breathable fabric keeps you cool while the tailored fit offers a modern silhouette. Whether paired with jeans or formal trousers, it's a versatile essential for every wardrobe.</p>
//           <p>This high-performance laptop combines power and portability, featuring a sleek aluminum body, lightning-fast SSD storage, and a vibrant full HD display. Ideal for professionals and creators, it offers seamless multitasking and up to 12 hours of battery life.</p>
//         </div>
//       </div>
      
//       <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
//     </div>
//   );
// };

// export default Product;


import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart, token } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');
  const [loading, setLoading] = useState(true);
  const [showCartAnimation, setShowCartAnimation] = useState(false);

  const fetchProduct = () => {
    setLoading(true);
    const found = products.find(item => item._id === productId);
    if (found) {
      setProductData(found);
      setImage(found.image[0]);
      setSize(''); // Reset size when product changes
    }
    setLoading(false);
  };

  const handleAddToCart = () => {
    if (!token) {
      return; // Simply return if no token
    }
    
    // Trigger cart animation
    setShowCartAnimation(true);
    
    // Add to cart after a short delay to show animation
    setTimeout(() => {
      addToCart(productData._id, size);
      setShowCartAnimation(false);
    }, 800);
  };

  useEffect(() => {
    if (products && products.length > 0) {
      fetchProduct();
    }
    // Scroll to top when productId changes
    window.scrollTo(0, 0);
  }, [productId, products]);

  if (loading || !productData) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="text-gray-500">Loading...</div>
      </div>
    );
  }

  return (
    <div className='border-t border-gray-500/40 pt-10 transition-opacity ease-in duration-500 opacity-100 relative'>
      {/* Cart Animation */}
      {showCartAnimation && (
        <div className="fixed inset-0 pointer-events-none z-50">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="animate-slide-to-cart text-3xl">
              🛍️
            </div>
          </div>
        </div>
      )}
      
      <style jsx>{`
        @keyframes slideToCart {
          0% {
            transform: translate(-50%, -50%) scale(1) rotate(0deg);
            opacity: 1;
          }
          25% {
            transform: translate(-20%, -60%) scale(1.3) rotate(10deg);
            opacity: 1;
          }
          50% {
            transform: translate(30%, -70%) scale(1.1) rotate(-5deg);
            opacity: 0.9;
          }
          75% {
            transform: translate(70%, -80%) scale(0.8) rotate(15deg);
            opacity: 0.6;
          }
          100% {
            transform: translate(150%, -90%) scale(0.3) rotate(45deg);
            opacity: 0;
          }
        }
        
        .animate-slide-to-cart {
          animation: slideToCart 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
      `}</style>
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
            onClick={handleAddToCart}
            disabled={!token || showCartAnimation}
            className={`py-3 px-8 text-sm transition-all duration-200 relative overflow-hidden ${
              token 
                ? showCartAnimation
                  ? 'text-white bg-green-500 transform scale-95'
                  : 'text-white bg-black active:bg-gray-700 hover:bg-gray-800' 
                : 'text-gray-400 bg-gray-200 cursor-not-allowed'
            }`}
          >
            {showCartAnimation ? (
              <span className="flex items-center justify-center gap-2">
                <span className="animate-spin">🛒</span> Adding...
              </span>
            ) : (
              token ? 'ADD TO CART' : 'LOGIN TO ADD TO CART'
            )}
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
  );
};

export default Product;

