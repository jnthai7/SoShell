import React from 'react'
import Image from 'next/image'

export const Comments = () => {
  return (
    <div className=''>
        {/* write */}
        <div className='flex items-center gap-4'>
            <Image src="https://images.pexels.com/photos/33711799/pexels-photo-33711799.jpeg" alt="" width={32} height={32} className="w-8 h-8 rounded-full"/>
        <div className='flex-1 flex items-center justify-between bg-slate-200 rounded-xl text-sm px-6 py-2 w-full'>
            <input type="text" placeholder="Write a comment..." className='bg-transparent outline-none flex-1'/>
            <Image src="/emoji.svg" alt="" width={16} height={16} className='cursor-pointer'/>
        </div>
        </div>
        {/* comments */}
        <div className=''>
            {/* comment */}
            <div className='flex gap-4 justify-between mt-6'>
                {/* avatar */}
                <Image src="https://images.pexels.com/photos/33711799/pexels-photo-33711799.jpeg" alt="" width={40} height={40} className="w-10 h-10 rounded-full"/>
                    
                {/* description */}
                <div className='flex flex-col gap-2 flex-1'>
                    <span className="font-medium">Jake Johnson</span>
                    <p>
                    A lone streetlamp flickers at the corner of an empty road, its glow casting long shadows over cracked pavement. 
                    The night air is still, carrying only the faint hum of electricity and the rustle of leaves. 
                    Somewhere in the distance, a dog barks once and falls silent again, leaving the world suspended in quiet anticipation.
                    </p>
                    <div className='flex items-center gap-8 text-cs text-gray-500 mt-2'>
                        <div className='flex items-center gap-4'>
                            <Image src="/like.svg" alt="" width={12} height={12} className='cursor-pointer w-4 h-4'/>
                            <span className='text-gray-300'>|</span>
                            <span className='text-gray-500'>123 Likes</span>
                        </div>
                        <div className=''>Reply</div>
                    </div>
                </div>
                {/* icon */}
                <Image src="/more.svg" alt="" width={16} height={16} className='cursor-pointer w-4 h-4'/>
            </div>
            
        </div>
    </div>
  )
}
