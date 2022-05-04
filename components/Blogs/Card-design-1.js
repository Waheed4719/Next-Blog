/* eslint-disable @next/next/no-img-element */
import React, {memo} from 'react'

function Card ({ post }) {
  const { title, description, image, id, horizontal } = post
  return (
    <div className='w-full lg:w-3/4 rounded-lg shadow-md mb-2 overflow-hidden lg:flex lg:flex-row lg:h-auto'>
      <div className='bg-gray-800 w-full h-64 lg:h-64 lg:w-3/5 relative overflow-hidden'>
        <img
          className='w-full h-full absolute top-0 left-0 object-cover'
          src={image}
          alt='post-feature-image'
        />
      </div>

      <div className='p-4 lg:w-50 flex flex-col'>
        <h2 className='text-2xl font-bold text-gray-800 mb-2'>{title}</h2>
        <p className='text-gray-600 mb-8'>{description}</p>

        <div className='mt-auto flex flex-row items-center'>
          <div className='rounded-full w-10 h-10 bg-gray-700'></div>
          <div className='ml-2'>
            <p className='text-gray-600 font-semibold'>Author</p>
            <p className='text-gray-500 '>{new Date().toLocaleDateString()}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default memo(Card, (prevProps, nextProps) => {

  if(prevProps?.title !== nextProps?.title) {
    return false
  }
  if(prevProps?.description !== nextProps?.description) {
    return false
  }
  if(prevProps?.image !== nextProps?.image) {
    return false
  }
  if(prevProps?.id !== nextProps?.id) {
    return false
  }
})
