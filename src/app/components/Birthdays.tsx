import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Birthdays = () => {
  return (
    <div className='p-4 bg-white rounded-lg shadow-md flex flex-col gap-4'>
        <div className='flex justify-between items-center font-medium'>
            <span className='text-gray-500'>Birthdays</span>
        </div>
        {/* User */}
        <div className='flex items-center justify-between'>
            
            <div className='flex items-center gap-4'>
                <Image src="https://images.pexels.com/photos/33564876/pexels-photo-33564876.jpeg" alt="" width={20} height={20} className="w-10 h-10 rounded-full object-cover"/>
                <span className="font=semibold">Mike Burton</span>
            </div>
            <div className='flex gap-3 justify-end'>
                <button className='bg-blue-500 text-white text-xs px-2 py-1 rounded-md'>Celebrate</button>
            </div>
        </div>
        {/* upcoming birthdays */}
        <div className='p-4 bg-slate-100 rounded-lg flex items-center gap-4'>
            <Image src="/gift.svg" alt="" width={24} height={24} className="w-10 h-10 rounded-full object-cover"/>
            <Link href="/" className="flex flex-col gap-1 text-xs">
                <span className='text-gray-700 font-semibold'>Upcoming Birthdays</span>
                <span className='text-gray-500'>See other 16 have upcoming birthdays</span>
            </Link>
        </div>
    </div>
  )
}

export default Birthdays