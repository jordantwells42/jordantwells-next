import { motion } from 'framer-motion'

export default function Landing () {
  return (
    <div className='bg-stone-900 h-screen w-full items-center border-b-2 flex flex-col justify-center'>
      <motion.h2
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        className='text-center text-7xl font-bold italic text-blue-300'
      >
        Hey! I&apos;m
      </motion.h2>
      <motion.h1
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        className='text-center text-8xl font-bold text-white'
      >
        Jordan Wells
      </motion.h1>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='animate-bounce sticky mt-10 bottom-0 h-10 w-10 text-white z-50'
        viewBox='0 0 20 20'
        fill='currentColor'
      >
        <path
          fillRule='evenodd'
          d='M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z'
          clipRule='evenodd'
        />
      </svg>
    </div>
  )
}
