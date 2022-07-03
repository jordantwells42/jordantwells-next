import React, { useState } from 'react'
import Link from 'next/link'
const links = [
  {
    name: 'Home',
    href: '/'
  },
  {
    name: 'GitHub',
    href: 'https://github.com/jordantwells42'
  },
  {
    name: 'Medium',
    href: 'https://medium.com/@jordantwells'
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/jordantwells'
  },
  {
    name: 'Resume',
    href: '/jtw_resume.pdf'
  }
]

export default function Navbar () {
  let [toggle, setToggle] = useState(false)
  let [toggleStyle, setToggleStyle] = useState({
    marginy: 'lg:-mx-3 -my-3',
    translatey: '-translate-y-80'
  })

  const changeToggle = e => {
    setToggle(p => !p)
    if (!toggle) {
      setToggleStyle({
        marginy: 'lg:mx-5 my-1',
        translatey: 'translate-y-0'
      })
    } else {
      setToggleStyle({
        marginy: 'lg:-mx-3 -my-3',
        translatey: '-translate-y-80'
      })
    }
  }

  return (
    <div className='rounded-full lg:h-20 flex lg:flex-row flex-col-reverse items-center justify-center fixed top-5 right-5 z-50'>
      <div
        className={
          toggleStyle.translatey +
          ' p-3 border-2 rounded-full bg-slate-800 flex lg:flex-row flex-col z-40'
        }
      >
        {links.map(link => {
          return (
            <Link scroll={false} key={link.name} href={link.href}>
              <a
                className={
                  toggleStyle.marginy +
                  ' transition-all ease-out duration-100 bold text-lg text-center text-white hover:text-blue-300'
                }
              >
                {link.name}
              </a>
            </Link>
          )
        })}
      </div>
      <div
        onClick={changeToggle}
        className='flex flex-col items-center justify-center text-center border-2 hover:cursor-pointer  rounded-full bg-blue-400 w-14 h-14 z-50'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-3/4 w-3/4 text-white flex flex-row justify-center items-center'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          strokeWidth={2}
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M4 6h16M4 12h16M4 18h16'
          />
        </svg>
      </div>
    </div>
  )
}
