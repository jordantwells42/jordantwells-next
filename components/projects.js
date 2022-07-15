import { ProjectCard } from './cards.js'
import projectsJSON from '../public/projects.json'
import Section from './section.js'


let projects = JSON.parse(JSON.stringify(projectsJSON))

export default function Projects () {
  return (
    <Section name='Projects'>
      <div className='grid md:grid-cols-1 lg:grid-cols-2 md:gap-8 sm:gap-4 flex items-center justify-center'>
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
    </Section>
  )
}
