import React from 'react'

export default function ProductCard() {
  return (
    <div className="text-center cursor-pointer relative shop-items mt-4">
    <img
      src="https://plus.unsplash.com/premium_photo-1734543932716-431337d9c3c4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8"
      alt="image"
      className="object-cover h-[300px] w-[270px]"
    />
      
      <h2 className="text-gray-400 text-sm font-medium mt-5">Category</h2>
      <h1 className="text-gray-500 text-lg font-semibold font-mono mt-2">Product title to display</h1>
      <h3 className="text-gray-400 text-base font-semibold font-mono mt-2">$123.50</h3>
      <div className="mt-6 flex justify-center">
            <ul className="flex gap-5">
                <li className="px-3 py-1 cursor-pointer hover:border-gray-700 duration-150 ease-linear transition-all text-gray-500 border border-gray-300 text-sm font-medium">Xl</li>
                <li className="px-3 py-1 cursor-pointer hover:border-gray-700 duration-150 ease-linear transition-all text-gray-500 border border-gray-300 text-sm font-medium">L</li>
                <li className="px-3 py-1 cursor-pointer hover:border-gray-700 duration-150 ease-linear transition-all text-gray-500 border border-gray-300 text-sm font-medium">M</li>
                <li className="px-3 py-1 cursor-pointer hover:border-gray-700 duration-150 ease-linear transition-all text-gray-500 border border-gray-300 text-sm font-medium">S</li>
                <li className="px-3 py-1 cursor-pointer hover:border-gray-700 duration-150 ease-linear transition-all text-gray-500 border border-gray-300 text-sm font-medium">XS</li>
            </ul>
      </div>

    {/* add to cart  */}
    <div className={`absolute hidden top-3 right-3 shop-icon`}>
      <button className="text-gray-500 bg-white rounded-full px-2 py-1 ">
        <i className="fa fa-shopping-cart"></i>
      </button>
    </div>
  </div>
  )
}
