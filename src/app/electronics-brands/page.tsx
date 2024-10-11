import React from 'react';
import Image from 'next/image';
import Group1 from '/public/asset/images/Group 50.png';
import Group2 from '/public/asset/images/Group 51.png';
import Group3 from '/public/asset/images/Group 52.png';

const Electronic = () => {
    return (
        <div className="px-4 mt-36"> {/* Added padding for small screens */}
            <div className="flex flex-col sm:flex-row items-center mb-4"> {/* Flex for small and large screens */}
                <span className="ml-14 text-3xl text-gray-700">Top</span>
                <h3 className="sm:ml-2 text-3xl text-sky-500">Electronics Brand</h3>
            </div>
            {/* big Line - Responsive width */}
            <div className="w-80 border-b-4 ml-14 w-78 sm:w-4/2 lg:w-1/9 mx-auto sm:mx-14  border-sky-500"></div>
            {/* small Line - Responsive width */}
            <div className="w-auto mx-14 sm:w-3/4 lg:w-auto border-b-2 sm:mx-14 mb-12 border-gray-200"></div>
            {/* Image Grid - Flexbox with wrapping for responsiveness */}
            <div className="flex flex-wrap justify-center sm:justify-start gap-6 mx-4 sm:mx-14">
                <div className="w-38 sm:w-60 lg:w-[270px]">
                    <Image
                        src={Group1}
                        alt="Top Electronics Brand Image 1"
                        height={200}
                        width={200}
                        className="w-full"
                    />
                </div>
                <div className="w-38 sm:w-60 lg:w-[270px]">
                    <Image
                        src={Group2}
                        alt="Top Electronics Brand Image 2"
                        height={200}
                        width={200}
                        className="w-full"
                    />
                </div>
                <div className="w-38 sm:w-60 lg:w-[270px]">
                    <Image
                        src={Group3}
                        alt="Top Electronics Brand Image 3"
                        height={200}
                        width={200}
                        className="w-full"
                    />
                </div>
            </div>
        </div>
    );
};

export default Electronic;
