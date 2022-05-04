/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Card from '../components/Blogs/Card-design-2'
import Header from '../components/Header/Header'
import styles from '../styles/Home.module.css'
import { motion } from 'framer-motion'
import Link from 'next/link'

// Our custom easing
let easing = [0.6, -0.05, 0.01, 0.99]

// animate: defines animation
// initial: defines initial state of animation or stating point.
// exit: defines animation when component exits

// Custom variant
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

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

const posts = [
  {
    id: Math.random(100),
    title: 'How to use Tailwind CSS',
    description:
      'Tailwind CSS is a utility-first CSS framework for rapidly building custom, high-fidelity, fully responsive, and accessible websites.Irure dolore officia quis nisi labore exercitation. Dolore ullamco est laborum quis labore et cillum quis non. Id eiusmod anim ex officia mollit ut id. Laboris dolore occaecat enim occaecat ut aliquip voluptate aliqua eiusmod Lorem mollit qui.',
    image:
      'https://images.unsplash.com/photo-1500964757637-c85e8a162699?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1203&q=80'
  },
  {
    id: Math.random(100),
    title: 'How to use Next JS',
    description:
      'Tailwind CSS is a utility-first CSS framework for rapidly building custom, high-fidelity, fully responsive, and accessible websites.Irure dolore officia quis nisi labore exercitation. Dolore ullamco est laborum quis labore et cillum quis non. Id eiusmod anim ex officia mollit ut id. Laboris dolore occaecat enim occaecat ut aliquip voluptate aliqua eiusmod Lorem mollit qui.',
    image: 'https://source.unsplash.com/random/800x600'
  },
  {
    id: Math.random(100),
    title: 'How to use Tailwind CSS',
    description:
      'Tailwind CSS is a utility-first CSS framework for rapidly building custom, high-fidelity, fully responsive, and accessible websites.Irure dolore officia quis nisi labore exercitation. Dolore ullamco est laborum quis labore et cillum quis non. Id eiusmod anim ex officia mollit ut id. Laboris dolore occaecat enim occaecat ut aliquip voluptate aliqua eiusmod Lorem mollit qui.',
    image:
      'https://images.unsplash.com/photo-1500964757637-c85e8a162699?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1203&q=80'
  },
  {
    id: Math.random(100),
    title: 'How to use Next JS',
    description:
      'Tailwind CSS is a utility-first CSS framework for rapidly building custom, high-fidelity, fully responsive, and accessible websites.Irure dolore officia quis nisi labore exercitation. Dolore ullamco est laborum quis labore et cillum quis non. Id eiusmod anim ex officia mollit ut id. Laboris dolore occaecat enim occaecat ut aliquip voluptate aliqua eiusmod Lorem mollit qui.',
    image: 'https://source.unsplash.com/random/800x600'
  }
]

const images = [
  'https://images.unsplash.com/photo-1564914138497-fc25707b9065?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z3Jhc3NsYW5kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1607379944437-d852447da9c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Z3Jhc3NsYW5kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1494187570835-b188e7f0f26e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Z3Jhc3NsYW5kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Z3Jhc3NsYW5kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1607379944437-d852447da9c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Z3Jhc3NsYW5kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Z3Jhc3NsYW5kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1564914138497-fc25707b9065?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z3Jhc3NsYW5kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1607379944437-d852447da9c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Z3Jhc3NsYW5kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1607379944437-d852447da9c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Z3Jhc3NsYW5kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1494187570835-b188e7f0f26e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Z3Jhc3NsYW5kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Z3Jhc3NsYW5kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
]
const myLoader = ({ src }) => {
  return src
}

const carLightsOff = '../static/images/car.png'
const carLightsOn = '../static/images/car-lights-on.png'
function Home (props) {
  const [carOn, setCarOn] = useState(true)

  return (
    <div className={styles.container}>
      <Head>
        <title>Next Blog</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <section className={styles.hero}>
        <div className='mx-auto flex h-full flex-col items-center relative backgroundImage'>
          {/* <div className='flex flex-col h-full w-full items-center relative'> */}
          <Image
            src='../static/images/Starry.jpg'
            // src={'https://source.unsplash.com/random/800x600'}
            alt=''
            title=''
            width='100%'
            height='100%'
            layout='responsive'
            // loader={myLoader}
            unoptimized={true}
            objectFit='cover'
          />
          <div className='container mx-auto w-full h-full relative'>
            <div className='w-fit absolute  top-[50%] translate-y-[-50%] md:translate-y-[0%] md:top-[22%] left-0 right-0 bg-opacity-30 bg-black p-8 rounded-md mx-4'>
              <h1 className='text-5xl font-bold text-white mb-3'>
                Time to get your house clean
              </h1>
              <h1 className='text-5xl font-bold text-white'>
                Clean and in order
              </h1>
              <p className='text-gray-200 text-lg mt-4'>
                To have good air quality is not as simple as moving away from
                the city to a
              </p>
              <p className='text-gray-200 text-lg '>
                quiet suburb or rural environment
              </p>

              <button className='border-solid border-1 bg-blue-500 border-sky-500 w-fit py-1 px-4 rounded-md mt-8 my-4 text-md text-white'>
                Read Article
              </button>
            </div>
          </div>
        </div>
        {/* </div> */}
      </section>

      <div className='container gap-4 w-full py-10 px-4 mx-auto flex-row flex items-start'>
        <div className='grid grid-cols-1 md:grid-cols-2  gap-4 items-start'>
          {posts?.slice(0, 2).map((item, index) => (
            <Card key={item.id} post={item} showImage={true} charLength={150} />
          ))}
        </div>
        <div className='sm:d-none gap-y-4 hidden sm:flex flex-col '>
          {posts?.slice(1, 4).map((item, index) => (
            <Card
              key={item.id}
              post={item}
              charLength={100}
              size='sm'
              buttonType='linkTag'
            />
          ))}
        </div>
      </div>

      <div className='container flex justify-between w-88 px-4 items-center'>
        <h3 style={{ color: '#0d1063' }} className='text-3xl font-semibold'>
          The Science behind SmartUV
        </h3>
        <button className='border-solid border-2 border-sky-500 w-fit py-1 px-4 rounded-md my-2 text-sm text-sky-500'>
          Read Article
        </button>
      </div>

      <div className='container py-4 px-4 gap-4 grid-cols-1 md:grid-cols-2  lg:grid-cols-4 grid  w-88 mx-auto items-start'>
        {posts?.map((item, index) => (
          <Card
            key={item.id + `- ${index}`}
            post={item}
            showImage={true}
            buttonType='linkTag'
          />
        ))}
      </div>
      <div className='moving-car'>
        <div className='sky'>
          <div className='surface'></div>
       
            <img 
            className='car' onClick={() => setCarOn(!carOn)}
              src={carOn ? carLightsOn : carLightsOff}
              alt='car'
              title=''
              layout='responsive'
              // loader={myLoader}
              unoptimized={true}
              objectFit='cover'
            />
        </div>
      </div>
      <div className='container py-10 px-4 gap-4 grid-rows-4 md:grid-rows-3 grid-cols-1 md:grid-cols-3 hidden  md:grid  w-88 mx-auto '>
        <div className='gap-4 grid-cols-1 md:grid-cols-1 row-span-3  flex flex-col md:grid '>
          {posts?.slice(0, 3).map((item, index) => (
            <div
              className={`row-span-[${index + 1}] flex flex-1`}
              key={item.id + `- ${index}`}
            >
              <Card
                key={item.id + `- ${index}`}
                post={item}
                buttonType='linkTag'
              />
            </div>
          ))}
        </div>
        <div className='gap-4 grid-cols-1 md:grid-cols-1 col-span-2 row-span-3  grid  items-start'>
          {posts?.slice(3, 4).map((item, index) => (
            <Card
              key={item.id + `- ${index}`}
              post={item}
              showImage={true}
              buttonType='linkTag'
              noText={true}
            />
          ))}
        </div>
      </div>

      {/* <motion.div variants={stagger} className='product-row flex flex-row mb-4'>
        {props.products?.map(product => (
          <Link
            key={product.id}
            href='/posts/[id]'
            as={`/posts/${product.id}`}>
            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='card'>
                {console.log(product)}
              <span className='category'>Protein</span>
              <motion.img
                initial={{ x: 60, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                key={product.image}
                src={'https://cdn.shopify.com/s/files/1/2060/6331/products/Vegan.png?v=1574882358'}
                width={250}
              />
              <div className='product-info'>
                <h4>{product.name}</h4>
                <span>{product.price}</span>
              </div>
            </motion.div>
          </Link>
        ))}
        </motion.div> */}
    </div>
  )
}

Home.getInitialProps = async function () {
  const res = await fetch(
    'https://my-json-server.typicode.com/wrongakram/demo/products'
  )
  const data = await res.json()
  return {
    products: data
  }
}
export default Home
