import Image from 'next/image'

import { IoCart } from "react-icons/io5";
import Component1 from '/public/asset/images/image 1.png'
import Component2 from '/public/asset/images/component  2.png'
import Component3 from '/public/asset/images/component 3.png'
import Component4 from '/public/asset/images/component 4.png'
import Component5 from '/public/asset/images/component 5.png'
import Component6 from '/public/asset/images/component 5.png'
const Smartphones = () => {
  return (

    <div className="font-[sans-serif] py-4 mt-20 mx-auto lg:max-w-6xl max-w-lg md:max-w-full">
      <div className="flex flex-col sm:flex-row items-center mb-4"> {/* Flex for small and large screens */}
        <span className="ml-14 text-2xl text-gray-700">Grab The Best Deal On</span>
        <h3 className="sm:ml-2 text-2xl text-sky-500">SmartPhones</h3>
      </div>
      {/* big Line - Responsive width */}
      <div className="w-96 border-b-4 ml-14 w-78 sm:w-4/2 lg:w-1/9 mx-auto sm:mx-14  border-sky-500"></div>
      {/* small Line - Responsive width */}
      <div className="w-auto mx-14 sm:w-3/4 lg:w-auto border-b-2 sm:mx-14 mb-12 border-gray-200"></div>

      {/* start Cart Section */}
      <div className="mx-14  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-gray-200 rounded-xl cursor-pointer hover:scale-[1.03] transition-all relative overflow-hidden">
          <div className="p-6">
            <div className="bg-sky-500 text-lg text-white w-20 h-20 flex items-center justify-center rounded-es-2xl cursor-pointer absolute top-0 right-0">
              <p> 56% <p> OFF</p></p>
            </div>
            <div className="w-2/3 h-[220px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
              <Image
                src={Component1}
                alt="Product 1"
                className="h-full w-full object-contain"
                width={800}
                height={800}
              />
            </div>
          </div>
          <div className="text-center bg-gray-100 p-6">
            <h3 className="text-lg font-bold text-gray-800">Galaxy $22 Ultra</h3>
            <h4 className="text-lg text-gray-800 font-bold mt-6">
              $32999 <del className="text-gray-400 ml-2 font-medium">$74999</del>
            </h4>
            <button
              type="button"
              className="w-full flex items-center justify-center gap-3 mt-6 px-6 py-3 bg-yellow-400 text-base text-gray-800 font-semibold rounded-xl"
            >
              <IoCart />
              Add to cart
            </button>
          </div>
        </div>
        <div className="bg-gray-200 rounded-xl cursor-pointer hover:scale-[1.03] transition-all relative overflow-hidden">
          <div className="p-4">

            <div className="bg-sky-500 text-lg text-white w-20 h-20 flex items-center justify-center rounded-es-2xl cursor-pointer absolute top-0 right-0">
              <h6> 56% <p> OFF</p>
              </h6>
            </div>
            <div className="w-2/3 h-[220px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
              <Image
                src={Component2}
                alt="Product 2"
                className="h-full w-full object-contain"
                width={800}
                height={800}
              />
            </div>
          </div>
          <div className="text-center bg-gray-100 p-6">
            <h3 className="text-lg font-bold text-gray-800">Galaxy M13 (4GB | 64GB)</h3>
            <h4 className="text-lg text-gray-800 font-bold mt-6">
              $10499 <del className="text-gray-400 ml-2 font-medium">$14999</del>
            </h4>
            <button
              type="button"
              className="w-full flex items-center justify-center gap-3 mt-6 px-6 py-3 bg-yellow-400 text-base text-gray-800 font-semibold rounded-xl"
            >
              <IoCart />
              Add to cart
            </button>
          </div>
        </div>
        <div className="bg-gray-200 rounded-xl cursor-pointer hover:scale-[1.03] transition-all relative overflow-hidden">
          <div className="p-6">
            <div className="bg-sky-500 text-lg text-white w-20 h-20 flex items-center justify-center rounded-es-2xl cursor-pointer absolute top-0 right-0">
              <p> 56% <p> OFF</p></p>
            </div>
            <div className="w-2/3 h-[220px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
              <Image
                src={Component3}
                alt="Product 3"
                className="h-full w-full object-contain"
                width={800}
                height={800}
              />
            </div>
          </div>
          <div className="text-center bg-gray-100 p-6">
            <h3 className="text-lg font-bold text-gray-800">
              Galaxy M33 (4GB | 64GB)
            </h3>
            <h4 className="text-lg text-gray-800 font-bold mt-6">
              $16999 <del className="text-gray-400 ml-2 font-medium">$24999</del>
            </h4>
            <button
              type="button"
              className="w-full flex items-center justify-center gap-3 mt-6 px-6 py-3 bg-yellow-400 text-base text-gray-800 font-semibold rounded-xl"
            >
              <IoCart />
              Add to cart
            </button>
          </div>
        </div>
        <div className="bg-gray-200 rounded-xl cursor-pointer hover:scale-[1.03] transition-all relative overflow-hidden">
          <div className="p-6">
            <div className="bg-sky-500 text-lg text-white w-20 h-20 flex items-center justify-center rounded-es-2xl cursor-pointer absolute top-0 right-0">
              <p> 56% <p> OFF</p></p>
            </div>
            <div className="w-2/3 h-[220px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
              <Image
                src={Component4}
                alt="Product 3"
                className="h-full w-full object-contain"
                width={800}
                height={800}
              />
            </div>
          </div>
          <div className="text-center bg-gray-100 p-6">
            <h3 className="text-lg font-bold text-gray-800">
              Galaxy M33 (4GB | 64GB)
            </h3>
            <h4 className="text-lg text-gray-800 font-bold mt-6">
              $16999 <del className="text-gray-400 ml-2 font-medium">$24999</del>
            </h4>
            <button
              type="button"
              className="w-full flex items-center justify-center gap-3 mt-6 px-6 py-3 bg-yellow-400 text-base text-gray-800 font-semibold rounded-xl"
            >
              <IoCart />
              Add to cart
            </button>
          </div>
        </div>
        <div className="bg-gray-200 rounded-xl cursor-pointer hover:scale-[1.03] transition-all relative overflow-hidden">
          <div className="p-6">
            <div className="bg-sky-500 text-lg text-white w-20 h-20 flex items-center justify-center rounded-es-2xl cursor-pointer absolute top-0 right-0">
              <p> 56% <p> OFF</p></p>
            </div>
            <div className="w-2/3 h-[220px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
              <Image
                src={Component5}
                alt="Product 3"
                className="h-full w-full object-contain"
                width={800}
                height={800}
              />
            </div>
          </div>
          <div className="text-center bg-gray-100 p-6">
            <h3 className="text-lg font-bold text-gray-800"> Galaxy M53 (4GB | 64GB)</h3>
            <h4 className="text-lg text-gray-800 font-bold mt-6">
              $31999<del className="text-gray-400 ml-2 font-medium">$40999</del>
            </h4>
            <button
              type="button"
              className="w-full flex items-center justify-center gap-3 mt-6 px-6 py-3 bg-yellow-400 text-base text-gray-800 font-semibold rounded-xl"
            >
              <IoCart />
              Add to cart
            </button>
          </div>
        </div>
        <div className="bg-gray-200 rounded-xl cursor-pointer hover:scale-[1.03] transition-all relative overflow-hidden">
          <div className="p-6">
            <div className="bg-sky-500 text-lg text-white w-20 h-20 flex items-center justify-center rounded-es-2xl cursor-pointer absolute top-0 right-0">
              <p> 56% <p> OFF</p></p>
            </div>
            <div className="w-2/3 h-[220px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
              <Image
                src={Component6}
                alt="Product 3"
                className="h-full w-full object-contain"
                width={800}
                height={800}
              />
            </div>
          </div>
          <div className="text-center bg-gray-100 p-6">
            <h3 className="text-lg font-bold text-gray-800">
              Galaxy S22 Ultra
            </h3>
            <h4 className="text-lg text-gray-800 font-bold mt-6">
              $67999 <del className="text-gray-400 ml-2 font-medium">$85999</del>
            </h4>
            <button
              type="button"
              className="w-full flex items-center justify-center gap-3 mt-6 px-6 py-3 bg-yellow-400 text-base text-gray-800 font-semibold rounded-xl"
            >
              <IoCart />
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>


  )
}

export default Smartphones