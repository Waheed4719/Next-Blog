import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'

function Layout ({ children }) {
  console.log(children)
    return (
    <div>
      <Header />
      <Sidebar />
      <main className=' w-full pl-[220px] '>{children}</main>
    </div>
  )
}

export default Layout
