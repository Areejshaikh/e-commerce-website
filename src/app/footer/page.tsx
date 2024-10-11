import Link from 'next/link';
import React from 'react'

import image from '/public/asset/images/contect us.png'
import { FaWhatsapp } from "react-icons/fa";
import Image from 'next/image';
import { FiPhoneCall } from "react-icons/fi";








const Footer = () => {
  return (
    <footer className="flex bg-sky-500 p-10 font-[sans-serif] tracking-wide mt-36">
      <div>
        <h2 className='text-4xl ml-14 text-white'>MegaMart</h2>
        <ul>
          <li className=' ml-14 my-6 text-white'>
            <Link href="/">Contact us</Link>
          </li>


        </ul>

        <div className='flex text-white'>
          <p
            className='ml-14 mt-2 pr-2 text-2xl'>
            <FaWhatsapp className='' />
          </p>
          <p className='mt-2 text-white'>Whats App </p>
        </div>
        <p className='ml-20 mt-1 pr-2 text-white'>+1-2020-34567</p>
        <div className='flex text-white'>
          <p
            className='ml-14 mt-2 pr-2 text-2xl'>
            <FiPhoneCall className='' />
          </p>
          <p className='mt-2'>Call Us </p>
        </div>
        <p className='ml-20 mt-1 pr-2 text-white'>+1-2020-34567</p>
        {/* image  */}
        <div className="mt-8 ml-[3.5rem]">
          <p className='mb-4 text-white'>Download App</p>
          <Image
            src={image}  // Add valid image source
            alt="Download App"
            height={200}
            width={200}
            className='w-72  '
          />
        </div>
      </div>

      <div className="ml-20 grid  sm:grid-cols-2 gap-12  ">
        <div>
          <h4 className="text-lg font-semibold mb-6 text-white underline ">Most Popular Categories</h4>
          <ul className="space-y-4 text-white">
            <li>
              <Link href="/">Staples</Link>
            </li>
            <li>
              <Link href="/">Beverages</Link>
            </li>
            <li>
              <Link href="/">Personal Care</Link>
            </li>
            <li>
              <Link href="/">Home Care</Link>
            </li>
            <li>
              <Link href="/">Baby Care</Link>
            </li>
            <li>
              <Link href="/">Vegetables & Fruits</Link>
            </li>
            <li>
              <Link href="/">Snacks & Foods</Link>
            </li>
            <li>
              <Link href="/">Dairy & Bakery</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-6 text-white  underline">Customer Services</h4>
          <ul className="space-y-4 text-white">
            <li>
              <Link href="/">About Us</Link>
            </li>
            <li>
              <Link href="/">Terms & Conditions</Link>
            </li>
            <li>
              <Link href="/">FAQ</Link>
            </li>
            <li>
              <Link href="/">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/">E-waste Policy</Link>
            </li>
            <li>
              <Link href="/">Cancellation and Return Policy</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
