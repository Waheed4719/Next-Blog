/* eslint-disable @next/next/no-html-link-for-pages */
import React from 'react'
//create Header component
function Header () {
  return (
    <header>
      <div className='container mx-auto flex items-center p-4'>
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
