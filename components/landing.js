import DownArrow from './downarrow'
import { Canvas } from '@react-three/fiber'

export default function Landing () {
  return (
    <div className='bg-stone-900 h-screen w-full items-center border-b-2 flex flex-col justify-center'>
      <h2 className='text-center text-7xl font-bold italic text-blue-300'>
        Hey! I&apos;m
      </h2>
      <h1 className='text-center text-8xl font-bold text-white'>
        Jordan Wells
      </h1>
      <DownArrow />
    </div>
  )
}
