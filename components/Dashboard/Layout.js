import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'

function Layout ({ children }) {
  console.log(children)
    return (
    <div>
      <Header />
      <Sidebar />
      <main className='w-full md:w-[calc(100%-220px)] ml-auto'>{children}</main>
    </div>
  )
}

export default Layout
