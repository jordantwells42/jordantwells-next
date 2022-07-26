import React from 'react'

function Section (props) {
  return (
    <div className='py-2 text-white text-2xl w-5/6 md:w-3/4 flex-col flex items-center justify-center text-center'>
      <h2 id={props.name} className='text-4xl py-5 font-bold'>
        {props.name}
      </h2>
      <div className='py-2 w-full flex justify-center items-center'>{props.children}</div>
    </div>
  )
}

export default Section
