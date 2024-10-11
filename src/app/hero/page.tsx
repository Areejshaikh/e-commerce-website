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

        <div className=" ml-28 absolute lg:flex-grow md:w-1/2 lg:pr-24 
        md:pr-16 flex flex-col md:items-start md:text-left 
         md:mb-0 items-center text-center">
          <p className="mb-2 leading-relaxed text-1xl">
            Best Deal Online On Smart Waches.
          </p>
          <h1 className="text-white capitalize md:uppercase font-bold title-font sm:text-4xl text-3xl mb-2">
            smart wearable
          </h1>
          <p className="text-sm mt-2 text-white mb-8 w-full">
            Up tp 80% OFF
          </p>
        </div>

        <div className="absolute lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <Image
            className="w-96 ml-[35rem]"
            alt="hero"
            src={hero2}
          /> 
        </div>
        <div className="absolute lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <Image
            className="w-56 ml-[40rem]"
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