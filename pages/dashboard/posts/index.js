import Link from 'next/link'
import React from 'react'

function posts () {
  return (
    <div>
      <Link passHref href='/dashboard/posts/create'>
        <a>Create Post</a>
      </Link>
    </div>
  )
}

export default posts
