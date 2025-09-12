"use client"
import Link from 'next/link';
import React, { useState } from 'react'



const MobileMenu = () => {
    const [isOpen, setIsopen] = useState(false);
  return (
    <div className='md:hidden'>
        <div className='flex flex-col gap-[4.5px] cursor-pointer'
        onClick={() => setIsopen((prev) => !prev)}
        >
            <div className={`w-6 h-1 bg-black rounded-sm ${isOpen ? "rotate-45" : ""} origin-left ease-in-out duration-500`}/>
            <div className={`w-6 h-1 bg-black rounded-sm ${isOpen ? "opacity-0" : ""}`}/>
            <div className={`w-6 h-1 bg-black rounded-sm ${isOpen ? "-rotate-45" : ""} origin-left ease-in-out duration-500`}/>
        </div>
        {isOpen && (
            <div className='absolute left-0 top-24 w-full h-[calc(100vhh-96px)] bg-white flex flex-col items-center justify-center gap-8 font-medium text-xl z-10'>
                <Link href="/">Home</Link>
                <Link href="/">Friends</Link>
                <Link href="/">Messages</Link>
                <Link href="/">Profile</Link>
                <Link href="/">Settings</Link>
            </div>
        )}
    </div>
  )
}

export default MobileMenu