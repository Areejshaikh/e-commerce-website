import React from 'react'
import Image from 'next/image'
import image1 from '/public/asset/images/image 1.png'
import image2 from '/public/asset/images/image 2.png'
import image3 from '/public/asset/images/image 3.png'
import image4 from '/public/asset/images/image 4.png'
import image5 from '/public/asset/images/hero.png'
import image6 from '/public/asset/images/image 6.png'
import image7 from '/public/asset/images/image 7.png'
const Topcategoies = () => {
    return (
        <div>
            <div className="flex flex-col sm:flex-row items-center mb-4"> {/* Flex for small and large screens */}
                <span className="ml-14 text-3xl text-gray-700">Shop From</span>
                <h3 className="sm:ml-2 text-3xl text-sky-500">Top Categories</h3>
            </div>
            {/* big Line - Responsive width */}
            <div className="w-96 border-b-4 ml-14 w-78 sm:w-4/2 lg:w-1/9 mx-auto sm:mx-14  border-sky-500"></div>
            {/* small Line - Responsive width */}
            <div className="w-auto mx-14 sm:w-3/4 lg:w-auto border-b-2 sm:mx-14 mb-12 border-gray-200"></div>
            <div className='flex mx-12'>
                <div className='w-28 h-28 rounded-full border mx-auto border-sky-500 bg-slate-100'>
                    <Image
                        src={image1}
                        alt="product"
                        width={200}
                        height={200}
                        className="w-16 h-28 p-2 mx-auto" />
                    <p className='ml-8 mt-4'>Mobail</p>
                </div>
                <div className='w-28 h-28 rounded-full border mx-auto bg-slate-100'>
                    <Image
                        src={image2}
                        alt="product"
                        width={200}
                        height={200}
                        className="w-16 h-28 p-2 mx-auto" />
                    <p className='ml-8 mt-4'>Cosmetics</p>
                </div>
                <div className='w-28 h-28 rounded-full border mx-auto bg-slate-100'>
                    <Image
                        src={image3}
                        alt="product"
                        width={200}
                        height={200}
                        className="w-28 h-30 p-2 mx-auto" />
                    <p className='ml-8 mt-4'>Cosmetics</p>
                </div>
                <div className='w-28 h-28 rounded-full border mx-auto bg-slate-100'>
                    <Image
                        src={image4}
                        alt="product"
                        width={200}
                        height={200}
                        className="w-40 h-28 p-1 mx-auto" />
                    <p className='ml-8 mt-4'>Furniture</p>
                </div>
                <div className='w-28 h-28 rounded-full border mx-auto bg-slate-100'>
                    <Image
                        src={image5}
                        alt="product"
                        width={200}
                        height={200}
                        className="w-28 h-28 p-2 mx-auto" />
                    <p className='ml-8 mt-4'>Watches</p>
                </div>
                <div className='w-28 h-28 rounded-full border mx-auto bg-slate-100'>
                    <Image
                        src={image6}
                        alt="product"
                        width={200}
                        height={200}
                        className="w-40 h-28 p-1 mx-auto" />
                    <p className='ml-8 mt-4'>Dcore</p>
                </div>

                <div className='w-28 h-28 rounded-full border mx-auto bg-slate-100'>
                    <Image
                        src={image7}
                        alt="product"
                        width={200}
                        height={200}
                        className="w-36 h-28 p-1 mx-auto" />
                    <p className='ml-4 mt-4'>Accessories</p>
                </div>
            </div>
        </div>
    )
}

export default Topcategoies

























