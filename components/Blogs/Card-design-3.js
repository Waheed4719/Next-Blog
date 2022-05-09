import React from 'react'

function Card () {
  return (
    <div className='flex gap-2 w-full m-4 px-4 max-w-[100%]'>
      <div className='w-3/4 flex flex-col'>
        <div className='flex items-center space-x-2 mb-2'>
          <div className='rounded-full h-8 w-8  bg-gray-300'></div>
          <p className='text-sm text-gray-500'>
            Francisco Sainz in Better Programming - Apr 4
          </p>
        </div>
        <h2 className='text-2xl text-gray-800 font-bold mb-2'>
          Stop Using JSON Web Tokens For Authentication. Use Stateful Sessions
          Instead
        </h2>
        <p className='text-gray-600'>
          Yup, you'/re probably using them incorrectly — I'm tired of seeing the
          same tutorials pop up every couple of weeks. JWTokens are the
          recommended...
        </p>
      </div>
      <div className='w-1/4 flex items-center justify-center'>
        <div className='w-[112px] h-[112px] bg-gray-300'></div>
      </div>
    </div>
  )
}

export default Card
