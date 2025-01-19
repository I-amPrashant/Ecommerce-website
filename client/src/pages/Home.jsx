import { useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
export default function Home() {
  return (
    <div className="relative">
      {/* hero section */}
      <div className="min-h-screen flex justify-center items-center text-5xl px-3 py-[100px]">
        <div className="max-w-[700px] mx-auto text-white text-center">
          <h3 className="text-base tracking-wider font-medium">
            Casual and Everyday
          </h3>
          <h1 className="font-serif text-5xl md:text-[80px] italic md:leading-[80px] font-medium">
            Effortlessly blend comfort & style!
          </h1>
          <p className="text-base mt-6">
            Effortlessly blend comfort and style with our Casual & Everyday
            collection, featuring cozy sweaters, versatile denim, laid-back
            tees, and relaxed-fit joggers for your everyday adventures
          </p>
          <Link
            to="/shop"
            className="text-base mt-6 bg-[#000] text-[#fff] py-2 px-6 inline-block hover:bg-[#fff] hover:text-[#000] border
        duration-150 ease-linear transition-all"
          >
            <button className="outline-none border-none py-3 px-6">
              View Collection
            </button>
          </Link>
        </div>
      </div>

      <div className="bg-white w-full">

        {/* most popular  */}
        <div className="max-w-[1400px] mx-auto px-3 pt-[80px] pb-[100px]">
          <h1 className=" text-center italic font-serif text-4xl font-semibold my-12">Most Popular</h1>
          <div className="flex flex-wrap justify-center gap-8 relative ">
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
          </div>
        </div>

        {/* newest product */}
        <div className="max-w-[1400px] mx-auto px-3 pb-[100px]">
          <h1 className=" text-center italic font-serif text-4xl font-semibold my-12">Newest Product</h1>
          <div className="flex flex-wrap justify-center gap-8 relative">
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
          </div>
        </div>


      {/* testimonial  */}
      <div className="w-full h-[700px] px-3 py-[20px]  flex  justify-center items-center" id='testimonial'>
        <div className="max-w-[800px] text-center items-center flex flex-col text-[#fff]">
            <div className="flex gap-4">
              <span className="text-xl text-yellow-400"><i className="fa fa-star"></i></span>
              <span className="text-xl text-yellow-400"><i className="fa fa-star"></i></span>
              <span className="text-xl text-yellow-400"><i className="fa fa-star"></i></span>
              <span className="text-xl text-yellow-400"><i className="fa fa-star"></i></span>
              <span className="text-xl text-yellow-400"><i className="fa fa-star"></i></span>
            </div>
            <h1 className="text-3xl font-semibold mt-5 font-serif italic tracking-wider">"PB is my fashion sanctuary! The curated collection effortlessly blends chic trends with timeless elegance, making every purchase a delightful discovery. The quality of their pieces is unmatched, and I appreciate the brand's commitment to sustainable fashion. What truly sets PB apart is their customer-centric approach."</h1>
            <h2 className=" mt-5 tracking-wider font-thin">Mr. Prashant Bartaula</h2>
        </div>
      </div>
      </div>
    </div>
  );
}
