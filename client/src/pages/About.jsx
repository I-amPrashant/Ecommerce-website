import React from 'react'

export default function About() {
  return (
    <div className='relative'>
        <div className='h-[500px] flex justify-center items-center'>
            <h1 className='text-4xl sm:text-6xl italic font-serif  text-white '>About Us</h1>
        </div>
        <div className='bg-white w-full py-[100px]'>
          <h1 className='text-center text-xl italic font-serif font-medium'>Our story</h1>
          <p className='mt-8 max-w-[1000px] mx-auto tracking-wider text-gray-500 text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, quas illum. Deserunt, minus impedit deleniti veritatis sunt rerum quidem laboriosam corrupti, reiciendis aperiam blanditiis alias, explicabo recusandae atque soluta aliquid.
            <br /><br />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur odit vero porro, officia quis repellendus quod reprehenderit error suscipit. Aliquid eaque corrupti laudantium. Explicabo labore molestiae, qui laboriosam ducimus aperiam?porro, officia quis repellendus quod reprehenderit error suscipit. Aliquid eaque corrupti laudantium. Explicabo labore molestiae, qui laboriosam ducimus aperiam?
          </p>
        </div>
    </div>
  )
}
