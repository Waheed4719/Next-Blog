import fetch from 'isomorphic-unfetch'
import { motion } from 'framer-motion'
import Header from '../../components/Home/Header/Header'

let easing = [0.6, -0.05, 0.01, 0.99]

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.05
    }
  }
}

const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
    transition: { duration: 0.6, ease: easing }
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing
    }
  }
}

const move = {
  animate: {
    transition: {
      duration: 1,
      ease: easing
    }
  }
}

const Product = props => (
  <>
    <Header />
    <motion.div
      className='container py-10'
      initial='initial'
      animate='animate'
      exit={{ opacity: 0 }}
    >
      <div className='py-10'>
        <h1 className='text-4xl text-[#0d1063] tracking-wide font-semibold text-center'>
          Time to Get Your House
        </h1>
        <h1 className='text-4xl text-[#0d1063] tracking-wide font-semibold text-center mb-2'>
          Clean and in Order
        </h1>
        <span className='text-center block text-sm'>
          Read it in <strong>4 minutes</strong>
        </span>
        <p className='text-sm text-gray-500 font-medium text-center mb-2 mt-4'>
          To have good air quality is not as simple as moving away from the
          quiet <br /> suberb or rural environment.
        </p>
        <div className='flex justify-center gap-4 mt-4'>
          <div className='rounded-full w-10 h-10 bg-sky-500'></div>
          <div className='rounded-full w-10 h-10 bg-sky-500'></div>
          <div className='rounded-full w-10 h-10 bg-sky-500'></div>
        </div>
      </div>

      <motion.img
        layoutId='image'
        className='rounded-md w-[80%] mx-auto h-[400px] object-cover'
        src='https://images.unsplash.com/photo-1564914138497-fc25707b9065?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z3Jhc3NsYW5kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
      />
    </motion.div>
  </>
)

Product.getInitialProps = async function (context) {
  const { id } = context.query
  const res = await fetch(
    `https://my-json-server.typicode.com/wrongakram/demo/products/${id}`
  )
  console.log(res)
  const product = await res.json()
  return { product }
}

export default Product
