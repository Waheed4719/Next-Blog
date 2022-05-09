import React from 'react'
import Link from 'next/link'
import { FaBook } from 'react-icons/fa'
import { IoSettingsSharp } from 'react-icons/io5'
import { IoMdNotifications } from 'react-icons/io'

const links = [
  {
    link: '/dashboard/overview',
    label: 'Overview',
    icon: <FaBook size='20' color='gray' />
  },
  {
    link: '/dashboard/posts',
    label: 'Posts',
    icon: <FaBook size='20' color='gray' />
  },
  {
    link: '/dashboard/settings',
    label: 'Settings',
    icon: <IoSettingsSharp size='20' color='gray' />
  },
  {
    link: '/dashboard/notifications',
    label: 'Notifications',
    icon: <IoMdNotifications size='20' color='gray' />
  }
]
function Sidebar () {
  return (
    <div className='fixed top-0 w-[220px] h-[100vh] bg-gray-200'>
      <div className='h-20'></div>
      <ul className='w-full p-4 flex flex-col'>
        {links?.map((item, index) => (
          <Link key={item.label} href={item.link} passHref>
            <div className='flex span-x-1 items-center'>
              {' '}
              {item.icon}
              <a className='text-gray-600 hover:text-gray-700 p-4 text-sm cursor-pointer'>
                {item.label}
              </a>
            </div>
          </Link>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar
