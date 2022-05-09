import Link from 'next/link'
import React from 'react'
import Layout from '../../../components/Dashboard/Layout'
import Card from '../../../components/Blogs/Card-design-3'

function Posts () {
  return (
    <div className='container p-4'>
      <Link passHref href='/dashboard/posts/create'>
        <a className='px-4 py-2 bg-sky-500 mb-2 items-center flex w-fit text-white rounded-md'>
          Create Post
        </a>
      </Link>

      <div className='flex flex-col gap-4 max-w-[100%'>
        <Card />
        <hr className='my-4 bg-gray-500' />
        <Card />
        <hr className='my-4 bg-gray-500' />
        <Card />
        <hr className='my-4 bg-gray-500' />
        <Card />
        <hr className='my-4 bg-gray-500' />
      </div>
    </div>
  )
}
Posts.getLayout = function getLayout (children) {
  return <Layout>{children}</Layout>
}

export default Posts
