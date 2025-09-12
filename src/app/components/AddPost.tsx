import Image from 'next/image'
import React from 'react'

const AddPost = () => {
  return (
    <div className='p-4 bg-white rounded-lg flex gap-4 justify-between text-sm'>
      {/* Avatar */}
      <Image src="https://images.pexels.com/photos/27605479/pexels-photo-27605479.jpeg" 
      alt="" 
      width={48} 
      height={48} 
      className='w-12 h-12 object-cover rounded-full'/>
      {/* Post */}
      <div className=' flex-1'>
        {/* text input */}
          <div className='flex gap-4'>
            <textarea placeholder="Type Text" className="bg-slate-100 flex-1 rounded-lg pt-2" id=""></textarea>
            <Image src="emoji.svg" 
              alt="" 
              width={20} 
              height={20} 
              className='w-5 h-5 cursor-pointer self-end'
            />
          </div>
          {/* post options */}
          <div className='flex items-center gap-4 mt-4 text-gray-400 flex-wrap'>
            <div className='flex items-center gap-2 cursor-pointer'>
            <Image src="addphoto.svg" 
              alt="" 
              width={20} 
              height={20} 
            />
            Photo

            <Image src="addvideo.svg" 
              alt="" 
              width={20} 
              height={20} 
            />
            Video

            <Image src="event.svg" 
              alt="" 
              width={20} 
              height={20} 
            />
            Event

            <Image src="poll.svg" 
              alt="" 
              width={20} 
              height={20} 
            />
            Poll
            </div>
           
          </div>
      </div>
    </div>
  )
}

export default AddPost