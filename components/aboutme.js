import React from 'react'
import Section from './section.js'

export default function AboutMe () {
  return (
    <Section name='About Me'>
      <div className='text-base md:text-lg lg:text-xl w-5/6 md:w-5/6 flex flex-col-reverse md:flex-row items-center justify-center gap-10'>
        <div className='text-left max-w-prose'>
          
          <p>I&apos;m Jordan Wells! I am a curious, project-oriented developer.</p>
          <br></br>
          <p>
            As of May 2023, I have completed a Bachelor&apos;s degree in Chemical
            Engineering at the University of Texas at Austin as of, as well as a
            certificate in Elements of Computing.
          </p>
          <br></br>
          <p>
            My interests are in software engineering, data science, computational biology, and machine learning.
          </p>
        </div>
          <img className="w-1/2 md:w-1/3 aspect-square rounded-md border-white border-2" alt="Jordan Wells" src="/jordan.webp"/>
      </div>
    </Section>
  )
}
