import pubsJSON from '../public/pubs.json'
import Section from './section.js'


let pubs = JSON.parse(JSON.stringify(pubsJSON))
// each pub has a title, authors, and url

export default function Publications () {
  return (
    <Section name='Publications'>
      <div className="w-3/4">
      <div className='grid grid-cols-1 lg:grid-cols-2 md:gap-4 sm:gap-2 flex-wrap items-center justify-center'>
        {pubs.map(pub => (
          <a className="w-full flex flex-col justify-start items-start text-left" target="_blank" rel="noreferrer" key={pub.title} href={pub.url}>
            <p className="w-full text-base font-bold">{pub.title}</p>
            <p className="w-full text-xs font-normal italic">{pub.authors}</p>
          </a>
        ))}
      </div>
      </div>
    </Section>
  )
}
