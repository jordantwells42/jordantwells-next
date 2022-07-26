import React from 'react'
import Section from './section.js'

export default function AboutMe () {
  return (
    <Section name='About Me'>
      <div className='w-full flex flex-col md:flex-row items-center justify-center gap-20'>
        <div className='text-left leading-10 max-w-prose'>
          
          <p>I am a curious, project-oriented kind of guy.</p>
          <br></br>
          <p>
            I am currently pursuing a Bachelor&apos;s degree in Chemical
            Engineering at the University of Texas at Austin, as well as a
            certificate in Elements of Computing.
          </p>
          <br></br>
          <p>
            My interests have recently been in computational biology,
            biotechnology, web development, and computer science.
          </p>
        </div>
          <img className="w-full md:w-1/3 aspect-square rounded-md border-white border-2" alt="Jordan Wells" src="/jordan.webp"/>
      </div>
    </Section>
  )
}
