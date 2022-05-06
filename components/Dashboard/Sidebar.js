import React from 'react'
import Link from 'next/link'

const links = [
  { link: '/dashboard/overview', label: 'Overview' },
  { link: '/dashboard/posts', label: 'Posts' },
  { link: '/dashboard/settings', label: 'Settings' },
  { link: '/dashboard/notifications', label: 'Notifications' }
]
function Sidebar () {
  return (
    <div className='fixed top-0 w-[220px] h-[100vh] bg-gray-200'>
        <div className='h-20'>

        </div>
      <ul className='w-full p-4 flex flex-col'>
        {links?.map((item, index) => (
          <Link key={item.label} href={item.link} passHref>
            <a className='hover:text-sky-500 p-4 text-sm'>{item.label}</a>
          </Link>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar
