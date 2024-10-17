import Image from 'next/image'
import React from 'react'
import hero3 from '/public/asset/images/hero.png'
import hero2 from '/public/asset/images/Mask group.png';
import hero1 from '/public/asset/images/Rectangle 5.png';

const Header = () => {
  return (
    <section  className=" text-white body-font ">

      <div className="container  flex md:flex-row flex-col items-center">
      <Image
        className=" relative opacity-100 -z-50 w-[143vh] mx-10 bg-cover object-center"
        alt="hero"
        src={hero1}
      />

        <div className=" md:ml-28 absolute lg:flex-grow md:w-1/2 lg:pr-24 
        md:pr-16 flex flex-col md:text-left 
         md:mb-0 md:items-center ">
          <p className="md:mb-2 leading-relaxed text-sm md:text-1xl">
            Best Deal Online On Smart Waches.
          </p>
          <h1 className="mb-1 text-white capitalize md:uppercase font-bold title-font text-sm  sm:text-4xl md:text-3xl md:mb-2">
            smart wearable
          </h1>
          <p className="text-xs md:mt-2 text-white mb-8 w-full">
            Up tp 80% OFF
          </p>
        </div>

        <div className="absolute lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <Image
            className="w-16  ml-60 md:w-96 md:ml-[35rem]"
            alt="hero"
            src={hero2}
          /> 
        </div>
        <div className="absolute lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <Image
            className=" ml-60 my-4 w-16 md:w-56 md:ml-[40rem]"
            alt="hero"
            src={hero3}
            width={600}
            height={600}
          /> 
        </div>

      </div>
    </section>

  )
}

export default Header