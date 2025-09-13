import React from 'react'
import ProfileCard from './ProfileCard'
import Link from 'next/link'
import Image from 'next/image'
import Advertisements from './Advertisements'

const LeftMenu = ({type}:{type:"home" | "profile"}) => {
  return (
    <div className='flex flex-col gap-6'>
      {type==="home" && <ProfileCard/>}
      <div className='p-4 bg-white rounded-lg shadow-md text-sm text-gray-500 flex flex-col gap-2'>
        <Link href="/" className='flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100'>
        <Image src="/post.svg" alt="" width={20} height={20}/>
        <span>My Posts</span>
        </Link>
        <hr className='border-t-1 border-gray-50 w-36 self-center'/>

        <Link href="/" className='flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100'>
        <Image src="/activity.svg" alt="" width={20} height={20}/>
        <span>Activity</span>
        </Link>
        <hr className='border-t-1 border-gray-50 w-36 self-center'/>

        <Link href="/" className='flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100'>
        <Image src="/market.svg" alt="" width={20} height={20}/>
        <span>Marketplace</span>
        </Link>
        <hr className='border-t-1 border-gray-50 w-36 self-center'/>

        <Link href="/" className='flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100'>
        <Image src="/event.svg" alt="" width={20} height={20}/>
        <span>Events</span>
        </Link>
        <hr className='border-t-1 border-gray-50 w-36 self-center'/>

        <Link href="/" className='flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100'>
        <Image src="/album.svg" alt="" width={20} height={20}/>
        <span>Albums</span>
        </Link>
        <hr className='border-t-1 border-gray-50 w-36 self-center'/>

        <Link href="/" className='flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100'>
        <Image src="/video.svg" alt="" width={20} height={20}/>
        <span>Videos</span>
        </Link>
        <hr className='border-t-1 border-gray-50 w-36 self-center'/>

        <Link href="/" className='flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100'>
        <Image src="/news.svg" alt="" width={20} height={20}/>
        <span>News</span>
        </Link>
        <hr className='border-t-1 border-gray-50 w-36 self-center'/>

        <Link href="/" className='flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100'>
        <Image src="/course.svg" alt="" width={20} height={20}/>
        <span>Courses</span>
        </Link>
        <hr className='border-t-1 border-gray-50 w-36 self-center'/>

        <Link href="/" className='flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100'>
        <Image src="/list.svg" alt="" width={20} height={20}/>
        <span>Lists</span>
        </Link>
        <hr className='border-t-1 border-gray-50 w-36 self-center'/>

        <Link href="/" className='flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100'>
        <Image src="/setting.svg" alt="" width={20} height={20}/>
        <span>Settings</span>
        </Link>
        <hr className='border-t-1 border-gray-50 w-36 self-center'/>
      </div>
      <Advertisements size="sm"/>
    </div>
  )
}

export default LeftMenu