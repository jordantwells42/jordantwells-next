import React from 'react'

export default function FooterCol({
  heading = 'Col Heading',
  links = [
    {
      type: 'Link',
      title: 'Home',
      path: '/home',
    },
    {
      type: 'Link',
      title: 'About',
      path: '/about',
    },
  ],
}) {
  return (
    <div className='container'>
      <h2 className='text-center'>{heading}</h2>
      <div>
        {links.map((item, index) => (
          <p className="text-center" key={index}>
              <a className ="footer-item" href={item.path} target="_blank" rel="noreferrer">
                {item.title}
              </a>
            
          </p>
        ))}
      </div>
    </div>
  );
}
