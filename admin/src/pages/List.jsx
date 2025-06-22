// import axios from "axios";
// import React, { useState, useEffect } from "react";
// import { backend_url } from "../App";
// import { toast } from "react-toastify";
// import { currency } from "../App";
// const List = ({token}) => {
//   const [list, setList] = useState([]);
//   const fetchProducts = async () => {
//     try {
//       const response = axios.get(backend_url + "/api/product/list");
//       if ((await response).data.success) {
//         setList((await response).data.products);
//       } else {
//         toast.error((await response).data.message);
//       }
//     } catch (err) {
//       console.log(err.message);
//       toast.error(err.message);
//     }
//   };

//     const removeProduct=async(id)=>{
//     try{
//     const response= await axios.post(backend_url+"/api/product/remove",{id},{headers:{token}})
//     if(await response.data.success){
//        toast.success((await response).data.message);
//        await fetchProducts();
//     }else{
//         toast.error((await response).data.message)
//     }
//     }catch(err){
//         console.log(err.message)
//         toast.error(err.message)
//     }
//   }
//   useEffect(() => {
//     fetchProducts();
//   }, []);
//   return (
//     <>
//       <p className="mb-2">ALL PRODUCTS</p>
//       <div className="flex flex-col gap-2">
//         <div className="hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 border border-gray-500/30 bg-gray-50 text-sm">
//           <b>Image</b>
//           <b>Name</b>
//           <b>Category</b>
//           <b>Price</b>
//           <b className="text-center">Action</b>
//         </div>
//         {list.map((item, index) => (
//           <div className="grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-2 py-1 px-2 border border-gray-300 text-sm p-2">
//             <img className="w-12" src={item.image[0]} alt="" />
//             <p>{item.name}</p>
//             <p>{item.category}</p>
//             <p>
//               {currency}
//               {item.price}
//             </p>
//             <p onClick ={()=>{removeProduct(item._id)}} className="text-right md:text-center cursor-pointer text-lg">
//               X
//             </p>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default List;




// import axios from "axios";
// import React, { useState, useEffect } from "react";
// import { backend_url } from "../App";
// import { toast } from "react-toastify";
// import { currency } from "../App";

// const List = ({ token }) => {
//   const [list, setList] = useState([]);
//   const [showModal, setShowModal] = useState(false);
//   const [selectedItem, setSelectedItem] = useState(null);

//   const fetchProducts = async () => {
//     try {
//       const response = axios.get(backend_url + "/api/product/list");
//       if ((await response).data.success) {
//         setList((await response).data.products);
//       } else {
//         toast.error((await response).data.message);
//       }
//     } catch (err) {
//       console.log(err.message);
//       toast.error(err.message);
//     }
//   };

//   const removeProduct = async (id) => {
//     try {
//       const response = await axios.post(
//         backend_url + "/api/product/remove",
//         { id },
//         { headers: { token } }
//       );
//       if (await response.data.success) {
//         toast.success((await response).data.message);
//         await fetchProducts();
//       } else {
//         toast.error((await response).data.message);
//       }
//     } catch (err) {
//       console.log(err.message);
//       toast.error(err.message);
//     }
//   };

//   // Long press handlers
//   let longPressTimer = null;

//   const handleStart = (item) => {
//     longPressTimer = setTimeout(() => {
//       setSelectedItem(item);
//       setShowModal(true);
//     }, 500); // 500ms long press
//   };

//   const handleEnd = () => {
//     if (longPressTimer) {
//       clearTimeout(longPressTimer);
//       longPressTimer = null;
//     }
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   return (
//     <>
//       <p className="mb-4 text-xl font-semibold">ALL PRODUCTS</p>
//       <div className="flex flex-col gap-2">
//         {/* Desktop Header */}
//         <div className="hidden md:grid grid-cols-[100px_2fr_150px_120px_80px] items-center py-3 px-4 border bg-gray-100 text-sm font-medium">
//           <b>Image</b>
//           <b>Name</b>
//           <b>Category</b>
//           <b>Price</b>
//           <b className="text-center">Action</b>
//         </div>

//         {/* Products List */}
//         {list.map((item, index) => (
//           <div key={item._id || index}>
//             {/* Desktop Layout */}
//             <div className="hidden md:grid grid-cols-[100px_2fr_150px_120px_80px] items-center py-3 px-4 border border-gray-300 text-sm hover:bg-gray-50">
//               <img className="w-12 h-12 object-cover rounded border" src={item.image[0]} alt={item.name} />
//               <p className="truncate pr-2">{item.name}</p>
//               <p className="text-center">
//                 <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">
//                   {item.category}
//                 </span>
//               </p>
//               <p className="font-medium">
//                 {currency}{item.price}
//               </p>
//               <div className="text-center">
//                 <button
//                   onClick={() => removeProduct(item._id)}
//                   className="w-6 h-6 bg-red-100 hover:bg-red-200 text-red-600 rounded text-sm font-bold"
//                 >
//                   ×
//                 </button>
//               </div>
//             </div>

//             {/* Mobile Layout */}
//             <div 
//               className="md:hidden border border-gray-300 p-2 hover:bg-gray-50"
//               onTouchStart={() => handleStart(item)}
//               onTouchEnd={handleEnd}
//               onTouchCancel={handleEnd}
//               onMouseDown={() => handleStart(item)}
//               onMouseUp={handleEnd}
//               onMouseLeave={handleEnd}
//             >
//               <div className="flex items-center justify-center gap-2">
//                 {/* Image */}
//                 <img className="w-12 h-13 object-cover rounded border flex-shrink-0 mr-5" src={item.image[0]} alt={item.name} />
                
//                 {/* Name & Category Column */}
//                 <div className="flex-1 min-w-0 pl-3">
//                   <p className="font-medium text-sm leading-tight truncate pl-1">{item.name}</p>
//                   <span className="px-1.5 py-0.5 bg-blue-100 text-blue-800 rounded text-xs">
//                     {item.category}
//                   </span>
//                 </div>
                
//                 {/* Price */}
//                 <div className="flex-shrink-0 pr-3 text-center">
//                   <p className="font-semibold text-sm">
//                     {currency}{item.price}
//                   </p>
//                 </div>
                
//                 {/* Delete Button */}
//                 <button
//                   onClick={() => removeProduct(item._id)}
//                   className="w-7 h-7 bg-red-100 hover:bg-red-200 text-red-600 rounded ml-5 text-sm font-bold flex-shrink-0"
//                 >
//                   ×
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Modal for Long Press */}
//       {showModal && selectedItem && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//           <div className="bg-white rounded-lg p-6 max-w-sm w-full">
//             <div className="flex justify-between items-start mb-4">
//               <h3 className="text-lg font-semibold">Product Details</h3>
//               <button
//                 onClick={() => setShowModal(false)}
//                 className="text-gray-500 hover:text-gray-700"
//               >
//                 ×
//               </button>
//             </div>
            
//             <div className="space-y-3">
//               <div className="flex justify-center mb-4">
//                 <img 
//                   className="w-20 h-20 object-cover rounded border" 
//                   src={selectedItem.image[0]} 
//                   alt={selectedItem.name} 
//                 />
//               </div>
              
//               <div>
//                 <p className="text-sm text-gray-600">Name:</p>
//                 <p className="font-medium">{selectedItem.name}</p>
//               </div>
              
//               <div>
//                 <p className="text-sm text-gray-600">Category:</p>
//                 <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">
//                   {selectedItem.category}
//                 </span>
//               </div>
              
//               <div>
//                 <p className="text-sm text-gray-600">Price:</p>
//                 <p className="font-semibold text-lg">
//                   {currency}{selectedItem.price}
//                 </p>
//               </div>
              
//               <button
//                 onClick={() => {
//                   removeProduct(selectedItem._id);
//                   setShowModal(false);
//                 }}
//                 className="w-full mt-4 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
//               >
//                 Remove Product
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default List;


import axios from "axios";
import React, { useState, useEffect } from "react";
import { backend_url } from "../App";
import { toast } from "react-toastify";
import { currency } from "../App";

const List = ({ token }) => {
  const [list, setList] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const fetchProducts = async () => {
    try {
      const response = axios.get(backend_url + "/api/product/list");
      if ((await response).data.success) {
        setList((await response).data.products);
      } else {
        toast.error((await response).data.message);
      }
    } catch (err) {
      console.log(err.message);
      toast.error(err.message);
    }
  };

  const removeProduct = async (id) => {
    try {
      const response = await axios.post(
        backend_url + "/api/product/remove",
        { id },
        { headers: { token } }
      );
      if (await response.data.success) {
        toast.success((await response).data.message);
        await fetchProducts();
      } else {
        toast.error((await response).data.message);
      }
    } catch (err) {
      console.log(err.message);
      toast.error(err.message);
    }
  };

  // Long press handlers
  let longPressTimer = null;

  const handleStart = (item) => {
    longPressTimer = setTimeout(() => {
      setSelectedItem(item);
      setShowModal(true);
    }, 500); // 500ms long press
  };

  const handleEnd = () => {
    if (longPressTimer) {
      clearTimeout(longPressTimer);
      longPressTimer = null;
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <p className="mb-4 text-xl font-semibold">ALL PRODUCTS</p>
      <div className="flex flex-col gap-2">
        {/* Desktop Header */}
        <div className="hidden md:grid grid-cols-[100px_2fr_150px_120px_80px] items-center py-3 px-4 border bg-gray-100 text-sm font-medium">
          <b>Image</b>
          <b>Name</b>
          <b className="text-center">Category</b>
          <b>Price</b>
          <b className="text-center">Action</b>
        </div>

        {/* Products List */}
        {list.map((item, index) => (
          <div key={item._id || index}>
            {/* Desktop Layout */}
            <div className="hidden md:grid grid-cols-[100px_2fr_150px_120px_80px] items-center py-3 px-4 border border-gray-300 text-sm hover:bg-gray-50">
              <img className="w-12 h-12 object-cover rounded border" src={item.image[0]} alt={item.name} />
              <p className="truncate pr-2">{item.name}</p>
              <p className="text-center">
                <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">
                  {item.category}
                </span>
              </p>
              <p className="font-medium">
                {currency}{item.price}
              </p>
              <div className="text-center">
                <button
                  onClick={() => removeProduct(item._id)}
                  className="w-6 h-6 bg-red-100 hover:bg-red-200 text-red-600 rounded text-sm font-bold"
                >
                  ×
                </button>
              </div>
            </div>

            {/* Mobile Layout */}
            <div 
              className="md:hidden border border-gray-300 p-2 hover:bg-gray-50"
              onTouchStart={() => handleStart(item)}
              onTouchEnd={handleEnd}
              onTouchCancel={handleEnd}
              onMouseDown={() => handleStart(item)}
              onMouseUp={handleEnd}
              onMouseLeave={handleEnd}
            >
              <div className="flex items-center justify-center gap-2">
                {/* Image */}
                <img className="w-12 h-13 object-cover rounded border flex-shrink-0 mr-5" src={item.image[0]} alt={item.name} />
                
                {/* Name & Category Column */}
                <div className="flex-1 min-w-0 pl-3">
                  <p className="font-medium text-sm leading-tight truncate pl-1">{item.name}</p>
                  <span className="px-1.5 py-0.5 bg-blue-100 text-blue-800 rounded text-xs">
                    {item.category}
                  </span>
                </div>
                
                {/* Price */}
                <div className="flex-shrink-0 pr-3 text-center">
                  <p className="font-semibold text-sm">
                    {currency}{item.price}
                  </p>
                </div>
                
                {/* Delete Button */}
                <button
                  onClick={() => removeProduct(item._id)}
                  className="w-7 h-7 bg-red-100 hover:bg-red-200 text-red-600 rounded ml-5 text-sm font-bold flex-shrink-0"
                >
                  ×
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for Long Press */}
      {showModal && selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-semibold">Product Details</h3>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ×
              </button>
            </div>
            
            <div className="space-y-3 max-h-96 overflow-y-auto">
              <div className="flex justify-center mb-4">
                <img 
                  className="w-20 h-20 object-cover rounded border" 
                  src={selectedItem.image[0]} 
                  alt={selectedItem.name} 
                />
              </div>
              
              <div>
                <p className="text-sm text-gray-600">Name:</p>
                <p className="font-medium">{selectedItem.name}</p>
              </div>
              
              <div>
                <p className="text-sm text-gray-600">Description:</p>
                <p className="font-medium text-sm">{selectedItem.description || 'No description available'}</p>
              </div>
              
              <div>
                <p className="text-sm text-gray-600">Price:</p>
                <p className="font-semibold text-lg">
                  {currency}{selectedItem.price}
                </p>
              </div>
              
              <div>
                <p className="text-sm text-gray-600">Category:</p>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">
                  {selectedItem.category}
                </span>
              </div>
              
              <div>
                <p className="text-sm text-gray-600">Sub Category:</p>
                <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">
                  {selectedItem.subCategory || 'N/A'}
                </span>
              </div>
              
              <div>
                <p className="text-sm text-gray-600">Available Sizes:</p>
                <div className="flex flex-wrap gap-1 mt-1">
                  {selectedItem.sizes && selectedItem.sizes.length > 0 ? (
                    selectedItem.sizes.map((size, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-100 text-gray-800 rounded text-xs">
                        {size}
                      </span>
                    ))
                  ) : (
                    <span className="text-xs text-gray-500">No sizes available</span>
                  )}
                </div>
              </div>
              
              <div>
                <p className="text-sm text-gray-600">Bestseller:</p>
                <span className={`px-2 py-1 rounded text-xs ${
                  selectedItem.bestseller 
                    ? 'bg-yellow-100 text-yellow-800' 
                    : 'bg-gray-100 text-gray-600'
                }`}>
                  {selectedItem.bestseller ? 'Yes' : 'No'}
                </span>
              </div>
              
              {selectedItem.date && (
                <div>
                  <p className="text-sm text-gray-600">Added Date:</p>
                  <p className="font-medium text-sm">
                    {new Date(selectedItem.date).toLocaleDateString()}
                  </p>
                </div>
              )}
              
              <button
                onClick={() => {
                  removeProduct(selectedItem._id);
                  setShowModal(false);
                }}
                className="w-full mt-4 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
              >
                Remove Product
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default List;