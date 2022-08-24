import { ProjectCard } from './cards.js'
import projectsJSON from '../public/projects.json'
import Section from './section.js'


let projects = JSON.parse(JSON.stringify(projectsJSON))

export default function Projects () {
  return (
    <Section name='Projects'>
      <div><h3 className='text-center text-xl text-stone-300 pb-5 italic'>Learn more by clicking an image</h3>
      <div className='grid grid-cols-1 lg:grid-cols-2 md:gap-4 sm:gap-2 flex-wrap items-center justify-center'>
        
        {projects.map(project => (
          <ProjectCard
            key={project.title}
            img={project.images[0]}
            alt={project.alts[0]}
            title={project.title}
            className=''
            subtitle={project.subtitle}
            language={project.skills.join(' | ')}
          />
        ))}
      </div>
      </div>
    </Section>
  )
}
