import React from 'react'

export default function ContactUs() {
  return (
    <div className='relative'>
    <div className='h-[500px] flex justify-center items-center'>
        <h1 className='text-4xl sm:text-6xl italic font-serif  text-white '>Contact Us</h1>
    </div>
    <div className='py-[100px] bg-white'>
        <h2 className='font-semibold  uppercase text-xs text-center'>get in touch</h2>
        <p className='text-center  font-medium tracking-wider italic max-w-[500px] mx-auto mt-6 text-gray-700 text-xl'>We value the connection with our community and are here to assist in any way we can. Feel free to reach out through the following channels:</p>

        <div className='flex max-w-[1200px] gap-24 md:gap-0 py-[100px] mx-auto flex-wrap'>
          <div className='flex flex-col gap-5 w-full max-w-[600px] md:w-1/2 px-3'>
            <input type="text" placeholder='Name' className='text-sm border border-gray-400 py-2 px-4 outline-none'/>
            <input type="text" placeholder='Email' className='text-sm border border-gray-400 py-2 px-4 outline-none' />
            <textarea placeholder='Message' className='text-sm border border-gray-400 py-2 min-h-[200px] px-4 outline-none'></textarea>
            <button className='w-min py-2 px-6 border
            border-gray-600 bg-[#fff] hover:bg-[#000] hover:text-[#fff] text-[#000] duration-150 ease-linear transition-all'>Send</button>
          </div>

          <div className='flex flex-col gap-7 w-full max-w-[600px] md:w-1/2 px-5'>
            <div className='flex flex-col gap-2'>
              <h1 className='text-xl font-normal'>Phone</h1>
              <p className='italic text-gray-500'>(+91) 123 456 7890</p>
            </div>
            <div className='flex flex-col gap-2'>
              <h1 className='text-xl font-normal'>Email</h1>
              <p className='italic text-gray-500'>mail@gmail.com</p>
            </div>
            <div className='flex flex-col gap-2'>
              <h1 className='text-xl font-normal'>Address</h1>
              <p className='italic text-gray-500'>123 Kalanki, khasibazar</p>
            </div>
            <div className='flex  gap-2'>
              <h1 className='text-xl font-normal'>Follow Us:</h1>
              <ul className='flex items-center gap-6 ml-3'>
                <li className='text-2xl hover:text-[#000] duration-150 ease-linear transition-all'><i className='fa-brands fa-facebook'></i></li>
                <li className='text-2xl hover:text-[#000] duration-150 ease-linear transition-all'><i className='fa-brands fa-instagram'></i></li>
                <li className='text-2xl hover:text-[#000] duration-150 ease-linear transition-all'><i className='fa-brands fa-twitter'></i></li>
              </ul>
            </div>
          </div>
        </div>
    </div>


</div>
  )
}
