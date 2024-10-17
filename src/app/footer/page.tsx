
import Link from 'next/link';
import React from 'react';
import { FaWhatsapp } from "react-icons/fa";
import Image from 'next/image';
import { FiPhoneCall } from "react-icons/fi";
import image from '/public/asset/images/contect us.png'

const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row bg-sky-500 p-6 md:p-10 font-[sans-serif] tracking-wide mt-36">
      {/* Left section */}
      <div className="w-full md:w-1/2 lg:w-1/3">
        <h2 className='text-2xl md:text-4xl text-center md:text-left text-white mb-6'>MegaMart</h2>
        <ul>
          <li className='text-center md:text-left my-4 text-white'>
            <Link href="/">Contact us</Link>
          </li>
        </ul>

        <div className='flex justify-center md:justify-start text-white'>
          <p className='mt-2 pr-2 text-2xl'>
            <FaWhatsapp />
          </p>
          <p className='mt-2'>WhatsApp</p>
        </div>
        <p className='text-center md:text-left mt-1 pr-2 text-white'>+1-2020-34567</p>

        <div className='flex justify-center md:justify-start text-white mt-4'>
          <p className='mt-2 pr-2 text-2xl'>
            <FiPhoneCall />
          </p>
          <p className='mt-2'>Call Us</p>
        </div>
        <p className='text-center md:text-left mt-1 pr-2 text-white'>+1-2020-34567</p>

        {/* Image */}
        <div className="mt-8 flex justify-center md:justify-start">
          <p className='mb-4 text-white'>Download App</p>
        </div>
        <div className="flex justify-center md:justify-start">
          <Image
            src={image}
            alt="Download App"
            height={150}
            width={150}
            className='w-48'
          />
        </div>
      </div>

      {/* Right section */}
      <div className="w-full md:w-1/2 lg:w-2/3 mt-10 md:mt-0 grid sm:grid-cols-2 gap-12">
        <div>
          <h4 className="text-lg font-semibold mb-6 text-white underline text-center md:text-left">Most Popular Categories</h4>
          <ul className="space-y-4 text-white text-center md:text-left">
            <li><Link href="/">Staples</Link></li>
            <li><Link href="/">Beverages</Link></li>
            <li><Link href="/">Personal Care</Link></li>
            <li><Link href="/">Home Care</Link></li>
            <li><Link href="/">Baby Care</Link></li>
            <li><Link href="/">Vegetables & Fruits</Link></li>
            <li><Link href="/">Snacks & Foods</Link></li>
            <li><Link href="/">Dairy & Bakery</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-6 text-white underline text-center md:text-left">Customer Services</h4>
          <ul className="space-y-4 text-white text-center md:text-left">
            <li><Link href="/">About Us</Link></li>
            <li><Link href="/">Terms & Conditions</Link></li>
            <li><Link href="/">FAQ</Link></li>
            <li><Link href="/">Privacy Policy</Link></li>
            <li><Link href="/">E-waste Policy</Link></li>
            <li><Link href="/">Cancellation and Return Policy</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
