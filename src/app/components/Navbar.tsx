import React from 'react'
import Link from "next/link"
import Image from "next/image"
import MobileMenu from './MobileMenu'
import { ClerkLoaded, ClerkLoading, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
const Navbar = () => {
  return (
    <div className='h-24 flex items-center justify-between'>
      {/*Left side of navbar*/}
      <div className='md:hidden lg:block w-[20%]'>
        <Link href='/' className="font-bold text-xl text-blue-800">SoShell</Link>
      </div>
      {/*Center side of navbar*/}
      <div className='hidden md:flex w-[50%] text-sm items-center justify-between'>
        <div className='flex gap-6 text-gray-600'>
          <Link href="/" className="flex items-center gap-2">
            <Image src="/home.svg" alt="Homepage" width={16} height={16} className="w-4 h-4"/>
            <span>Homepage</span>
          </Link>
          <Link href="/" className="flex items-center gap-2">
            <Image src="/friends.svg" alt="friends" width={16} height={16} className="w-4 h-4"/>
            <span>Friends</span>
          </Link>
          <Link href="/" className="flex items-center gap-2">
            <Image src="/globe.svg" alt="Stories" width={16} height={16} className="w-4 h-4"/>
            <span>Stories</span>
          </Link>
        </div>
        <div className="hidden xl:flex p-2 bg-slate-100 items-center rounded-xl">
          <input type="text" placeholder="search..." className="bg-transparent outline-none"/>
          <Image src="/search.svg" alt="" width={14} height={14}/>
        </div>
      </div>
      {/*Right side of navbar*/}
      <div className=' w-[30%] flex items-center gap-4 xl:gap-8 justify-end'>
        <ClerkLoading>
          <div className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-gray-500 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white" />
        </ClerkLoading>
        <ClerkLoaded>
          <SignedIn>
            <div className='cursor-pointer'>
              <Image src="/friends.svg" alt="" width={25} height={25}/>
              
            </div>
            <div className='cursor-pointer'>
              <Image src="/message.svg" alt="" width={25} height={25}/>
              
            </div>
            <div className='cursor-pointer'>
              <Image src="/bell.svg" alt="" width={25} height={25}/>
              
            </div>
            <UserButton/>
            
          </SignedIn>
          <SignedOut>
            <div className='flex items-center gap-2 text-sm'>
              <Image src="/login.svg" alt="" width={20} height={20}/>
              <Link href="sign-in">Login/Register</Link>
            </div>
            {/* Signed out */}
          </SignedOut>
        </ClerkLoaded>
        <MobileMenu/>
      </div>
      
    </div>
    
  )
}

export default Navbar