import Image from 'next/image'
import React from 'react'
import image1 from '/public/asset/images/veg 1.png'
import image2 from '/public/asset/images/veg 2.png'
import image3 from '/public/asset/images/veg 3.png'
import image4 from '/public/asset/images/fruit 4.png'
import image5 from '/public/asset/images/fruit 5.png'
import image6 from '/public/asset/images/fruit 6.png'
const Essential = () => {
    return (
        <div>
            <div className="flex flex-col sm:flex-row items-center mb-4"> {/* Flex for small and large screens */}
                <span className="mt-12 ml-14 text-3xl text-gray-700">Daily</span>
                <h3 className="mt-12 sm:ml-2 text-3xl text-sky-500">Essentials</h3>
            </div>
            {/* big Line - Responsive width */}
            <div className="w-60 border-b-4 ml-14 w-78 sm:w-4/2 lg:w-1/9 mx-auto sm:mx-14  border-sky-500"></div>
            {/* small Line - Responsive width */}
            <div className="w-auto mx-14 sm:w-3/4 lg:w-auto border-b-2 sm:mx-14 mb-12 border-gray-200"></div>


            {/* images */}
            <div className="mx-14 ">
                <div className="ml-12 md:grid md:grid-cols-6 gap-40 max-w-screen-sm">
                    <div>
                        <div className="pt-2 w-44 h-44 md:w-32 md:h-32 border-sky-500 mb-2 border bg-gray-50 text-center text-gray-700 dark:text-gray-400 rounded">
                            <Image
                                className="mx-auto h-32 md:h-28 w-28"
                                src={image1}
                                alt="Daily Essentials"
                                height={300}
                                width={300}
                            />
                        </div>
                        <h6 className='text-[12px]  md:ml-4'>DailyEssentials</h6>
                        <span className='text-sm align-center md:ml-2 font-bold text-gray-900'>UP&nbsp;to&nbsp;50%&nbsp;OFF</span>
                    </div>
                    <div>
                        <div className="pt-2 w-44 h-44 md:w-32 md:h-32 border-sky-500 mb-2 border bg-gray-50 text-center text-gray-700 dark:text-gray-400 rounded">
                            <Image
                                className="mx-auto h-32 md:h-28 w-28 "
                                src={image2}
                                alt="Vegetaibles"
                                height={200}
                                width={200}
                            />
                        </div>
                        <h6 className='md:ml-6 text-sm'>Vegetaibles </h6>
                        <span className='text-sm md:ml-2 font-bold text-gray-900'>UP&nbsp;to&nbsp;50%&nbsp;OFF</span>


                    </div>
                    <div>
                        <div className="pt-2 w-44 h-44 md:w-32 md:h-32 border-sky-500 mb-2 border bg-gray-50 text-center text-gray-700 dark:text-gray-400 rounded">
                            <Image
                                className="mx-auto h-32 md:h-28 w-28 "
                                src={image3}
                                alt="Fruits"
                                height={200}
                                width={200}
                            />
                        </div>
                        <h6 className='md:ml-10 text-sm'>Fruits</h6>
                        <span className='text-sm md:ml-2 font-bold text-gray-900'>UP&nbsp;to&nbsp;50%&nbsp;OFF</span>


                    </div>
                    <div>
                        <div className="pt-2 w-44 h-44 md:w-32 md:h-32 border-sky-500 mb-2 border bg-gray-50 text-center text-gray-700 dark:text-gray-400 rounded">
                            <Image
                                className="mx-auto h-32 pt-4 md:h-28 w-28 "
                                src={image4}
                                alt="Strowberry"
                                height={200}
                                width={200}
                            />
                        </div>
                        <h6 className=' md:ml-6 text-sm'>Strowberry</h6>
                        <span className='text-sm md:ml-2 font-bold text-gray-900'>UP&nbsp;to&nbsp;50%&nbsp;OFF</span>

                    </div>
                    <div>
                        <div className="pt-2 w-44 h-44 md:w-32 md:h-32 border-sky-500 mb-2 border bg-gray-50 text-center text-gray-700 dark:text-gray-400 rounded">
                            <Image
                                className="mx-auto h-32 pt-4 md:h-28 w-28"
                                src={image5}
                                alt="Mongo"
                                height={200}
                                width={200}
                            />
                        </div>
                        <h6 className='md;ml-10 text-sm'>Mongo</h6>
                        <span className='text-sm md:ml-2 font-bold text-gray-900'>UP&nbsp;to&nbsp;50%&nbsp;OFF</span>

                    </div>
                    <div>


                        <div className="pt-2 w-44 h-44 md:w-32 md:h-32 border-sky-500 mb-2 border bg-gray-50 text-center text-gray-700 dark:text-gray-400 rounded">
                            <Image
                                className="mx-auto h-32 md:h-28 w-28"
                                src={image6}
                                alt="Cherry"
                                height={200}
                                width={200}
                            />
                        </div>
                        <h6 className='md:ml-10 text-sm'>Cherry</h6>
                        <span className='text-sm md:ml-2 font-bold text-gray-900'>UP&nbsp;to&nbsp;50%&nbsp;OFF</span>
                    </div>

                </div >
            </div>
        </div>
    )
}

export default Essential