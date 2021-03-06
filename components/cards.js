/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'
import { motion } from "framer-motion"

export function ProjectCard (props) {
  return (
    <Card
      title={props.title}
      subtitle={props.subtitle}
      language={props.language}
      img={props.img}
      alt={props.alt}
      link={'/projects/' + props.title}
    ></Card>
  )
}

export function Card (props) {
  return (
    <Link href={props.link}>
      <motion.div
        initial={{x:-10, opacity:0}}
        whileInView={{x:0,opacity:1}}
        whileHover={{scale:1.05}}
        className='flex flex-col rounded border-2 m-3'>
        <div className='group w-full h-80'>
          <img
            className='transition-all ease-in-out duration-200 hover-none:brightness-50 hover-hover:group-hover:brightness-[0.1]  object-cover w-full h-full '
            src={props.img}
            alt={props.alt}
          />
          <div className='transition-all ease-in-out duration-200 hover-none:opacity-100 hover-hover group-hover:cursor-pointer opacity-10 group-hover:opacity-100 -translate-y-full h-full w-full text-center flex flex-col items-center justify-center px-3'>
            <h1 className='font-bold text-3xl'>{props.title}</h1>
            <h2 className='italic font-bold text-blue-200 text-xl'>
              {props.subtitle}
            </h2>
            <h2 className='font-bold text-lg mt-10'>{props.language}</h2>
          </div>
        </div>
      </motion.div>
    </Link>
  )
}
