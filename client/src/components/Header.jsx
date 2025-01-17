import React, { useState, useEffect, useRef } from "react";
import { Link, useParams } from "react-router-dom";
export default function Header() {
  const [tab, setTab] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { param } = useParams();
  const searchRef = useRef();

  useEffect(() => {
    if (param === "/" || param === undefined) {
      return setTab("home");
    }
    setTab(param);
  }, [param]);

  return (
    <div className=" py-9 px-3 sm:px-5 bg-black">
      <div className="max-w-[1250px] mx-auto  flex items-center justify-end bg-black lg:justify-between text-white">
        <div
          className={`absolute lg:relative bg-black transition-all ease-linear duration-200 ${
            sidebarOpen ? "translate-x-0" : "translate-x-full"
          } lg:translate-x-0 top-0 right-0 h-full z-50 px-[50px] sm:px-[100px] py-[100px] lg:py-0 lg:px-0  lg:h-fit lg:bg-transparent`}
        >
          <ul className="flex flex-col text-white lg:flex-row gap-8 items-start lg:justify-start text-nowrap">
            <li
              className={`relative navLinks ${
                tab === "home" && "active text-gray-300"
              } py-2 cursor-pointer text-base hover:text-gray-300 duration-150 transition-all ease-linear`}
              onClick={() => setTab("home")}
            >
              <Link to="/">Home</Link>
            </li>
            <li
              className={`relative navLinks ${
                tab === "shop" && "active text-gray-300"
              } py-2 cursor-pointer text-base hover:text-gray-300 duration-150 transition-all ease-linear`}
              onClick={() => setTab("shop")}
            >
              <Link to="/shop">Shop</Link>
            </li>
            <li
              className={`relative navLinks ${
                tab === "about" && "active text-gray-300"
              } py-2 cursor-pointer text-base hover:text-gray-300 duration-150 transition-all ease-linear`}
              onClick={() => setTab("about")}
            >
              <Link to="/about">About</Link>
            </li>
            <li
              className={`relative navLinks ${
                tab === "contact-us" && "active text-gray-300"
              } py-2 cursor-pointer text-base hover:text-gray-300 duration-150 transition-all ease-linear`}
              onClick={() => setTab("contact-us")}
            >
              <Link to="/contact-us">Contact Us</Link>
            </li>

            <div className="flex lg:hidden items-center gap-5">
              <div
                className={`${
                  searchOpen && "bg-white"
                } transition-all duration-200 ease-linear`}
                id="search"
              >
                <input
                  type="text"
                  placeholder="search anything..."
                  className={`w-0 transition-all duration-200 ease-linear ${
                    searchOpen && "w-[100px] sm:w-[200px]"
                  } px-3 py-2 rounded-lg outline-none bg-transparent text-black`}
                  ref={searchRef}
                />
                <button
                  className={`pl-3 text-${searchOpen ? "black" : "white"} pr-2`}
                  onClick={() => setSearchOpen(!searchOpen)}
                >
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
              </div>
              <button className="text-xl relative">
                <i className="fa-solid fa-shopping-bag"></i>
                <sup className="bg-white rounded-full px-1 absolute -top-[8px] -right-[10px]  text-xs text-black">
                  3
                </sup>
              </button>
            </div>
          </ul>
          {/* close sidebar  */}
          <button
            className="absolute lg:hidden top-5 right-5"
            onClick={() => setSidebarOpen(false)}
          >
            <i className="fa-solid fa-xmark text-3xl"></i>
          </button>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 border p-3 rounded-full">
          <h1 className="text-5xl font-bold">PB</h1>
        </div>

        <div className="items-center gap-5 hidden md:flex">
          <div
            className={`${
              searchOpen && "bg-white"
            } transition-all duration-200 ease-linear`}
            id="search"
          >
            <input
              type="text"
              placeholder="search anything..."
              className={`w-0 transition-all duration-200 ease-linear ${
                searchOpen && "w-[200px]"
              } px-3 py-2 rounded-lg outline-none bg-transparent text-black`}
              ref={searchRef}
            />
            <button
              className={`pl-3 text-${searchOpen ? "black" : "white"} pr-2`}
              onClick={() => setSearchOpen(!searchOpen)}
            >
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
          <button className="text-xl relative">
            <i className="fa-solid fa-shopping-bag"></i>
            <sup className="bg-white rounded-full px-1 absolute -top-[8px] -right-[10px]  text-xs text-black">
              3
            </sup>
          </button>
        </div>

        {/* hamburger  */}
        <div className="lg:hidden ml-8">
          <button className="text-xl" onClick={() => setSidebarOpen(true)}>
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
