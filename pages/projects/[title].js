import Head from 'next/head'
import { useRouter } from 'next/router'
import projectsJSON from '../../public/projects.json'
import Divider from '../../components/divider.js'
import { Card } from '../../components/cards.js'
import Footer from '../../components/footer.js'
import ProjectLanding from '../../components/projectlanding.js'
import Section from '../../components/section.js'
import Navbar from '../../components/navbar.js'

const projects = JSON.parse(JSON.stringify(projectsJSON))

export default function Project ({ project }) {
  const { asPath } = useRouter

  return (
    <>
      <Head>
        <title>Jordan Wells - {project.title}</title>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1'
        ></meta>
        <meta
          name='description'
          content={"Jordan Wells' " + project.title + '. ' + project.subtitle}
        />
        <meta
          property='og:description'
          content={"Jordan Wells' " + project.title + '. ' + project.subtitle}
        />
        <meta property='og:title' content='Jordan Wells' key='title' />
        <meta
          property='og:image'
          content={
            'https://i.ibb.co/zRKHD47/Screen-Shot-2022-07-01-at-3-18-55-PM.png'
          }
        />
        <meta
          property='og:url'
          content={'https://jordantwells.com/projects' + asPath}
        />
      </Head>
      <div className='bg-slate-900 w-full overflow-x-hidden flex flex-col items-center'>
        <Navbar />
        <ProjectLanding
          src={project.images[0]}
          title={project.title}
          subtitle={project.subtitle}
        />
        <Section name='Description'>
          <div className='max-w-prose text-left'>
            <p>{project.desc}</p>
          </div>
        </Section>
        <Divider />
        <Section name='Learn More'>
          <div className='grid w-full md:grid-cols-1 lg:grid-cols-2 md:gap-8 sm:gap-4 flex flex-row items-center justify-center'>
            {project.links.map((link, idx) => (
              <Card
                img={project.images[(idx + 1) % project.images.length]}
                alt={project.alts[(idx + 1) % project.images.length]}
                key={link.title}
                title={link.title}
                subtitle={link.subtitle}
                link={link.link}
              />
            ))}
          </div>
        </Section>
        <Footer />
      </div>
    </>
  )
}

export async function getStaticPaths () {
  return {
    paths: [
      { params: { title: 'minimage' } },
      { params: { title: 'NoteTab' } },
      { params: { title: 'Protein Viewer' } },
      { params: { title: 'This Site' } },
      { params: { title: 'Ray Marching' } },
      { params: { title: 'PalArt' } },
      { params: { title: "They're a 10 but..." } },
      { params: { title: "Tarot" } },
      { params: { title: 'HueWind' } },
      { params: { title: 'Vibesition' } },
    ],
    fallback: false // false or 'blocking'
  }
}

export async function getStaticProps ({ params }) {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const project = projects.filter(project => project.title === params.title)[0]

  // By returning {props: {posts} }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      project
    }
  }
}
