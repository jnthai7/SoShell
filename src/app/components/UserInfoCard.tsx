import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const UserInfoCard = ({userId}:{userId:string}) => {
  return (
    <div className='p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4'>
        <div className='flex justify-between items-center font-medium'>
            <span className='text-gray-500'>User Information</span>
            <Link href="/" className='text-blue-500 text-sm'>See All</Link>
        </div>
        {/* bottom */}
        <div className='flex flex-col gap-4 text-gray-500'>
            <div className='flex items-center gap-2'>
                <span className='text-xl text-black'>John Doe</span>
                <span className='text-sm'>@james</span>
            </div>
            <p>
                randoms stuff lmao whahdsakdsajdlaskjdlasjdlkasjdlksajdl.
                dasljkdaslkdjasldkasjdlsadjsadlkdjalsdd.
            </p>
            <div className='flex items-center gap-2'>
               <Image src="/map.svg" alt="" width={16} height={16}/>
               <span>Living in <b>Denver</b></span> 
            </div>

            <div className='flex items-center gap-2'>
               <Image src="/education.svg" alt="" width={16} height={16}/>
               <span>Graduated from <b>UC Davis</b></span> 
            </div>

            <div className='flex items-center gap-2'>
               <Image src="/job.svg" alt="" width={16} height={16}/>
               <span>Works at <b>Tesla</b></span> 
            </div>
            <div className='flex items-center justify-between'>
                <div className='flex gap-1 items-center'>
                    <Image src="/link.svg" alt="" width={16} height={16}/>
                    <Link href="https://justint.vercel.app/" className="text-blue-500 font-medium">
                        justint.app
                    </Link>
                </div>
                <div className='flex gap-1 items-center'>
                    <Image src="/date.svg" alt="" width={16} height={16} />
                    <span>Joined November 2024</span>

                </div>
            </div>
            <button className='bg-blue-500 text-white text-sm rounded-md p-2'>Follow</button>
            <span className='text-red-400 self-end text-xs cursor-pointer'>Block User</span>
        </div>
    </div>
    
  )
}

export default UserInfoCard