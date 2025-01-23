import {Link} from 'react-router-dom'

export default function Footer() {
  return (
    <div className='px-5 border-t border-gray-500 sm:px-10 py-[50px] bg-white'>
      <div className='max-w-[1100px] mx-auto pb-10'>
        <div className='flex flex-wrap justify-between gap-[70px]'>
          <div className='flex flex-col gap-4'>
            <h1 className='text-xl font-semibold'>Menu</h1>
            <ul className='flex flex-col gap-2'>
              <li className='text-sm font-extralight hover:text-gray-800 '><Link>Home</Link></li>
              <li className='text-sm font-extralight hover:text-gray-800 '><Link>Shop</Link></li>
              <li className='text-sm font-extralight hover:text-gray-800 '><Link>About</Link></li>
              <li className='text-sm font-extralight hover:text-gray-800 '><Link>Contact Us</Link></li>
            </ul>
          </div>
          <div className='flex flex-col gap-4'>
            <h1 className='text-xl font-semibold'>Categories</h1>
            <ul className='flex flex-col gap-2'>
              <li className='text-sm font-extralight hover:text-gray-800 '><Link>Mens</Link></li>
              <li className='text-sm font-extralight hover:text-gray-800 '><Link>Womens</Link></li>
              <li className='text-sm font-extralight hover:text-gray-800 '><Link>Casual</Link></li>
              <li className='text-sm font-extralight hover:text-gray-800 '><Link>Formal</Link></li>
            </ul>
          </div>
          <div className='flex flex-col gap-4'>
            <h1 className='text-xl font-semibold'>Resources</h1>
            <ul className='flex flex-col gap-2'>
              <li className='text-sm font-extralight hover:text-gray-800 '><Link>Contact</Link></li>
              <li className='text-sm font-extralight hover:text-gray-800 '><Link>Faqs</Link></li>
              <li className='text-sm font-extralight hover:text-gray-800 '><Link>Lice chat</Link></li>
              <li className='text-sm font-extralight hover:text-gray-800 '><Link>Returns</Link></li>
            </ul>
          </div>
        </div>
      </div>
        <div className='text-gray-500 text-xl text-center pt-[50px] border-t'>
            <h1>&copy; 2025 All rights reserved</h1>
        </div>
    </div>
  )
}
