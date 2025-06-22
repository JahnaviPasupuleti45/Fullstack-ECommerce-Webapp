import React, { useContext,useEffect,useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const Collection = () => {
  const {products,search,showSearch}=useContext(ShopContext);
  const [showFilter,setShowFilter]=useState(false);
  const [filteredProducts,setFilterProducts]=useState([]);
  const [category,setCategory]=useState([]);
  const [subCategory,setSubCategory]=useState([]);
  const [sortType,setSortType]=useState('relevant');
  const toggleCategory=(e)=>{
      if(category.includes(e.target.value)){
        setCategory(prev=>prev.filter(item=>item !==e.target.value))
      }
      else{
        setCategory(prev=>[...prev,e.target.value]);
      }
  }

  const toggleSubCategory =(e)=>{
    if(subCategory.includes(e.target.value)){
        setSubCategory(prev=>prev.filter(item=>item !==e.target.value))
      }
      else{
        setSubCategory(prev=>[...prev,e.target.value]);
      }
  }

 const applyFilters = () => {
  let productsCopy = products.slice();

  // Search filter
  if (search && showSearch) {
    productsCopy = productsCopy.filter(item =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
  }

  // Category filter
  if (category.length > 0) {
    productsCopy = productsCopy.filter(item => category.includes(item.category));
  }

  // Subcategory filter
  if (subCategory.length > 0) {
    productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory));
  }

  setFilterProducts(productsCopy);
};

  const sortProducts=()=>{
         let fpCopy=filteredProducts.slice();
         switch(sortType){
          case "low-high":
              setFilterProducts(fpCopy.sort((a,b)=>(a.price-b.price)));
              break;
          case "high-low":
              setFilterProducts(fpCopy.sort((a,b)=>(b.price-a.price)));
              break;
          default :
              applyFilters();
              break;
         }
         }
  
  
  useEffect(()=>{
    applyFilters();
  },[category,subCategory,search,showSearch,products])
  useEffect(()=>{
    sortProducts();
  },[sortType])

    return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t border-gray-500/30'>


      <div className='min-w-60 sm:mt-[8px]'>
        <p onClick={()=>{setShowFilter(!showFilter)}} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS
          <img src={assets.dropdown} className={`sm:hidden h-3 ${showFilter ? 'rotate-90' : ''}` }></img>
        </p>
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden sm:block' }`}>
          <p>CATEGORIES</p>
          <div className='flex flex-col gap-2 mt-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'Men'} onChange={toggleCategory}/>Men
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'Women'} onChange={toggleCategory}/>Women
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'Kids'} onChange={toggleCategory}/>Kids
            </p>
          </div>
        </div>


         <div className={`border border-gray-300 pl-5 py-3 my-3 ${showFilter ? '' : 'hidden sm:block' }`}>
          <p>TYPES</p>
          <div className='flex flex-col gap-2 mt-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'Topwear'} onChange={toggleSubCategory}/>Topwear
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'Bottomwear'} onChange={toggleSubCategory}/>Bottomwear
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'Winterwear'} onChange={toggleSubCategory}/>Winterwear
            </p>
          </div>
        </div>
      </div>
      <div className='flex-1'>
       <div className='flex justify-between text-base sm:text-2xl mb-4'>
        <Title text1={"ALL"} text2={"COLLECTIONS"}/>
        <select onChange={(e)=>{setSortType(e.target.value)}} className='border-2 border-gray-300 text-sm px-2 py-[5px] my-3 '>
          <option value="relevant">Sort By:Relevant</option>
          <option value="low-high">Sort By:Low to High</option>
          <option value="high-low">Sort By:High to Low</option>
        </select>
       </div>
       <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
           {
            filteredProducts.map((item,index)=>(
              <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image}/>
            ))
           }
       </div>

      </div>

    </div>
  )
}

export default Collection