import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const FriendRequests = () => {
  return (
    <div className='p-4 bg-white rounded-lg shadow-md flex flex-col gap-4'>
        {/* Top */}
        <div className='flex justify-between items-center font-medium'>
            <span className='text-gray-500'>Friend Requests</span>
            <Link href="/" className='text-blue-500 text-sm'>See All</Link>
        </div>
        {/* User */}
        <div className='flex items-center justify-between'>
            
            <div className='flex items-center gap-4'>
                <Image src="https://images.pexels.com/photos/33564876/pexels-photo-33564876.jpeg" alt="" width={20} height={20} className="w-10 h-10 rounded-full object-cover"/>
                <span className="font=semibold">Mike Burton</span>
            </div>
            <div className='flex gap-3 justify-end'>
                <Image src="/accept.svg" alt="" width={20} height={20} className="cursor-pointer"/>
                <Image src="/reject.svg" alt="" width={20} height={20} className="cursor-pointer"/>
            </div>
        </div>

        <div className='flex items-center justify-between'>
            
            <div className='flex items-center gap-4'>
                <Image src="https://images.pexels.com/photos/33564876/pexels-photo-33564876.jpeg" alt="" width={20} height={20} className="w-10 h-10 rounded-full object-cover"/>
                <span>Mike Burton</span>
            </div>
            <div className='flex gap-3 justify-end'>
                <Image src="/accept.svg" alt="" width={20} height={20} className="cursor-pointer"/>
                <Image src="/reject.svg" alt="" width={20} height={20} className="cursor-pointer"/>
            </div>
        </div>

        <div className='flex items-center justify-between'>
            
            <div className='flex items-center gap-4'>
                <Image src="https://images.pexels.com/photos/33564876/pexels-photo-33564876.jpeg" alt="" width={20} height={20} className="w-10 h-10 rounded-full object-cover"/>
                <span>Mike Burton</span>
            </div>
            <div className='flex gap-3 justify-end'>
                <Image src="/accept.svg" alt="" width={20} height={20} className="cursor-pointer"/>
                <Image src="/reject.svg" alt="" width={20} height={20} className="cursor-pointer"/>
            </div>
        </div>
    </div>
  )
}

export default FriendRequests