import React from 'react'

function Header () {
  return (
    <header className='relative w-[calc(100%-220px)] ml-auto  h-16 bg-gray-200 flex items-center'>
      <div className='w-full mx-auto flex items-center py-4 px-6'>
        <div className='w-1/2'>
          <a
            href='/'
            className='text-gray-600 text-md font-semibold hover:text-gray-800'
          >
            Next-blog
          </a>
        </div>
        <div className='w-1/2 text-right'>
          <a
            href='/dashboard'
            className='text-gray-600 text-md font-semibold hover:text-gray-800'
          >
            Dashboard
          </a>
          <a
            href='/'
            className='ml-4 text-gray-600 text-md font-semibold hover:text-gray-800'
          >
            About
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
