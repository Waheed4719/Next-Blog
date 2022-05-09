/* eslint-disable @next/next/no-img-element */
import React, { memo } from 'react'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import Link from 'next/link'

function Card ({
  post,
  showImage,
  size = 'md',
  buttonType = 'button',
  noText = false
}) {
  const router = useRouter()
  const { title, description, image, id, charLength = 150 } = post
  return (
    <div className='flex flex-col w-full items-start'>
      {showImage && (
        <div className='rounded-lg w-full aspect-auto h-auto bg-gray-500 mb-2'>
          <motion.img
            layout
            className='  rounded-lg w-full h-200 md:h-full object-cover aspect-video object-center'
            src={image}
            alt='card-image'
          />
        </div>
      )}

      {!noText && (
        <>
          <h2
            className={`w-full text-[#0d1063] font-semibold mb-2 ${
              size === 'sm' ? 'text-xl' : 'text-3xl'
            }`}
          >
            {title}
          </h2>

          <p
            className={`text-gray-500 leading-6 ${
              size === 'sm' ? 'text-[12px]' : 'text-sm'
            }`}
          >
            {description?.substring(0, charLength) + '...'}
          </p>
          {buttonType === 'linkTag' ? (
            <Link href={`/posts/`} passhref>
              <a className='underline  mt-2 text-sm text-sky-500'>
                Read Article
              </a>
            </Link>
          ) : (
            <button
              // onClick={() => router.push(`/posts/${id}`)}
              className='border-solid border-2 border-sky-500 w-fit py-1 px-4 rounded-md my-4 text-sm text-sky-500'
            >
              Read Article
            </button>
          )}
        </>
      )}
    </div>
  )
}

export default memo(Card, (prevProps, nextProps) => {
  if (prevProps?.title !== nextProps?.title) {
    return false
  }
  if (prevProps?.description !== nextProps?.description) {
    return false
  }
  if (prevProps?.image !== nextProps?.image) {
    return false
  }
  if (prevProps?.id !== nextProps?.id) {
    return false
  }
})
