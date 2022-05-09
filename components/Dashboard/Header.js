import React from 'react'
import Link from 'next/link'

function Header () {
  return (
    <header className='relative w-[calc(100%-220px)] ml-auto  h-16 bg-gray-200 flex items-center'>
      <div className='w-full mx-auto flex items-center py-4 px-6'>
        <div className='w-1/2'>
          <Link href='/' passHref>
            <a className='text-gray-600 text-md font-semibold hover:text-gray-800'>
              Next-blog
            </a>
          </Link>
        </div>
        <div className='w-1/2 text-right'>
          <Link href={'/dashboard'} passHref>
            <a className='text-gray-600 text-md font-semibold hover:text-gray-800'>
              Dashboard
            </a>
          </Link>
          <Link passHref href={'/login'}>
            <a className='ml-4 text-gray-600 text-md font-semibold hover:text-gray-800'>
              About
            </a>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
