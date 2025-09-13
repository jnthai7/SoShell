import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const Advertisements = ({size}: { size: "sm" | "md" | "lg"}) => {
  return (
    <div className='p-4 bg-white rounded-lg shadow-md'>
        {/* Top */}
        <div className='flex items-center justify-between text-gray-500 font-medium'>
            <span>Sponsored Ads</span>
            <Image src="/more.svg" alt="" width={16} height={16}/>
        </div>
        {/* bottom */}
        <div className={`flex flex-col mt-4 ${size === "sm" ? "gap-2" : "gap-4"}`}>
            <div className={`relative w-full ${size === "sm" ? "h-24" : size === "md" ? "h-36" : "h-48"}`}>
                <Image src="https://images.pexels.com/photos/33260934/pexels-photo-33260934.jpeg" alt="" fill className='rounded-lg object-cover'/>
            </div>
            <div className='flex items-center gap-4'>

                <Image src="https://images.pexels.com/photos/33260934/pexels-photo-33260934.jpeg" alt="" width={24} height={24} className='rounded-full w-6 h-6 object-cover'/>
                <span className='text-blue-500 font-medium'>BigChef Lounge</span>
            </div>
            <p className={size === "sm" ? "text-xs" : "text-sm"}>
                {size === "sm" ? "Rain-speckled glass blurred the neon lights outside, painting the night in shifting colors."
                : size === "md" ? "Rain-speckled glass blurred the neon lights outside, painting the night in shifting colors. Rain-speckled glass blurred the neon lights outside, painting the night in shifting colors."
                : "Rain-speckled glass blurred the neon lights outside, painting the night in shifting colors. Rain-speckled glass blurred the neon lights outside, painting the night in shifting colors. Rain-speckled glass blurred the neon lights outside, painting the night in shifting colors."
                }
            </p>
            <button className='bg-gray-200 text-gray-500 p-2 text-xs rounded-lg'>Learn More</button>
        </div>
    </div>
  )
}

export default Advertisements