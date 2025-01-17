import React, {useState, useEffect } from "react"
import {Link, useParams} from "react-router-dom"
export default function Header(){
    const [tab, setTab] = useState('')
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const {param}=useParams();

    useEffect(()=>{
        if(param==='/' || param===undefined){
            return setTab('home')
        }
          setTab(param);
    }, [param])

  return (
    <div className="relative py-7 px-3 sm:px-5 bg-black">
        <div className="relative max-w-[1250px] mx-auto">
            <div>
                <ul className="flex gap-12 items-center text-white">
                    <li className={`relative navLinks ${tab==='home' && 'active text-gray-300'} py-2 cursor-pointer text-base hover:text-gray-300 duration-150 transition-all ease-linear`} onClick={()=>setTab('home')}><Link to='/'>Home</Link></li>
                    <li className={`relative navLinks ${tab==='shop' && 'active text-gray-300'} py-2 cursor-pointer text-base hover:text-gray-300 duration-150 transition-all ease-linear`} onClick={()=>setTab('shop')}><Link to='/shop'>Shop</Link></li>
                    <li className={`relative navLinks ${tab==='about' && 'active text-gray-300'} py-2 cursor-pointer text-base hover:text-gray-300 duration-150 transition-all ease-linear`} onClick={()=>setTab('about')}><Link to='/about'>About</Link></li>
                    <li className={`relative navLinks ${tab==='contact-us' && 'active text-gray-300'} py-2 cursor-pointer text-base hover:text-gray-300 duration-150 transition-all ease-linear`} onClick={()=>setTab('contact-us')}><Link to='/contact-us'>Contact Us</Link></li>
                </ul>
            </div>
        </div>
    </div>
  )
}
