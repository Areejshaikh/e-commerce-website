import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa";
import { HiOutlineBars3BottomLeft } from "react-icons/hi2";
import { CiDiscount1 } from "react-icons/ci";
import { FaTractor } from "react-icons/fa6";

import { HiOutlineBars3 } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";
import { IoPerson } from "react-icons/io5";
import { IoCart } from "react-icons/io5";


const Nav = () => {
    return (
        <div>
            {/* First Navber */}
            <nav className=" p-2 bg-slate-100">
                <div className="container mx-auto flex items-center justify-between">
                    {/* Left Side - Logo */}
                    <div className="flex-shrink-0 flex flex-wrap ml-12">
                        <p className='text-sx text-gray-400 my-0 font-bold'>Welcome to Worldwide Megamart</p>
                    </div>

                    {/* Right Side - Buttons */}
                    <div className="flex space-x-2 mr-14">

                        <FaLocationDot className='ml-4 text-sky-500' />
                        <p className='text-xs ml-4 text-gray-400'>Deliver to <span className='text-sx text-gray-900'>423651</span></p>
                        <div className=" border-gray-200 h-6 border"></div>

                        <FaTractor className='ml-4 text-sky-500' />
                        <p className='text-xs ml-4 text-gray-400'>Track Your Order</p>


                        <div className=" border-gray-200 h-6 border"></div>
                        <CiDiscount1 className='text-sky-600' />
                        <p className='text-xs text-gray-400'>All Offers</p>
                    </div>
                </div>
            </nav>
            {/* Second Navber */}
            <nav className=" p-4">
                <div className="container mx-auto flex items-center justify-between">
                    {/* Left Side - Logo */}
                    <div className="flex-shrink-0 flex flex-wrap ml-6">
                        <HiOutlineBars3BottomLeft className='mx-2 mt-1 rounded-sm text-2xl text-sky-600 border bg-sky-100' />
                        <p className='text-3xl text-sky-500 my-0 font-bold'>Mega Mart</p>
                    </div>

                    {/* Center - Search Input */}
                    <div className="flex-1 mx-4 ml-20 relative">
                        <CiSearch className='absolute ml-2 mt-2 text-2xl text-sky-600 left-0' />
                        <HiOutlineBars3 className='absolute right-0 mt-2 mr-10 text-2xl text-sky-600' />

                        <input
                            type="text"
                            placeholder="Search essentials, groceries and more..."
                            className="w-[390px] pl-10  py-2 rounded bg-sky-100 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    {/* Right Side - Buttons */}
                    <div className="flex space-x-1 mr-12">

                        <IoPerson className='ml-4 mt-1 text-sky-600' />
                        <p className=' ml-4'>Sign Up/Sign In</p>


                        <div className=" border-gray-200 h-6 border"></div>
                        <IoCart className='text-sky-600 mt-1' />
                        <p>Cart</p>
                    </div>
                </div>
            </nav>

            {/* small Line - Responsive width */}
            <div className="w-auto  sm:w-3/4 lg:w-auto border-b-2 sm:mx-14 my-2 border-gray-200"></div>
            <div className='mx-10'>
                {/* 1st */}
                <button
                    className="rounded-full m-1 text-black bg-sky-500 hover:bg-sky-500 
            focus:ring-4 focus:outline-none focus:ring-blue-300 
            font-medium  text-xs px-[10px] py-1 text-center 
            inline-flex items-center dark:bg-sky-600 
            dark:hover:bg-sky-700 dark:focus:ring-sky-800"
                    type="button">Groceries
                    <FaAngleDown className='text-sky-800' />
                </button>
                {/* 2nd */}
                <button
                    className="m-1 text-black bg-sky-50 hover:bg-sky-500 
            focus:ring-4 focus:outline-none focus:ring-blue-300 
            font-medium rounded-full text-xs px-[10px] py-1 text-center 
            inline-flex items-center dark:bg-sky-600 
            dark:hover:bg-sky-700 dark:focus:ring-sky-800"
                    type="button">Premium Fruits
                    <FaAngleDown className='text-sky-800' />
                </button>

                {/* 3rd */}
                <button
                    className="m-1 text-black bg-sky-50 hover:bg-sky-500 
            focus:ring-4 focus:outline-none focus:ring-blue-300 
            font-medium rounded-full text-xs px-[10px] py-1 text-center 
            inline-flex items-center dark:bg-sky-600 
            dark:hover:bg-sky-700 dark:focus:ring-sky-800"
                    type="button">Home & Kitchen
                    <FaAngleDown className='text-sky-800' />
                </button>

                {/* 4th */}
                <button
                    className="m-1 text-black bg-sky-50 hover:bg-sky-500 
            focus:ring-4 focus:outline-none focus:ring-blue-300 
            font-medium rounded-full text-xs px-[10px] py-1 text-center 
            inline-flex items-center dark:bg-sky-600 
            dark:hover:bg-sky-700 dark:focus:ring-sky-800"
                    type="button">Fashion
                    <FaAngleDown className='text-sky-800' />
                </button>

                {/* 5th */}
                <button
                    className="m-1 text-black bg-sky-50 hover:bg-sky-500 
            focus:ring-4 focus:outline-none focus:ring-blue-300 
            font-medium rounded-full text-xs px-[10px] py-1 text-center 
            inline-flex items-center dark:bg-sky-600 
            dark:hover:bg-sky-700 dark:focus:ring-sky-800"
                    type="button">Electronics
                    <FaAngleDown className='text-sky-800' />
                </button>

                {/* 6th */}
                <button
                    className="m-1 text-black bg-sky-50 hover:bg-sky-500 
            focus:ring-4 focus:outline-none focus:ring-blue-300 
            font-medium rounded-full text-xs px-[10px] py-1 text-center 
            inline-flex items-center dark:bg-sky-600 
            dark:hover:bg-sky-700 dark:focus:ring-sky-800"
                    type="button">Beauty
                    <FaAngleDown className='text-sky-800' />
                </button>

                {/* 7th */}
                <button
                    className="m-1 text-black bg-sky-50 hover:bg-sky-500 
            focus:ring-4 focus:outline-none focus:ring-blue-300 
            font-medium rounded-full text-xs px-[10px] py-1 text-center 
            inline-flex items-center dark:bg-sky-600 
            dark:hover:bg-sky-700 dark:focus:ring-sky-800"
                    type="button">Home Improvment
                    <FaAngleDown className='text-sky-800' />
                </button>

                {/* 8th */}
                <button
                    className="m-1 text-black bg-sky-50 hover:bg-sky-500 
            focus:ring-4 focus:outline-none focus:ring-blue-300 
            font-medium rounded-full text-xs px-[10px] py-1 text-center 
            inline-flex items-center dark:bg-sky-600 
            dark:hover:bg-sky-700 dark:focus:ring-sky-800"
                    type="button">Sports, Toys & Luggage
                    <FaAngleDown className='text-sky-800' />
                </button>
            </div>
            <div className="w-auto mx-14 sm:w-3/4 lg:w-auto border-b-2 sm:mx-14 my-2 border-gray-200"></div>

        </div>
    )
}

export default Nav