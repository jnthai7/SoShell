import Image from "next/image"
import { Comments } from "./Comments"

const Post = () => {
  return (
    <div className="flex flex-col gap-4">
        {/* user */}
        <div className="flex item-center justify-between">
            <div className="flex items-center gap-4">
                <Image src="https://images.pexels.com/photos/33860677/pexels-photo-33860677.jpeg" alt="" width={40} height={40} className="w-10 h-10 rounded-full"/>
                <span className="font-medium">Mike Hunt</span>
            </div>
            <Image src="/more.svg" alt="" width={16} height={16}/>
        </div>
        {/* description */}
        <div className="flex flex-col gap-4">
                <div className="w-full min-h-96 relative">
                <Image src="https://images.pexels.com/photos/33308834/pexels-photo-33308834.jpeg" alt="" fill 
                className="object-cover rounded-md"/>
                
            </div>
            <p>
                 A lone streetlamp flickers at the corner of an empty road, its glow casting long shadows over cracked pavement. 
                The night air is still, carrying only the faint hum of electricity and the rustle of leaves. 
                Somewhere in the distance, a dog barks once and falls silent again, leaving the world suspended in quiet anticipation.
            </p>
        </div>
        {/* interactions */}
        <div className="flex items-center justify-between text-sm my-4">
            <div className="flex gap-8">
                <div className="flex items-center gap-4 bg-slate-200 p-2 rounded-xl">
                    <Image src="/like.svg" alt="" width={16} height={16} className="cursor-pointer"/>
                    <span className="text-gray-300">|</span>
                    <span className="text-gray-500"> 
                     123 <span className="hidden md:inline">Likes</span></span>
                    
                </div>
                <div className="flex items-center gap-4 bg-slate-200 p-2 rounded-xl">
                    <Image src="/comment.svg" alt="" width={16} height={16} className="cursor-pointer"/>
                    <span className="text-gray-300">|</span>
                    <span className="text-gray-500">
                    123 <span className="hidden md:inline">Comments</span></span>
                    
                </div>

                <div className="flex items-center gap-4 bg-slate-200 p-2 rounded-xl">
                    <Image src="/share.svg" alt="" width={16} height={16} className="cursor-pointer"/>
                    <span className="text-gray-300">|</span>
                    <span className="text-gray-500">
                    123 <span className="hidden md:inline">Shares</span></span>
                    
                </div>
            </div>
            

        </div>
        <Comments/>
    </div>
  )
}

export default Post