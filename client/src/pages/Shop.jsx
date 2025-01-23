import React from 'react'
import ProductCard from '../components/ProductCard'

export default function Shop() {
  return (
    <div className='relative'>
    <div className='h-[500px] flex justify-center items-center'>
        <h1 className='text-4xl sm:text-6xl italic font-serif  text-white '>Shop</h1>
    </div>
   
   <div className='bg-white py-[100px] px-4'>
    <div className='max-w-[1200px] mx-auto relative'>
      <div className='flex flex-wrap gap-10 items-center justify-between'>
        <h1 className='text-base text-gray-400'>Showing all results</h1>
        <div>
    <label htmlFor="sorting">Sort by: </label>
        <select name="sorting" className='ml-3 p-1 border cursor-pointer border-gray-600'>
          <option value="">Default</option>
          <option value="pasc">Price low to high</option>
          <option value="pdsc">Price high to low</option>
          <option value="asc">Popularity</option>
        </select>
        </div>
        <div>
      <label htmlFor="category">Category: </label>
        <select name="category" className='ml-2 p-1 border cursor-pointer border-gray-600'>
          <option value="">Default</option>
          <option value="mens">Mens</option>
          <option value="womens">Womens</option>
          <option value="kids">Kids</option>
          <option value="unisex">Unisex</option>
        </select>
        </div>
      </div>

      <div className='mt-8 flex flex-wrap justify-center xl:justify-start gap-8 relative'>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
      </div>
      <div className='relative text-center'>
        <button className='mt-12 mx-auto w-min text-nowrap  text-white text-xl  bg-[#000] rounded-lg  px-4 py-2 border'>Show more</button>
      </div>
    </div>
   </div>
</div>
  )
}
