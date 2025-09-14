import { User } from '@/generated/prisma'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const UserMediaCard = ({user}:{user:User}) => {
  return (
    <div className='p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4'>
      <div className='flex justify-between items-center font-medium'>
            <span className='text-gray-500'>User Media</span>
            <Link href="/" className='text-blue-500 text-sm'>See All</Link>
        </div>
          {/* Bottom */}
          <div className='flex gap-4 justify-between flex-wrap'>
            <div className='relative w-1/5 h-24'>
                <Image src="https://images.pexels.com/photos/33564876/pexels-photo-33564876.jpeg" alt="" fill className='object-cover founded-md'/>
            </div>

            <div className='relative w-1/5 h-24'>
                <Image src="https://images.pexels.com/photos/33564876/pexels-photo-33564876.jpeg" alt="" fill className='object-cover founded-md'/>
            </div>

            <div className='relative w-1/5 h-24'>
                <Image src="https://images.pexels.com/photos/33564876/pexels-photo-33564876.jpeg" alt="" fill className='object-cover founded-md'/>
            </div>

            <div className='relative w-1/5 h-24'>
                <Image src="https://images.pexels.com/photos/33564876/pexels-photo-33564876.jpeg" alt="" fill className='object-cover founded-md'/>
            </div>

            <div className='relative w-1/5 h-24'>
                <Image src="https://images.pexels.com/photos/33564876/pexels-photo-33564876.jpeg" alt="" fill className='object-cover founded-md'/>
            </div>

            <div className='relative w-1/5 h-24'>
                <Image src="https://images.pexels.com/photos/33564876/pexels-photo-33564876.jpeg" alt="" fill className='object-cover founded-md'/>
            </div>

            <div className='relative w-1/5 h-24'>
                <Image src="https://images.pexels.com/photos/33564876/pexels-photo-33564876.jpeg" alt="" fill className='object-cover founded-md'/>
            </div>

            <div className='relative w-1/5 h-24'>
                <Image src="https://images.pexels.com/photos/33564876/pexels-photo-33564876.jpeg" alt="" fill className='object-cover founded-md'/>
            </div>
          </div>
    </div>
    
  )
}

export default UserMediaCard